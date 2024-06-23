import Row from "./Row";

function ListHeaderRow() {
  return (
    <Row
      rowNumber={"#"}
      name={"Name"}
      address={"Address"}
      logo={"Logo"}
      favorite={"Favorites"}
    ></Row>
  );
}

export default ListHeaderRow;
