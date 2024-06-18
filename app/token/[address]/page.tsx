import { TError } from "@/app/types/TError";
import { GetTokenResponse } from "@/app/types/GetTokenResponse";
import { Token } from "@/app/types/Token";

// Revalidates every 5 seconds
export const revalidate = 5;

export const dynamicParams = false;

const getToken = async (
  chainId: number,
  address: string
): Promise<Token | TError> => {
  const API_URL = `https://li.quest/v1/token?chain=${chainId}&token=${address}`;

  const res = await fetch(API_URL);
  if (!res.ok) {
    if (res.status === 429) {
      console.log(`${res.status} ${address}`);
    }
    return {
      message: "Something went wrong. Try again",
    };
  }

  return await res.json();
};

// Will generate static pages during build
export async function generateStaticParams() {
  const API_URL = "https://li.quest/v1/tokens";

  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data while generating static params");
  }

  const tokenResponse = (await res.json()) as GetTokenResponse;
  //Assuming we only want to read from the list of tokens in for chain 1 in tokenResponse
  const tokens = tokenResponse.tokens["1"];
  return tokens;
}

interface PageProps {
  address: string;
}

const DetailValue = ({ label, value }: { label: string; value: string }) => (
  <div className="pb-10">
    <dt className="font-bold mb-2">{label}</dt>
    <dd>{value}</dd>
  </div>
);

export default async function Page({ params }: { params: PageProps }) {
  const { address } = params;

  const result = await getToken(1, address);

  const errorMessage = (result as TError).message;
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  const token = result as Token;

  return (
    <div className="font-sans grid border border-neutral-700 p-10 rounded last:pb-0 max-w-2xl mx-auto">
      <div className="">
        <div className="float-right">
          {!!token.logoURI && (
            // Using img tag instead of next/image since we need to define ALL the remote patterns where the images are located (which I don't have)
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className=""
              src={token.logoURI}
              alt={`${token.name} Logo`}
              width="50"
              height="50"
            />
            // <Image src={token.logoURI} width={50} height={50} alt="logo" />
          )}
        </div>
        <DetailValue label="Name" value={token.name} />
      </div>
      <DetailValue label="Address" value={token.address} />
      <div className="flex flex-row gap-20">
        <DetailValue label="Chain" value={token.chainId.toString()} />
        <DetailValue label="Symbol" value={token.symbol} />
        <DetailValue label="Price (USD)" value={token.priceUSD} />
      </div>
      <DetailValue label="Coin Key" value={token.coinKey} />
    </div>
  );
}
