import { GetTokenResponse } from "../types/GetTokenResponse";
import { Token } from "../types/Token";
import Link from "next/link";
import { BASE_URL, PATH_TOKENS } from "@/app/contants";
import Image from "next/image";

interface TokenListProps {
  search: string;
}

const getTokenList = async () => {
  const res = await fetch(`${BASE_URL}/${PATH_TOKENS}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const tokenResponse = (await res.json()) as GetTokenResponse;
  //Assuming we only want to read from the list of tokens in for the key 1 in tokenResponse
  return tokenResponse.tokens["1"];
};

async function TokenList({ search }: TokenListProps) {
  const tokens = (await getTokenList()) as Token[];

  const filtered =
    search && search !== ""
      ? tokens.filter(
          (token) =>
            search.toLocaleLowerCase() === token.name.toLocaleLowerCase()
        )
      : tokens;

  return (
    <div className="">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 h-20 border-slate-700">
            <th className="w-4/12">Name</th>
            <th className="w-6/12">Address</th>
            <th className="w-2/12">Logo</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((token) => (
            <tr
              key={token.address}
              className="w-100 border-b-2 border-gray-800 h-20"
            >
              <td className="w-4/12 text-center h-full max-w-40">
                <Link href={`token/${token.address}`}>{token.name}</Link>
              </td>
              <td className="w-6/12 text-center max-w-40">
                <Link href={`token/${token.address}`}>{token.address}</Link>
              </td>
              <td className="w-100 flex justify-center h-20 items-center">
                {token.logoURI !== "" && (
                  <Image
                    src={token.logoURI}
                    width={50}
                    height={50}
                    alt={`${token.name} Logo`}
                  />
                  // <img
                  //   className=""
                  //   src={token.logoURI}
                  //   alt={`${token.name} Logo`}
                  //   width="50"
                  //   height="50"
                  // />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TokenList;
