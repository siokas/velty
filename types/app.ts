import { ReactNode } from "react";
import { MarketcapDataResponse, APIGlobalDataResponse } from "./api";

export type ModalProps = {
  buttonName: string;
  title: string;
  modalActionName?: string;
  children: ReactNode;
};

export type MCDataProps = {
  data: MarketcapDataResponse;
  global: APIGlobalDataResponse;
  annualData: any;
};

export type AnnualData = {
  annualReturns: {};
  annualRisks: {};
  ratio: {};
  symbol: {};
};

export type AnnualDataObject = {
  annualReturns: number;
  annualRisks: number;
  ratio: number;
  symbol: string;
};
