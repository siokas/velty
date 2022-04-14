import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class GlobalDataAttributes {
  @Field(() => String)
  key?: string;

  @Field(() => Number)
  value?: number;
}

@ObjectType()
export class GlobalData {
  @Field(() => Number)
  active_cryptocurrencies?: number;

  @Field(() => Number)
  upcoming_icos?: number;

  @Field(() => Number)
  ongoing_icos?: number;

  @Field(() => Number)
  ended_icos?: number;

  @Field(() => Number)
  markets?: number;

  @Field((type) => [GlobalDataAttributes])
  total_market_cap?: GlobalDataAttributes[];

  @Field(() => [GlobalDataAttributes])
  total_volume?: [GlobalDataAttributes];

  @Field(() => [GlobalDataAttributes])
  market_cap_percentage?: GlobalDataAttributes[];

  @Field(() => Number)
  market_cap_change_percentage_24h_usd?: number;

  @Field(() => Number)
  updated_at?: number;
}
