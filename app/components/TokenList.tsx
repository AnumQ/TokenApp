import { GetTokenResponse } from "../types/GetTokenResponse";
import { Token } from "../types/Token";
import Link from "next/link";

interface TokenListProps {
  search: string;
}

const API_URL = "https://li.quest/v1/tokens";

export const getTokenList = async () => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const tokenResponse = (await res.json()) as GetTokenResponse;
  //Assuming we only want to read from the list of tokens in for the key 1 in tokenResponse
  return tokenResponse.tokens["1"];
};

export default async function TokenList({ search }: TokenListProps) {
  const tokens = await getTokenList();

  const tokenList = tokens.slice(0, 100) as Token[];
  const filtered =
    search && search !== ""
      ? tokenList.filter(
          (token) =>
            search.toLocaleLowerCase() === token.name.toLocaleLowerCase()
        )
      : tokenList;

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
                {token.name}
              </td>
              <td className="w-6/12 text-center max-w-40">{token.address}</td>
              <td className="w-100 flex justify-center h-20 items-center">
                {token.logoURI !== "" && (
                  <img
                    className=""
                    src={token.logoURI}
                    alt={`${token.name} Logo`}
                    width="50"
                    height="50"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
