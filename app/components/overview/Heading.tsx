function Heading({ title }: { title: string }) {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl">{title}</h1>
    </div>
  );
}

export default Heading;
