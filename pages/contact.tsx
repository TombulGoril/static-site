import { NextPage } from "next";
import PageTitle from "../Components/PageTitle";
import Layout from "../Layout/Layout";
import styles from "./contact.module.css";

const Contact: NextPage = () => {
  return (
    <Layout>
      <PageTitle tabTitle='Contact Information - Tombul Goril'>
        Contact Information
      </PageTitle>
      <ul className={styles.info}>
        <li className={styles.card}>
          <a href='mailto:goriltombul@gmail.com' className={styles.link}>
            goriltombul@gmail.com
          </a>
        </li>
        <li className={styles.card}>
          <a href='tel:+905436950980' className={styles.link}>
            +90 543 695 09 80
          </a>
        </li>
        <li className={styles.card}>
          <a href='https://wa.link/asw2b8' className={styles.link}>
            Whatsapp
          </a>
        </li>
      </ul>
    </Layout>
  );
};
export default Contact;
