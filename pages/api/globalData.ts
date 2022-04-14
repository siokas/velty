import { NextApiRequest, NextApiResponse } from "next";
import { fetchGlobalData } from "../../lib/fetchData";
import { APIGlobalDataResponse } from "../../types/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const globalData = await fetchGlobalData();

  res.status(200).json(globalData);
}
