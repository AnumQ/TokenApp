import { Token } from "./Token";

export interface GetTokenResponse {
  tokens: {
    [key: string]: Token[];
  };
}
