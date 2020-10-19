import Head from "next/head";
import { ReactNode } from "react";
import styles from "./PageTitle.module.css";

// Props Interface
// Children: React JSX
// Tab Title?: Title which will be used in <head> (The tab title)
// Style name?: CSS Classname that will be used for the heading
interface IProps {
  children: ReactNode;
  tabTitle?: string;
  styleName?: "large_uncentered" | "large" | "uncentered" | "normal";
}

const PageTitle: React.FC<IProps> = ({ children, tabTitle, styleName }) => {
  return (
    <h1 className={styleName ? styles[styleName] : styles.normal}>
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
