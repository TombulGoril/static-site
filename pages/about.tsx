import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";
import styles from "./about.module.css";

const About: NextPage = () => {
  return (
    <Layout>
      <PageTitle
        tabTitle='About us - Tombul Goril'
        styleName='large_uncentered'
      >
        About us
      </PageTitle>
      <main style={{ margin: "1rem" }}>
        <p>
          We are Tombul Goril, a Turkish company founded in 2020, and we are the
          exclusive distributors of Chubby Gorilla products in Turkey.
        </p>
        <p>
          Our company was founded with the goal of delivering what we think the
          Turkish market needs the most: high-quality, durable plastic bottles,
          and with our partners at Chubby Gorilla we are working day and night
          to provide customers with the highest quality products they need.
        </p>
        <h1 style={{ fontSize: "2.5rem" }}>Chubby Gorilla</h1>
        <p>
          Chubby Gorilla has revolutionized the industry, in several interesting
          and exciting ways. With their design &amp; engineering team in
          California and the materials used in the manufacturing process, they
          assure their customers that they get the highest quality possible.
        </p>
        <p>
          The Unicorn v3 series are the best-selling bottles, because of their
          high durability, quality, and because they preserve the liquid inside
          for a long time, due to the caps being air-tight and plastic materials
          used in manufacturing. They also come with removable drip-nozzles for
          the times you need a fine amount of liquid only, and because they are
          removable, you can buy your own nozzles that suit your needs.
        </p>
        <p>
          The Aviator series comes in many types, and sizes different to the
          Unicorn series, they suit liquids that get damaged quickly. Because of
          the cap design of the bottles, the bottle contents are completely
          sealed from both air and water, so they guarantee a longer shelf-life.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0",
          }}
        >
          <img
            src='/logo.jpeg'
            alt='Tombul Goril logo'
            className={styles.logo}
          />
        </div>
      </main>
    </Layout>
  );
};

export default About;
