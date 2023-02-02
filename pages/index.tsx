import Head from "next/head";
import { GetServerSideProps } from "next";

import { PHOTOS_API } from "../constants";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";
import { Photo } from "@/types";

type Props = {
  photos: Photo[];
};

export default function Home({ photos }: Props) {
  return (
    <>
      <Head>
        <title>Listella</title>
        <meta name="description" content="Listella Frontend Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main photos={photos} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    `${PHOTOS_API}?page=2&sol=1000&api_key=EL8fF085B10gHudijrEPY206bj5FodMINJAHuKY4`
  );

  if (response.status >= 400) {
    if (response.status === 404) {
      return {
        notFound: true,
      };
    }
    if (response.status === 500) {
      throw new Error();
    }
  }

  const data: { photos?: Photo[] } = await response.json();

  return {
    props: { photos: data.photos, status: null },
  };
};
