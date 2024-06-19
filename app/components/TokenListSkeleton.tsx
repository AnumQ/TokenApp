export default function TokenListSkeleton() {
  return (
    <div className="">
      <div style={{ height: "80vh" }} className="w-full">
        <div className="w-full border-b-2 border-gray-800 h-20 flex bg-slate-900 mt-10">
          <div className="w-3/12 text-center flex items-center justify-center">
            Name
          </div>
          <div className="w-6/12 text-center flex items-center justify-center">
            Address
          </div>
          <div className="w-3/12 flex items-center justify-center">Logo</div>
        </div>
        <ul>
          {Array.from(Array(30).keys()).map((token) => (
            <li
              key={token}
              className="flex flex-row h-20 border-b-2 border-gray-800"
            >
              <div className="w-3/12 animate-pulse bg-white-200 m-auto">
                <div className="h-10 bg-slate-700 rounded w-20 mx-auto"></div>
              </div>
              <div className="w-6/12 animate-pulse bg-white-200 m-auto">
                <div className="h-10 bg-slate-700 rounded w-90 mx-auto"></div>
              </div>
              <div className="w-3/12 animate-pulse bg-white-200 m-auto">
                <div className="h-10 bg-slate-700 rounded w-10 mx-auto"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
