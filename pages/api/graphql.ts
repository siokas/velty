import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";
import { VeltyIndexResolver } from "../../graphql/schema/velty/veltyIndex.resolver";
import { CategoriesResolver } from "../../graphql/schema/categories/categories.resolver";
import { GlobalDataResolver } from "../../graphql/schema/globalData/globalData.resolver";
import { AnnualDataResolver } from "../../graphql/schema/annualData/annualData.resolver";

const schema = await buildSchema({
  resolvers: [
    VeltyIndexResolver,
    CategoriesResolver,
    GlobalDataResolver,
    AnnualDataResolver,
  ],
});

const server = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
