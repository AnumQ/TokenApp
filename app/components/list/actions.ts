import { Token } from "@/app/types/Token";
import { getFavorites } from "../localstorage/actions";

function sortOnFavorites(tokens: Token[]): Token[] {
  const favoriteTokens = getFavorites();
  const favoriteSet = new Set(favoriteTokens);

  // Filter favorite tokens
  const favoriteList = tokens.filter((token) =>
    favoriteSet.has(`${token.chainId}:${token.address}`)
  );
  // Filter out the tokens that are not favorites
  const rest = tokens.filter(
    (token) => !favoriteSet.has(`${token.chainId}:${token.address}`)
  );

  return [...favoriteList, ...rest];
}

export { sortOnFavorites };
