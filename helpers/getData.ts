import type { MarketcapDataResponse } from "../types/stats";

export async function getMarketCapData(): Promise<MarketcapDataResponse> {
  const response = await fetch("/api/marketcap");
  return await response.json();
}
