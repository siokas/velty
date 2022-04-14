import { NextApiRequest, NextApiResponse } from "next";
import { fetchGlobalData } from "../../lib/fetchData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const globalData = await fetchGlobalData();

  res.status(200).json(globalData);
}
