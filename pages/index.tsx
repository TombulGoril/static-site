import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <PageTitle stylename='large'>Tombul Goril</PageTitle>
      </main>
    </Layout>
  );
};

export default Home;
