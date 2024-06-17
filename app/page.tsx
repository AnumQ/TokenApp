import Image from "next/image";
import { Suspense } from "react";
import TokenList from "./components/TokenList";
import TokenListSkeleton from "./components/TokenListSkeleton";
import SearchField from "./components/SearchField";

export const experimental_ppr = true;

interface HomeProps {
  searchParams: { query: string };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <div className="font-sans grid">
      <header></header>
      <main className="p-10">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl">Overview</h1>
        </div>
        <SearchField />
        <Suspense fallback={<TokenListSkeleton />}>
          <TokenList search={searchParams.query} />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}
