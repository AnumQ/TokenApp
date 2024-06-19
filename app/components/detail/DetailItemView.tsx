const DetailItemView = ({ label, value }: { label: string; value: string }) => (
  <dl className="pb-10">
    <dt className="font-bold mb-2">{label}</dt>
    <dd>{value}</dd>
  </dl>
);

export default DetailItemView;
