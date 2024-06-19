import { TError } from "@/app/types/TError";
import { GetTokenResponse } from "@/app/types/GetTokenResponse";
import { Token } from "@/app/types/Token";
import { BASE_URL, PATH_TOKEN, PATH_TOKENS } from "@/app/contants";
import Image from "next/image";
import DetailItemView from "@/app/components/detail/DetailItemView";
import Heading from "@/app/components/overview/Heading";

// Revalidates every 5 seconds
export const revalidate = 5;

export const dynamicParams = false;

const getToken = async (
  chainId: string,
  address: string
): Promise<Token | TError> => {
  const API_URL = `${BASE_URL}/${PATH_TOKEN}?chain=${chainId}&token=${address}`;

  const res = await fetch(API_URL);

  if (!res.ok) {
    if (res.status === 429) {
      // console.log(`${res.status} ${address}`);
    }
    return {
      message: "Something went wrong. Try again",
    };
  }

  return await res.json();
};

interface PageProps {
  chainId: string;
  address: string;
}

export default async function Page({ params }: { params: PageProps }) {
  const { chainId, address } = params;

  const result = await getToken(chainId, address);

  const errorMessage = (result as TError).message;
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const token = result as Token;

  return (
    <>
      <Heading title="TOKEN DETAIL" />
      <div className="h-5"></div>
      <div className="font-sans grid border border-neutral-700 p-10 rounded last:pb-0 max-w-2xl mx-auto">
        <div className="">
          <div className="float-right">
            {!!token.logoURI && (
              <Image src={token.logoURI} width={50} height={50} alt="logo" />
            )}
          </div>
          <DetailItemView label="Name" value={token.name} />
        </div>
        <DetailItemView label="Address" value={token.address} />
        <div className="flex flex-row gap-20">
          <DetailItemView label="Chain" value={token.chainId.toString()} />
          <DetailItemView label="Symbol" value={token.symbol} />
          <DetailItemView label="Price (USD)" value={token.priceUSD} />
        </div>
        <DetailItemView label="Coin Key" value={token.coinKey} />
      </div>
    </>
  );
}

// Will generate static pages during build
export async function generateStaticParams() {
  const API_URL = `${BASE_URL}/${PATH_TOKENS}`;

  const res = await fetch(API_URL);

  if (!res.ok) {
    console.error(
      "Something went wrong when generating static params. Response from server: ",
      res.statusText
    );
    return [];
  }

  const tokenResponse = (await res.json()) as GetTokenResponse;
  const allTokens = Object.keys(tokenResponse.tokens).reduce(
    (prev: Token[], curr: string) => {
      return [...prev, ...tokenResponse.tokens[curr]];
    },
    []
  );

  return allTokens.map((token) => ({
    chainId: token.chainId.toString(),
    address: token.address,
  }));
}
