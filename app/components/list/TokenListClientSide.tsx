"use client";
import useSWR from "swr";
import { Token } from "../../types/Token";
import { GetTokenResponse } from "../../types/GetTokenResponse";
import Link from "next/link";
import Image from "next/image";
import { List, AutoSizer, ListRowProps } from "react-virtualized";
import { BASE_URL, PATH_TOKENS } from "../../contants";
import TokenListSkeleton from "./TokenListSkeleton";
import ListHeaderRow from "./ListHeaderRow";
import Row from "./Row";
import ListContainer from "./ListContainer";
import SearchResults from "./SearchResults";
import FavoriteButton from "../favorite/FavoriteButton";
import { useState } from "react";
import { sortOnFavorites } from "./actions";

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
}

const TokenListClientSide: React.FC<TokenListClientSide> = ({
  search,
}: TokenListClientSide) => {
  const {
    data: tokens,
    error,
    isLoading,
  } = useSWR<Token[]>(`${BASE_URL}/${PATH_TOKENS}`, fetcher);

  const [_, setUpdate] = useState(0);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <TokenListSkeleton />;
  if (!tokens) return <div>No tokens found</div>;

  const filterSearch = search
    ? tokens.filter((token) =>
        token.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    : tokens;

  const sortedTokens = sortOnFavorites(filterSearch);

  const rowRenderer: React.FC<ListRowProps> = ({ key, index, style }) => {
    const token = sortedTokens[index];

    return (
      <Row
        key={`key-${key}`}
        index={key}
        style={style}
        rowNumber={index + 1}
        name={
          <Link href={`token/${token.chainId}/${token.address}`}>
            {token.name}
          </Link>
        }
        address={
          <Link href={`token/${token.chainId}/${token.address}`}>
            {token.address}
          </Link>
        }
        logo={
          !!token.logoURI && (
            <Image
              src={token.logoURI}
              alt={`${token.name} Logo`}
              width={50}
              height={50}
            />
          )
        }
        favorite={
          <FavoriteButton
            chainId={token.chainId.toString()}
            address={token.address}
            onUpdate={() => {
              setUpdate((prev) => {
                return prev + 1;
              });
            }}
          />
        }
      />
    );
  };

  return (
    <>
      <SearchResults filteredTokens={sortedTokens.length} search={search} />
      <ListContainer>
        <ListHeaderRow />
        {tokens && (
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height}
                width={width}
                rowCount={sortedTokens.length}
                rowHeight={80}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        )}
      </ListContainer>
    </>
  );
};

export default TokenListClientSide;
