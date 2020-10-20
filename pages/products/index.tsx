import { GetStaticProps, NextPage } from "next";
import PageTitle from "../../Components/PageTitle";
import ProductCard from "../../Components/ProductCard";
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
    return <ProductCard elementKey={index} product={product} />;
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

  const files = fs.readdirSync(
    path.join(process.cwd(), "/public/product_images")
  );
  const products = files.map((file) => {
    return {
      // Regex to remove file extension so we get a clean title
      // Caveat: We have to cleanly name our files
      title: file.replace(/\.[^/.]+$/, ""),
      image: `/product_images/${file}`,
    };
  });

  return {
    props: {
      products,
    },
  };
};

export default Products;
