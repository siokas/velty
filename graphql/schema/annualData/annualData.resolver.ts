import { Resolver, Query } from "type-graphql";
import { fetchAnnualData } from "../../../lib/fetchData";
import { AnnualData } from "./annualData";

@Resolver(AnnualData)
export class AnnualDataResolver {
  @Query(() => [AnnualData])
  async annualData(): Promise<Array<AnnualData>> {
    return await fetchAnnualData();
  }
}
