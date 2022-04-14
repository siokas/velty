import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class VeltyIndex {
  @Field(() => Number)
  btcDominance!: number;

  @Field(() => Number)
  index!: number;

  @Field(() => Number)
  marketcap!: number;
}
