export default function TokenListSkeleton() {
  return (
    <div className="">
      <table className="w-full">
        <thead>
          <tr className="w-full border-b-2 h-20 border-slate-700">
            <th className="w-4/12">Name</th>
            <th className="w-6/12">Address</th>
            <th className="w-2/12">Logo</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(30).keys()).map((token) => (
            <tr key={token} className="border-b-2 border-gray-800 h-20">
              <td className="">
                <div className="animate-pulse bg-white-200 w-80 mx-auto">
                  <div className="h-10 bg-slate-700 rounded"></div>
                </div>
              </td>
              <td className="">
                <div className="animate-pulse bg-white-200 w-9/12 mx-auto">
                  <div className="h-10 bg-slate-700 rounded"></div>
                </div>
              </td>
              <td className="justify-center h-20 items-center">
                <div className="animate-pulse bg-white-200 mx-auto w-2/12">
                  <div className="h-12 bg-slate-700 rounded"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
