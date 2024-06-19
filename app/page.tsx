"use client";
import TokenList from "./components/TokenList";
import { Suspense, useState } from "react";
import TokenListSkeleton from "./components/TokenListSkeleton";
import SearchField from "./components/SearchField";
import TokenListClientSide from "./components/TokenListClientSide";
// import TokenListClient from "./components/TokenListClientSide";

export const experimental_ppr = true;

interface HomeProps {
  searchParams: { query: string };
}

export default function Home({ searchParams }: HomeProps) {
  const [isSearching, setIsSearching] = useState(false);
  return (
    <div className="font-sans grid">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl">Overview</h1>
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
