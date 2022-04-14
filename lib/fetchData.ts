import type {
  APICategoryResponse,
  VeltyIndexDataResponse,
  APIGlobalDataResponse,
  AnnualDataResponse,
} from "../types/api";
import { AnnualDataObject } from "../types/app";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const API_CRYPTO_INDEX_URL = process.env.NEXT_PUBLIC_API_CRYPTO_INDEX_URL;
const API_ANNUAL_DATA_URL = process.env.NEXT_PUBLIC_ANNUAL_DATA_API_URL;
const API_COINGEKO_BASE_URL = "https://api.coingecko.com/api/v3";

export async function fetchVeltyIndexData(): Promise<VeltyIndexDataResponse> {
  const API_URL = `${API_BASE_URL}/${API_VERSION}/${API_CRYPTO_INDEX_URL}`;
  const response: Response = await fetch(API_URL);
  let dataToReturn: VeltyIndexDataResponse = {
    index: 0,
    marketcap: 0,
    btcDominance: 0,
  };

  if (response.ok) {
    const data: VeltyIndexDataResponse = await response.json();
    dataToReturn = data;
  }

  return dataToReturn;
}

export async function fetchAnnualData(): Promise<Array<AnnualDataObject>> {
  const API_URL = `${API_BASE_URL}/${API_VERSION}/${API_ANNUAL_DATA_URL}`;
  const response: Response = await fetch(API_URL);
  const annualData: AnnualDataResponse = {
    annualReturns: "",
    annualRisks: "",
    ratio: "",
    symbol: "",
  };

  if (response.ok) {
    const data: AnnualDataResponse = await response.json();

    annualData.annualReturns = JSON.parse(data.annualReturns);
    annualData.annualRisks = JSON.parse(data.annualRisks);
    annualData.ratio = JSON.parse(data.ratio);
    annualData.symbol = JSON.parse(data.symbol);
  }

  const dataToReturn: Array<AnnualDataObject> = [];

  Object.keys(annualData.annualReturns).map((el: any) => {
    // Do not take first element which is Timestamp (TODO: in backend)
    if (el > 0) {
      dataToReturn.push({
        // @ts-ignore: Object as any
        annualReturns: annualData.annualReturns[el],
        // @ts-ignore: Object as any
        annualRisks: annualData.annualRisks[el],
        // @ts-ignore: Object as any
        ratio: annualData.ratio[el],
        // @ts-ignore: Object as any
        symbol: annualData.symbol[el],
      });
    }
  });

  return dataToReturn;
}

export async function fetchMarketCategories(): Promise<
  Array<APICategoryResponse>
> {
  const CATEGORIES_URL = "coins/categories";
  const API_URL = `${API_COINGEKO_BASE_URL}/${CATEGORIES_URL}`;
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

export async function fetchGlobalData(): Promise<any> {
  const GLOBAL_URL = "global";
  const API_URL = `${API_COINGEKO_BASE_URL}/${GLOBAL_URL}`;
  const response: Response = await fetch(API_URL);
  let globalData: APIGlobalDataResponse = {
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
    globalData = data;
  }

  const data = {
    active_cryptocurrencies: globalData.data.active_cryptocurrencies,
    upcoming_icos: globalData.data.upcoming_icos,
    ongoing_icos: globalData.data.ongoing_icos,
    ended_icos: globalData.data.ended_icos,
    markets: globalData.data.markets,
    total_market_cap: [],
    total_volume: [],
    market_cap_percentage: [],
    market_cap_change_percentage_24h_usd:
      globalData.data.market_cap_change_percentage_24h_usd,
    updated_at: globalData.data.updated_at,
  };

  Object.keys(globalData.data.total_market_cap).map((el: string) => {
    data.total_market_cap.push({
      // @ts-ignore: never
      key: el,
      // @ts-ignore: never
      value: globalData.data.total_market_cap[el],
    });
  });

  Object.keys(globalData.data.total_volume).map((el: string) => {
    data.total_volume.push({
      // @ts-ignore: never
      key: el,
      // @ts-ignore: never
      value: globalData.data.total_volume[el],
    });
  });

  Object.keys(globalData.data.market_cap_percentage).map((el: string) => {
    data.market_cap_percentage.push({
      // @ts-ignore: never
      key: el,
      // @ts-ignore: never
      value: globalData.data.market_cap_percentage[el],
    });
  });

  return data;
}
