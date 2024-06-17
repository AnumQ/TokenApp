"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "next/navigation";

const SearchField: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const [query] = useDebounce(searchTerm, 500);
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (!query) {
      params.delete("query");
    } else {
      if (searchTerm) {
        params.set("query", searchTerm);
      }
    }
    replace(`${pathname}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <input
        className="text-gray-800 p-3"
        type="text"
        placeholder="Search tokens..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchField;
