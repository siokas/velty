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
