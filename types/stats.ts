export type mainStatsProps = {
  title: string;
  cryptoIndex: number;
  cryptoMarketCap: number;
  btcDominance: number;
  cvix: number;
};

export type MarketcapDataResponse = {
  index: number;
  marketcap: number;
  btcDominance: number;
};

export type APICategoryResponse = {
  id: string;
  name: string;
  market_cap: number;
  market_cap_change_24h: number;
  content: string;
  top_3_coins: Array<String>;
  volume_24h: number;
  updated_at: string;
};

export type MCDataProps = {
  data: MarketcapDataResponse;
};
