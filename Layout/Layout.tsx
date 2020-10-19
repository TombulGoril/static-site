// Layout component for all pages

import { NextPage } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";

const Layout: NextPage<{ children: ReactNode; logoWidthHeight?: number }> = ({
  children,
  logoWidthHeight,
}) => {
  const Router = useRouter();
  logoWidthHeight = logoWidthHeight || 128;
  return (
    <>
      <nav className={styles.nav}>
        <img
          src='/logo.jpeg'
          width={logoWidthHeight}
          height={logoWidthHeight}
          alt='Tombul Goril Logo'
          className={styles.nav_logo}
        />
        <ul className={styles.nav_list}>
          <li className={styles.nav_list_item}>
            <Link href='/'>
              <a
                className={`${styles.nav_list_item_link} ${
                  Router.pathname === "/"
                    ? styles.nav_list_item_link_current
                    : ""
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link href='/about'>
              <a
                className={`${styles.nav_list_item_link} ${
                  Router.pathname === "/about"
                    ? styles.nav_list_item_link_current
                    : ""
                }`}
              >
                About
              </a>
            </Link>
          </li>
          <li className={styles.nav_list_item}>
            <Link href='/products'>
              <a
                className={`${styles.nav_list_item_link} ${
                  Router.pathname === "/products"
                    ? styles.nav_list_item_link_current
                    : ""
                }`}
              >
                Products
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <section className={styles.page_content}>{children}</section>
    </>
  );
};
export default Layout;
