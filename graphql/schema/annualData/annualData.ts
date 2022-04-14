import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class AnnualData {
  @Field(() => ID)
  symbol?: string;

  @Field(() => Number)
  annualReturns?: number;

  @Field(() => Number)
  annualRisks?: number;

  @Field(() => Number)
  ratio?: number;
}
