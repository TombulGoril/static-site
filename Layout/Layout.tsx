// Layout component for all pages

import { NextPage } from "next";
import { ReactNode } from "react";
import Link from "next/link";

const Layout: NextPage<{ children: ReactNode; logoWidthHeight?: number }> = ({
  children,
  logoWidthHeight,
}) => {
  logoWidthHeight = logoWidthHeight || 128;
  return (
    <>
      <nav>
        <img
          src="/logo.jpeg"
          width={logoWidthHeight}
          height={logoWidthHeight}
          alt="Tombul Goril Logo"
        />
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a>Products</a>
            </Link>
          </li>
        </ul>
      </nav>
      <section>{children}</section>
    </>
  );
};
export default Layout;
