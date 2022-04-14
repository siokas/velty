import Head from "next/head";
import Topbar from "../components/Topbar";
import AnnualDataTable from "../components/AnnualDataTable";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getAnnualData } from "../graphql/api";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("annualData", () => getAnnualData());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function AnnualData() {
  const { data: _annualData } = useQuery("annualData", () => getAnnualData());
  const annualData = _annualData?.annualData;

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

export default AnnualData;
