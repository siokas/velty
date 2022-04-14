import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import MainStats from "../components/Stats/MainStats";
import SingleStat from "../components/Stats/SingleStat";
import Topbar from "../components/Topbar";
import Modal from "../components/Modal";
import Link from "next/link";
import { dehydrate, useQuery } from "react-query";
import {
  queryClient,
  getVeltyIndex,
  getGlobalData,
  getAnnualData,
} from "../graphql/api";
import { useState } from "react";
import { useInterval } from "../helpers";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("veltyIndex", () => getVeltyIndex());
  await queryClient.prefetchQuery("globalData", () => getGlobalData());
  await queryClient.prefetchQuery("annualData", () => getAnnualData());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [progressBarTimer, setProgressBarTimer] = useState(0);

  useInterval(() => {
    if (progressBarTimer >= 5) {
      setCounter(counter + 1);
      setProgressBarTimer(0);
    } else setProgressBarTimer(progressBarTimer + 1);

    if (counter >= 15) setCounter(0);
  }, 1000);

  const { data: _veltyIndex } = useQuery("veltyIndex", () => getVeltyIndex());
  const { data: _globalData } = useQuery("globalData", () => getGlobalData());
  const { data: _annualData } = useQuery("annualData", () => getAnnualData());

  const veltyIndex = _veltyIndex!.veltyIndex;
  const globalData = _globalData!.globalData;
  const annualData = _annualData!.annualData;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
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
            cryptoIndex={veltyIndex!.index}
            cryptoMarketCap={veltyIndex!.marketcap}
            btcDominance={veltyIndex!.btcDominance}
            marketCapChange={globalData!.market_cap_change_percentage_24h_usd}
            activeCrypto={globalData!.active_cryptocurrencies}
            cvix={123}
          />
        </div>

        <div className="mt-6 flex flex-col">
          <div className="my-6 text-xl font-semibold">
            annual returns / risks ratio
          </div>
          <Link href="/annualData">
            <a>
              <SingleStat
                value={annualData[counter].ratio.toFixed(2)}
                description="based on daily prices from 1st Jan 2020"
                title={annualData[counter].symbol.substring(
                  0,
                  annualData[counter].symbol.length - 4
                )}
              />
            </a>
          </Link>
          <div>
            <progress
              className="progress progress-accent mt-4 w-56 text-center"
              value={progressBarTimer * 20}
              max="100"
            ></progress>
          </div>
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
            based on marketcap. It also shows the{" "}
            <strong>crypto market capitalization</strong> and the{" "}
            <strong>capitalization change in 24 </strong>
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
