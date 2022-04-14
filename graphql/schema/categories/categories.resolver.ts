import { Resolver, Query } from "type-graphql";
import { fetchMarketCategories } from "../../../lib/fetchData";
import { Category } from "./categories";

@Resolver(Category)
export class CategoriesResolver {
  @Query(() => [Category])
  async categories(): Promise<Array<Category>> {
    return await fetchMarketCategories();
  }
}
