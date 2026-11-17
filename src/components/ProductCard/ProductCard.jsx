import { useState } from "react";
import { QuantityInput } from "../QuantityInput/QuantityInput";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <article className={styles.card}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.price}>{formatPrice(product.price)}</p>
      <div className={styles.quantityInput}>
        <QuantityInput value={quantity} onChange={setQuantity} />

        <button
          type="button"
          onClick={() => {
            onAddToCart(product, quantity);
            setQuantity(1);
          }}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};
