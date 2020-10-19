import styles from "./ProductCard.module.css";

interface IProps {
  elementKey: number;
  product: {
    image: string;
    title: string;
  };
}

const ProductCard: React.FC<IProps> = ({ elementKey, product }) => {
  return (
    <article className={styles.product_card} key={elementKey}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.product_image}
      />
      <h1 className={styles.product_title}>{product.title}</h1>
    </article>
  );
};

export default ProductCard;
