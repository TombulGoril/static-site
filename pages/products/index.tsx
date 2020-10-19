import { GetStaticProps, NextPage } from "next";
import PageTitle from "../../Components/PageTitle";
import Layout from "../../Layout/Layout";
import styles from "./index.module.css";

interface IProps {
  products: Array<{
    title: string;
    image: string;
  }>;
}

const Products: NextPage<IProps> = ({ products }) => {
  const productElements = products.map((product, index) => {
    return (
      <article className={styles.product_card} key={index}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.product_image}
        />
        <h1 className={styles.product_title}>{product.title}</h1>
      </article>
    );
  });

  return (
    <Layout>
      <PageTitle>Products</PageTitle>
      <div className={styles.grid}>{productElements}</div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IProps> = async (_) => {
  // Import 'fs' asynchronosly because you can't import in a function otherwise
  const fs = await import("fs");
  const path = await import("path");

  const files = fs.readdirSync(path.join(process.cwd(), "/public/products"));
  const products = files.map((file) => {
    return {
      // Regex to remove file extension so we get a clean title
      // Caveat: We have to cleanly name our files
      title: file.replace(/\.[^/.]+$/, ""),
      image: `/products/${file}`,
    };
  });

  return {
    props: {
      products,
    },
  };
};

export default Products;
