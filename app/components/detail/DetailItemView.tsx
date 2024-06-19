const DetailItemView = ({ label, value }: { label: string; value: string }) => (
  <div className="pb-10">
    <dt className="font-bold mb-2">{label}</dt>
    <dd>{value}</dd>
  </div>
);

export default DetailItemView;
