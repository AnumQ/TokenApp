import { GetTokenResponse } from "@/app/types/GetTokenResponse";

interface TokenDetailProps {
  params: {
    address: string;
  };
}

// Will generate static pages during build
export async function generateStaticParams() {
  const API_URL = "https://li.quest/v1/tokens";

  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const tokenResponse = (await res.json()) as GetTokenResponse;
  //Assuming we only want to read from the list of tokens in for the key 1 in tokenResponse
  const tokens = tokenResponse.tokens["1"];

  return tokens;
}

const getToken = async (chainId: number, address: string) => {
  const API_URL = `https://li.quest/v1/token?chain=${chainId}&token=${address}`;

  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

const TokenDetail: React.FC<TokenDetailProps> = async ({ params }) => {
  const { address } = params;

  // Assuming we are only using chain 1
  const token = await getToken(1, address);

  return (
    <div>
      <h1>{token.name}</h1>
      <p>Address: {token.address}</p>
      {/* <img
        src={token.logoURI}
        alt={`${token.name} Logo`}
        width="100"
        height="100"
      /> */}
    </div>
  );
};

export default TokenDetail;
