import SearchField from "./components/search/SearchField";
import TokenListClientSide from "./components/list/TokenListClientSide";
import Heading from "./components/overview/Heading";

export const experimental_ppr = true;

interface HomeProps {
  searchParams: { query: string };
}

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
