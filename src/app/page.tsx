"use client";

import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>();

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setSearchQuery(e?.target.value);
  }
  return (
    <div className="font-sans grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-6 xl:gap-8 items-center justify-items-center min-h-screen py-12 px-6 xl:p-30">
      <main className="grid grid-cols-subgrid xl:gap-y-12 col-span-full items-center justify-items-center">
        <h1 className="row-start-1 col-span-full xl:text-7xl self-center">Jarvis</h1>
        {/* <Image
          className="col-span-full"
          src={"/jarvis.png"}
          alt="jarvis logo"
          width={110}
          height={110}
          priority
        /> */}
        <textarea
          name="search"
          placeholder="search ..."
          value={searchQuery}
          onChange={handleChange}
          className="row-start-3 xl:col-span-6 xl:col-start-4 w-full p-3 border-2 focus:outline-0 border-gray-500 rounded-xl h-24"
        />
        <button
          type="submit"
          className="row-start-4 outline-2 outline-black rounded-2xl py-2 row-span-1 xl:col-start-9 w-full hover:cursor-pointer self-center justify-self-center"
        >
          Search
        </button>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
