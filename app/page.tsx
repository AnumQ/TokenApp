import SearchField from "./components/search/SearchField";
import TokenListClientSide from "./components/list/TokenListClientSide";
import Heading from "./components/overview/Heading";
import type { Metadata } from "next";

export const experimental_ppr = true;

interface HomeProps {
  searchParams: { query: string };
}

export const metadata: Metadata = {
  title: "Token App | List of tokens",
  description: "ETH | WETH | USDT | CELR",
};

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <Heading title={"Overview"} />
      <SearchField />
      {/* <Suspense fallback={<TokenListSkeleton />}>
        <TokenList search={searchParams.query} />
      </Suspense> */}
      <TokenListClientSide search={searchParams.query} />
    </>
  );
}
