import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <PageTitle
        tabTitle='About us - Tombul Goril'
        styleName='large_uncentered'
      >
        About us
      </PageTitle>
      <p>
        We are Tombul Goril, a Turkish company founded in 2020, and we are the
        exclusive distributors of Chubby Gorilla products in Turkey.
      </p>
      <p>
        Our company was founded with the goal of delivering what we think the
        Turkish market needs the most: high-quality, durable plastic bottles,
        and with our partners at Chubby Gorilla we are working day and night to
        provide customers with the highest quality products they need.
      </p>
      <hr />
      <h1 style={{ fontSize: "2.5rem" }}>Chubby Gorilla</h1>
      <p>
        Chubby Gorilla has revolutionized the industry, in several interesting
        and exciting ways. With their design &amp; engineering team in
        California and their
      </p>
    </Layout>
  );
};

export default About;
