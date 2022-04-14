import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "./generated/graphql";

const gqlClient = new GraphQLClient(`${process.env.ABSOLUTE_URL}/api/graphql`);
export const { getVeltyIndex, getCategories, getGlobalData, getAnnualData } =
  getSdk(gqlClient);
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
