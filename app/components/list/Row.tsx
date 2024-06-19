interface RowType {
  index?: string;
  style?: any;
  rowNumber: number | React.ReactNode;
  name: string | React.ReactNode;
  address: string | React.ReactNode;
  logo: string | React.ReactNode;
}
export default function Row({
  index,
  style,
  rowNumber,
  name,
  address,
  logo,
}: RowType) {
  return (
    <div
      key={index}
      style={style}
      className={`w-full border-b-2 border-gray-800 h-20 flex`}
    >
      <div className="w-1/12 text-left flex items-center justify-center">
        {rowNumber}
      </div>
      <div className="w-2/12 text-left flex items-center justify-left">
        {name}
      </div>
      <div className="w-6/12 text-left flex items-center justify-left">
        {address}
      </div>
      <div className="w-3/12 flex items-center justify-center">{logo}</div>{" "}
    </div>
  );
}
