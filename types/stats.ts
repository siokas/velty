export type mainStatsProps = {
  title: string;
  cryptoIndex: number;
  cryptoMarketCap: number;
  btcDominance: number;
  marketCapChange: number;
  activeCrypto: number;
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

export type APIGlobalDataResponse = {
  data: {
    active_cryptocurrencies: 0;
    upcoming_icos: 0;
    ongoing_icos: 0;
    ended_icos: 0;
    markets: 0;
    total_market_cap: any;
    total_volume: any;
    market_cap_percentage: any;
    market_cap_change_percentage_24h_usd: number;
    updated_at: number;
  };
};

export type MCDataProps = {
  data: MarketcapDataResponse;
  global: APIGlobalDataResponse;
};
