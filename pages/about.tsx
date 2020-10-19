import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <main>
        <PageTitle tabTitle='About us - Tombul Goril'>About us</PageTitle>
      </main>
    </Layout>
  );
};

export default About;
