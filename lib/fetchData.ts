import type {
  APICategoryResponse,
  MarketcapDataResponse,
  APIGlobalDataResponse,
  AnnualDataResponse,
} from "../types/api";
import { AnnualData } from "../types/app";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const API_CRYPTO_INDEX_URL = process.env.NEXT_PUBLIC_API_CRYPTO_INDEX_URL;
const API_ANNUAL_DATA_URL = process.env.NEXT_PUBLIC_ANNUAL_DATA_API_URL;
const API_COINGEKO_BASE_URL = "https://api.coingecko.com/api/v3";

export async function fetchMarketCapData(): Promise<MarketcapDataResponse> {
  const API_URL: string = `${API_BASE_URL}/${API_VERSION}/${API_CRYPTO_INDEX_URL}`;
  const response: Response = await fetch(API_URL);
  let dataToReturn: MarketcapDataResponse = {
    index: 0,
    marketcap: 0,
    btcDominance: 0,
  };

  if (response.ok) {
    const data: MarketcapDataResponse = await response.json();
    dataToReturn = data;
  }

  return dataToReturn;
}

export async function fetchAnnualData(): Promise<AnnualData> {
  const API_URL: string = `${API_BASE_URL}/${API_VERSION}/${API_ANNUAL_DATA_URL}`;
  const response: Response = await fetch(API_URL);
  let dataToReturn: AnnualDataResponse = {
    annualReturns: "",
    annualRisks: "",
    ratio: "",
    symbol: "",
  };

  if (response.ok) {
    const data: AnnualDataResponse = await response.json();

    dataToReturn.annualReturns = JSON.parse(data.annualReturns);
    dataToReturn.annualRisks = JSON.parse(data.annualRisks);
    dataToReturn.ratio = JSON.parse(data.ratio);
    dataToReturn.symbol = JSON.parse(data.symbol);
  }

  return dataToReturn;
}

export async function fetchMarketCategories(): Promise<
  Array<APICategoryResponse>
> {
  const CATEGORIES_URL: String = "coins/categories";
  const API_URL: string = `${API_COINGEKO_BASE_URL}/${CATEGORIES_URL}`;
  const response: Response = await fetch(API_URL);
  let dataToReturn: Array<APICategoryResponse> = [
    {
      id: "",
      name: "",
      market_cap: 0,
      market_cap_change_24h: 0,
      content: "",
      top_3_coins: [""],
      volume_24h: 0,
      updated_at: "",
    },
  ];

  if (response.ok) {
    const data: Array<APICategoryResponse> = await response.json();
    dataToReturn = data;
  }

  return dataToReturn;
}

export async function fetchGlobalData(): Promise<APIGlobalDataResponse> {
  const GLOBAL_URL: String = "global";
  const API_URL: string = `${API_COINGEKO_BASE_URL}/${GLOBAL_URL}`;
  const response: Response = await fetch(API_URL);
  let dataToReturn: APIGlobalDataResponse = {
    data: {
      active_cryptocurrencies: 0,
      upcoming_icos: 0,
      ongoing_icos: 0,
      ended_icos: 0,
      markets: 0,
      total_market_cap: {},
      total_volume: {},
      market_cap_percentage: {},
      market_cap_change_percentage_24h_usd: 0,
      updated_at: 0,
    },
  };

  if (response.ok) {
    const data: APIGlobalDataResponse = await response.json();
    dataToReturn = data;
  }

  return dataToReturn;
}
