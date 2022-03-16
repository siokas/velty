import type { MarketcapDataResponse as Data } from "../types/stats";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const API_CRYPTO_INDEX_URL = process.env.NEXT_PUBLIC_API_CRYPTO_INDEX_URL;

export async function fetchMarketCapData() {
  const API_URL: string = `${API_BASE_URL}/${API_VERSION}/${API_CRYPTO_INDEX_URL}`;
  const response: Response = await fetch(API_URL);
  let dataToReturn: Data = { index: 0, marketcap: 0, btcDominance: 0 };

  if (response.ok) {
    const data: Data = await response.json();
    dataToReturn = data;
  }

  return dataToReturn;
}
