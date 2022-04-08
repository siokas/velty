import { NextPageContext } from "next";
import Head from "next/head";
import Topbar from "../components/Topbar";
import { fetchAnnualData } from "../lib/fetchData";
import { AnnualData as AnnualDataProps, AnnualDataObject } from "../types/app";
import AnnualDataTable from "../components/AnnualDataTable";

function AnnualData({ annualData }: { annualData: Array<AnnualDataObject> }) {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>velty - annual data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />

      <main className="mt-6 flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-2xl font-bold md:text-6xl">annual data</h1>
      </main>

      <div className="mt-6 flex w-full text-center">
        <AnnualDataTable annualData={annualData} />
      </div>
    </div>
  );
}

AnnualData.getInitialProps = async (ctx: NextPageContext) => {
  const data: AnnualDataProps = await fetchAnnualData();
  let annualData: Array<AnnualDataObject> = [];

  Object.keys(data.annualReturns).map((el: any) => {
    // Do not take first element which is Timestamp (TODO: in backend)
    if (el > 0) {
      annualData.push({
        // @ts-ignore: Object as any
        annualReturns: data.annualReturns[el],
        // @ts-ignore: Object as any
        annualRisks: data.annualRisks[el],
        // @ts-ignore: Object as any
        ratio: data.ratio[el],
        // @ts-ignore: Object as any
        symbol: data.symbol[el],
      });
    }
  });
  return { annualData };
};

export default AnnualData;
