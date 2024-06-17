import Image from "next/image";
import { Suspense } from "react";
import TokenList from "./components/TokenList";

export default function Home() {
  return (
    <div className="font-sans grid">
      <header></header>
      <main>
        <div className="flex justify-center items-center py-10">
          <h1 className="text-5xl">Overview</h1>
        </div>
        <TokenList search={""} />
      </main>
      <footer></footer>
    </div>
  );
}
