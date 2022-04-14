import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Category {
  @Field(() => ID)
  id?: string;

  @Field(() => String)
  name?: string;

  @Field(() => Number)
  market_cap?: number;

  @Field(() => Number)
  market_cap_change_24h?: number;

  @Field(() => String)
  content?: string;

  @Field(() => [String])
  top_3_coins?: Array<string>;

  @Field(() => Number)
  volume_24h?: number;

  @Field(() => String)
  updated_at?: string;
}
