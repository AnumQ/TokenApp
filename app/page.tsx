import Image from "next/image";
import { Suspense } from "react";
import TokenList from "./components/TokenList";
import Loading from "./components/loading";

export const experimental_ppr = true;

export default function Home() {
  return (
    <div className="font-sans grid">
      <header></header>
      <main>
        <div className="flex justify-center items-center py-10">
          <h1 className="text-5xl">Overview</h1>
        </div>
        <Suspense fallback={<Loading />}>
          <TokenList search={""} />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}
