import { Exchange } from "./types";

export const getExchangesData = async (
  pageIndex: number
): Promise<Exchange[]> => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/exchanges?per_page=15&page=${pageIndex}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
