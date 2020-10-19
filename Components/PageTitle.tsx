import Head from "next/head";
import { ReactNode } from "react";
import styles from "./PageTitle.module.css";

// Props Interface
// Children: React JSX
// Tab Title?: Title which will be used in <head> (The tab title)
interface IProps {
  children: ReactNode;
  tabTitle?: string;
  stylename?: "large_uncentered" | "large" | "uncentered" | "normal";
}

const PageTitle: React.FC<IProps> = ({ children, tabTitle, stylename }) => {
  return (
    <h1 className={stylename ? styles[stylename] : styles.normal}>
      {tabTitle && (
        <Head>
          <title>{tabTitle}</title>
        </Head>
      )}
      {children}
    </h1>
  );
};

export default PageTitle;
