import Head from "next/head";
import CategoriesTable from "../components/CategoriesTable";
import Topbar from "../components/Topbar";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getCategories } from "../graphql/api";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("categories", () => getCategories());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

function Categories() {
  const { data: _categories } = useQuery("categories", () => getCategories());
  const categories = _categories?.categories;

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
export default Categories;
