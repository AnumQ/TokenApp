"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "next/navigation";
import LoadingDots from "./LoadingDots";

interface SearchFieldProps {
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchField: React.FC<SearchFieldProps> = ({
  isSearching,
  setIsSearching,
}: SearchFieldProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const [query] = useDebounce(searchTerm, 500);
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    setIsSearching(true);
    if (!query) {
      setIsSearching(false);
      params.delete("query");
    } else {
      if (searchTerm) {
        params.set("query", searchTerm);
      }
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  return (
    <div className="flex flex-row h-10">
      <input
        className="text-gray-800 p-3 h-full"
        type="text"
        placeholder="Search tokens..."
        value={searchTerm}
        onChange={(e) => {
          if (!!e.target.value) setIsSearching(true);
          setSearchTerm(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      {isSearching && (
        <div className="flex flex-row items-center pl-5 h-full space-x-2">
          <p className="text-zinc-400">
            Searching for <span className="text-slate-100">{searchTerm}</span>
          </p>
          <LoadingDots />
        </div>
      )}
    </div>
  );
};

export default SearchField;
