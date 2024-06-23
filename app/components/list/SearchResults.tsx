type SearchResultsType = {
  filteredTokens: number;
  search: string;
};

function SearchResults({ filteredTokens, search }: SearchResultsType) {
  return (
    <div className="mt-4 h-10">
      {filteredTokens > 0 && !search && (
        <p className="text-zinc-400">
          Displaying{" "}
          <i className="dark:text-slate-100 font-semibold text-gray-900">
            {filteredTokens}{" "}
          </i>{" "}
          tokens
        </p>
      )}
      {!!search && (
        <p className="text-zinc-400">
          Found{" "}
          <i className="dark:text-slate-100 font-semibold text-slate-900">
            {filteredTokens}{" "}
          </i>{" "}
          tokens with name{" "}
          <span className="font-bold dark:text-slate-100 text-slate-900 font-serif italic">
            {search}
          </span>
        </p>
      )}
    </div>
  );
}

export default SearchResults;
