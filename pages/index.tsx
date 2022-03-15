import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import MainStats from "../components/Stats/MainStats";
import Topbar from "../components/Topbar";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import { getMarketCapData } from "../helpers/getData";

export default function Home() {
  const [cryptoData, setCryptoData] = useState({
    index: 0,
    marketcap: 0,
    btcDominance: 0,
  });

  useEffect(() => {
    getMarketCapData().then((response) => setCryptoData(response));
    setInterval(() => {}, 10000);
  }, []);

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
            title="Top 100 Crypto Data"
            cryptoIndex={cryptoData.index}
            cryptoMarketCap={cryptoData.marketcap}
            btcDominance={cryptoData.btcDominance}
            cvix={123}
          />
        </div>
      </main>

      <div>
        <Modal
          buttonName="How does this work?"
          title="Velty Crypto Index"
          modalActionName="Got it!"
        >
          <p className="py-4">
            Velty has lots of dreams! At the moment it is sleeping... In the
            near future it is going to get up and make its dreams come true! So
            for now velty calculates a dead simple price index for the first 100
            crypto projects, based on marketcap. It also gives you the crypto
            market capitalization as well as the Bitcoin market dominance
            percentage.
          </p>
        </Modal>
      </div>

      <Footer />
    </div>
  );
}