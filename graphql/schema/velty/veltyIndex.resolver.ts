import { Resolver, Query } from "type-graphql";
import { fetchVeltyIndexData } from "../../../lib/fetchData";
import { VeltyIndex } from "./veltyIndex";

@Resolver(VeltyIndex)
export class VeltyIndexResolver {
  @Query(() => VeltyIndex)
  async veltyIndex(): Promise<VeltyIndex> {
    return await fetchVeltyIndexData();
  }
}
