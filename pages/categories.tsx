import { NextPageContext } from "next";
import Head from "next/head";
import CategoriesTable from "../components/CategoriesTable";
import Topbar from "../components/Topbar";
import { fetchMarketCategories } from "../lib/fetchData";
import { APICategoryResponse } from "../types/stats";

type CategoriesProps = {
  categories: Array<APICategoryResponse>;
};

function Categories({ categories }: CategoriesProps) {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>velty - market categories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />

      <main className="mt-6 flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-2xl font-bold md:text-6xl">market categories</h1>
      </main>

      <div className="mt-6 flex w-full text-center">
        <CategoriesTable categories={categories} />
      </div>
    </div>
  );
}

Categories.getInitialProps = async (ctx: NextPageContext) => {
  const categories: Array<APICategoryResponse> = await fetchMarketCategories();
  return { categories };
};

export default Categories;
