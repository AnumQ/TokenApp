import ListContainer from "./ListContainer";
import ListHeaderRow from "./ListHeaderRow";
import Row from "./Row";

export default function TokenListSkeleton() {
  const commonClassnames = "h-8 bg-slate-800 rounded animate-pulse";
  return (
    <>
      <div className="mt-4 h-10"></div>
      <ListContainer>
        <ListHeaderRow />
        <ul className="">
          {Array.from(Array(12).keys()).map((token) => (
            <Row
              key={`key-${token}`}
              index={token.toString()}
              style={{}}
              rowNumber={<div className={`${commonClassnames} w-10`}></div>}
              name={<div className={`${commonClassnames} w-6/12`}></div>}
              address={<div className={`${commonClassnames} w-7/12`}></div>}
              logo={<div className={`${commonClassnames} w-10`}></div>}
            />
          ))}
        </ul>
      </ListContainer>
    </>
  );
}
