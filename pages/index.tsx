import AOS from "aos";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Footer from "../components/organisms/Footer";
import MainBanner from "../components/organisms/MainBanner";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import TransactionStep from "../components/organisms/TransactionStep";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Store GG - Topup & Get a New Experience in Gaming</title>
        <meta
          name='description'
          content='Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati'
        />
        <meta
          property='og:title'
          content='Store GG - Topup & Get a New Experience in Gaming'
        />
        <meta
          property='og:description'
          content='Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati'
        />
        <meta property='og:image' content='' />
        <meta
          property='og:url'
          content='http://websitegame.webdevgroupid.com'
        />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
};

export default Home;
