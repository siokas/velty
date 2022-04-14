import { Resolver, Query } from "type-graphql";
import { fetchGlobalData } from "../../../lib/fetchData";
import { GlobalData } from "./globalData";

@Resolver(GlobalData)
export class GlobalDataResolver {
  @Query(() => GlobalData)
  async globalData(): Promise<GlobalData> {
    return await fetchGlobalData();
  }
}
