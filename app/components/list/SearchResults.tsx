type SearchResultsType = {
  filteredTokens: number;
  search: string;
};

function SearchResults({ filteredTokens, search }: SearchResultsType) {
  return (
    <div className="mt-4 h-10">
      {filteredTokens > 0 && !search && (
        <p className="text-zinc-400">
          Displaying <i className="text-slate-100">{filteredTokens} </i> tokens
        </p>
      )}
      {!!search && (
        <p className="text-zinc-400">
          Found <i className="text-slate-100">{filteredTokens} </i> tokens with
          name{" "}
          <span className="font-bold text-slate-100 font-serif italic">
            {search}
          </span>
        </p>
      )}
    </div>
  );
}

export default SearchResults;
