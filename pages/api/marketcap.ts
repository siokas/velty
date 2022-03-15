import type { NextApiRequest, NextApiResponse } from "next";
import type { MarketcapDataResponse as Data } from "../../types/stats";

const API_BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;
const API_CRYPTO_INDEX_URL = process.env.API_CRYPTO_INDEX_URL;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const API_URL: string = `${API_BASE_URL}/${API_VERSION}/${API_CRYPTO_INDEX_URL}`;
  const response: Response = await fetch(API_URL);
  let dataToReturn: Data = { index: 0, marketcap: 0, btcDominance: 0 };

  if (response.ok) {
    const data: Data = await response.json();
    dataToReturn = data;
  }

  res.status(200).json(dataToReturn);
}
