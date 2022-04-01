import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import MainStats from "../components/Stats/MainStats";
import Topbar from "../components/Topbar";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { fetchMarketCapData, fetchGlobalData } from "../lib/fetchData";
import { NextPageContext } from "next";
import type {
  MarketcapDataResponse,
  MarketcapDataResponse as MCData,
  MCDataProps,
  APIGlobalDataResponse,
} from "../types/stats";
import { percentageFormatter } from "../helpers";

const FETCH_INTERVAL_IN_MINUTES = 5;
const FETCH_INTERVAL_IN_SECONDS = FETCH_INTERVAL_IN_MINUTES * 60;
function Home({ data, global }: MCDataProps) {
  const [cryptoData, setCryptoData] = useState(data);

  useEffect(() => {
    setInterval(() => {
      fetchMarketCapData().then((response) => setCryptoData(response));
    }, 1000 * FETCH_INTERVAL_IN_SECONDS);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <title>velty - crypto data analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">velty</h1>
        <div className="p-12 text-accent">
          <Image src="/logo.svg" width={100} height={100} />
        </div>

        <div className="mt-6 flex flex-wrap items-center sm:max-w-4xl">
          <MainStats
            title="crypto market data"
            cryptoIndex={cryptoData.index}
            cryptoMarketCap={cryptoData.marketcap}
            btcDominance={cryptoData.btcDominance}
            marketCapChange={global.data.market_cap_change_percentage_24h_usd}
            activeCrypto={global.data.active_cryptocurrencies}
            cvix={123}
          />
        </div>
      </main>

      <div className="mt-6">
        <Modal
          buttonName="what is this?"
          title="velty crypto index"
          modalActionName="Got it!"
        >
          <p className="py-4 lowercase">
            Velty has lots of dreams! At the moment it is sleeping... In the
            near future it is going to get up and make its dreams come true!{" "}
            <br />
            So for now velty calculates a dead simple{" "}
            <strong>price index</strong> for the first 100 crypto projects,
            based on marketcap. It also shows the
            <strong>crypto market capitalization</strong> and the{" "}
            <strong>capitalization change in 24</strong>
            hours, the <strong>Bitcoin market dominance</strong> percentage and
            the <strong>total active crypto</strong> that is currently on the
            market.
          </p>
        </Modal>
      </div>

      <Footer />
    </div>
  );
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  const data: MarketcapDataResponse = await fetchMarketCapData();
  const global: APIGlobalDataResponse = await fetchGlobalData();
  data.btcDominance = parseFloat(
    percentageFormatter(global.data.market_cap_percentage["btc"], 2)
  );

  return { data, global };
};

export default Home;
