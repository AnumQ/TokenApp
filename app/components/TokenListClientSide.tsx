"use client";
import useSWR from "swr";
import { Token } from "../types/Token";
import { GetTokenResponse } from "../types/GetTokenResponse";
import Link from "next/link";
import Image from "next/image";
import { List, AutoSizer, ListRowProps } from "react-virtualized";
import { BASE_URL, PATH_TOKENS } from "../contants";
import TokenListSkeleton from "./TokenListSkeleton";

const fetcher = async (url: string): Promise<Token[]> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const tokenResponse = (await response.json()) as GetTokenResponse;

  const allTokens = Object.keys(tokenResponse.tokens).reduce(
    (prev: Token[], curr: string) => {
      return [...prev, ...tokenResponse.tokens[curr]];
    },
    []
  );
  return allTokens;
};

interface TokenListClientSide {
  search: string;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const TokenListClientSide: React.FC<TokenListClientSide> = ({
  search,
  setIsSearching,
}: TokenListClientSide) => {
  const {
    data: tokens,
    error,
    isLoading,
  } = useSWR<Token[]>(`${BASE_URL}/${PATH_TOKENS}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <TokenListSkeleton />;
  if (!tokens) return <div>No tokens found</div>;

  const filteredTokens =
    search && search !== ""
      ? tokens.filter((token) =>
          token.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : tokens;

  setIsSearching(false);

  const rowRenderer: React.FC<ListRowProps> = ({ key, index, style }) => {
    const token = filteredTokens[index];

    return (
      <div
        key={key}
        style={style}
        className="w-full border-b-2 border-gray-800 h-20 flex"
      >
        <div className="w-3/12 text-center flex items-center justify-center">
          <Link href={`token/${token.address}`}>{token.name}</Link>
        </div>
        <div className="w-6/12 text-center flex items-center justify-center">
          <Link href={`token/${token.address}`}>{token.address}</Link>
        </div>
        <div className="w-3/12 flex items-center justify-center">
          {token.logoURI && (
            <Image
              src={token.logoURI}
              alt={`${token.name} Logo`}
              width={50}
              height={50}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {!!search && (
        <div className="mt-4 align-top">
          <p className="italic">
            Found <span>{filteredTokens.length}</span> results for term ´
            <span className="font-bold">{search}</span>´
          </p>
        </div>
      )}
      <div style={{ height: "80vh" }} className="w-full">
        <div className="w-full border-b-2 border-gray-800 h-20 flex bg-slate-900 mt-10">
          <div className="w-3/12 text-center flex items-center justify-center">
            Name
          </div>
          <div className="w-6/12 text-center flex items-center justify-center">
            Address
          </div>
          <div className="w-3/12 flex items-center justify-center">Logo</div>
        </div>
        {tokens && (
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height}
                width={width}
                rowCount={filteredTokens.length}
                rowHeight={80} // Adjust row height as needed
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        )}
      </div>
    </>
  );
};

export default TokenListClientSide;
