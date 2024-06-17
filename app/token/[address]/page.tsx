import { Token } from "../../types/Token";

interface TokenDetailProps {
  params: any;
}

const TokenDetail: React.FC<TokenDetailProps> = ({ params }) => {
  console.log(params);
  return (
    <div>
      {/* <h1>{token.name}</h1>
      <p>Address: {token.address}</p>
      <img
        src={token.logoURI}
        alt={`${token.name} Logo`}
        width="100"
        height="100"
      /> */}
    </div>
  );
};

export default TokenDetail;
