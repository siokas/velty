import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AnnualData = {
  __typename?: 'AnnualData';
  annualReturns: Scalars['Float'];
  annualRisks: Scalars['Float'];
  ratio: Scalars['Float'];
  symbol: Scalars['ID'];
};

export type Category = {
  __typename?: 'Category';
  content: Scalars['String'];
  id: Scalars['ID'];
  market_cap: Scalars['Float'];
  market_cap_change_24h: Scalars['Float'];
  name: Scalars['String'];
  top_3_coins: Array<Scalars['String']>;
  updated_at: Scalars['String'];
  volume_24h: Scalars['Float'];
};

export type GlobalData = {
  __typename?: 'GlobalData';
  active_cryptocurrencies: Scalars['Float'];
  ended_icos: Scalars['Float'];
  market_cap_change_percentage_24h_usd: Scalars['Float'];
  market_cap_percentage: Array<GlobalDataAttributes>;
  markets: Scalars['Float'];
  ongoing_icos: Scalars['Float'];
  total_market_cap: Array<GlobalDataAttributes>;
  total_volume: Array<GlobalDataAttributes>;
  upcoming_icos: Scalars['Float'];
  updated_at: Scalars['Float'];
};

export type GlobalDataAttributes = {
  __typename?: 'GlobalDataAttributes';
  key: Scalars['String'];
  value: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  annualData: Array<AnnualData>;
  categories: Array<Category>;
  globalData: GlobalData;
  veltyIndex: VeltyIndex;
};

export type VeltyIndex = {
  __typename?: 'VeltyIndex';
  btcDominance: Scalars['Float'];
  index: Scalars['Float'];
  marketcap: Scalars['Float'];
};

export type GetAnnualDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnnualDataQuery = { __typename?: 'Query', annualData: Array<{ __typename?: 'AnnualData', annualReturns: number, annualRisks: number, ratio: number, symbol: string }> };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, market_cap: number, market_cap_change_24h: number, volume_24h: number }> };

export type GetGlobalDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGlobalDataQuery = { __typename?: 'Query', globalData: { __typename?: 'GlobalData', active_cryptocurrencies: number, market_cap_change_percentage_24h_usd: number } };

export type GetVeltyIndexQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVeltyIndexQuery = { __typename?: 'Query', veltyIndex: { __typename?: 'VeltyIndex', btcDominance: number, index: number, marketcap: number } };


export const GetAnnualDataDocument = gql`
    query getAnnualData {
  annualData {
    annualReturns
    annualRisks
    ratio
    symbol
  }
}
    `;
export const GetCategoriesDocument = gql`
    query getCategories {
  categories {
    id
    name
    market_cap
    market_cap_change_24h
    volume_24h
  }
}
    `;
export const GetGlobalDataDocument = gql`
    query getGlobalData {
  globalData {
    active_cryptocurrencies
    market_cap_change_percentage_24h_usd
  }
}
    `;
export const GetVeltyIndexDocument = gql`
    query getVeltyIndex {
  veltyIndex {
    btcDominance
    index
    marketcap
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAnnualData(variables?: GetAnnualDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAnnualDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAnnualDataQuery>(GetAnnualDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAnnualData', 'query');
    },
    getCategories(variables?: GetCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoriesQuery>(GetCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategories', 'query');
    },
    getGlobalData(variables?: GetGlobalDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGlobalDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGlobalDataQuery>(GetGlobalDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGlobalData', 'query');
    },
    getVeltyIndex(variables?: GetVeltyIndexQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetVeltyIndexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVeltyIndexQuery>(GetVeltyIndexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getVeltyIndex', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;