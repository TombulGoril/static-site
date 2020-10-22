// Layout component for all pages

import { NextPage } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import SocialIcons from "../Components/SocialIcons";

// Props interface
// Children: React JSX
// Logo Width [&] Height: The width and height used in the image (Assumes a square image)
interface IProps {
  children: ReactNode;
  logoWidthHeight?: number;
}

const Layout: NextPage<IProps> = ({ children, logoWidthHeight }) => {
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
      <footer className={styles.footer}>
        <SocialIcons />
        <p>
          &copy; {new Date().getFullYear()} Tombul Goril Ltd. - All rights
          reserved
        </p>
      </footer>
    </>
  );
};
export default Layout;
