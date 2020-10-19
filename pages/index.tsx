import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <PageTitle styleName='large'>Tombul Goril</PageTitle>
    </Layout>
  );
};

export default Home;
