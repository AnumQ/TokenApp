"use client";
import { useState } from "react";
import SearchField from "./components/search/SearchField";
import TokenListClientSide from "./components/list/TokenListClientSide";

export const experimental_ppr = true;

interface HomeProps {
  searchParams: { query: string };
}

export default function Home({ searchParams }: HomeProps) {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <div className="font-sans">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl">Overview</h1>
      </div>
      <SearchField isSearching={isSearching} setIsSearching={setIsSearching} />
      {/* <Suspense fallback={<TokenListSkeleton />}>
        <TokenList search={searchParams.query} />
      </Suspense> */}
      <TokenListClientSide
        search={searchParams.query}
        setIsSearching={setIsSearching}
      />
    </div>
  );
}
