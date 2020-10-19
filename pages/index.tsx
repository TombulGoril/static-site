import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <PageTitle stylename='large'>Tombul Goril</PageTitle>
    </Layout>
  );
};

export default Home;
