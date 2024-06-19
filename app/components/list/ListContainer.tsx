type ListContainerType = {
  children: React.ReactNode;
};

function ListContainer({ children }: ListContainerType) {
  return (
    <div style={{ height: "80vh" }} className="w-full">
      {children}
    </div>
  );
}

export default ListContainer;
