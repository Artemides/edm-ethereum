import { parseEther } from "viem";

export const multiplyTo1e18 = (tokens: string | bigint) => {
  try {
    return parseEther(tokens.toString());
  } catch (error) {
    return 0n;
  }
};
export const getTokenPrice = (token: string | bigint, rate?: bigint) => {
  const tokens = multiplyTo1e18(token);
  return rate ? tokens / rate : tokens;
};
