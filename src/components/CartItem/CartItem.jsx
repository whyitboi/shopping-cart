import { QuantityInput } from "../QuantityInput/QuantityInput";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./CartItem.module.css";

export const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <article className={styles.item}>
      <img className={styles.image} src={item.image} alt={item.title} />

      <div className={styles.info}>
        <h2 className={styles.title}>{item.title}</h2>{" "}
        {item.quantity > 1 ? (
          <>
            <p className={styles.each}>{formatPrice(item.price)} each</p>
            <p className={styles.lineTotal}>
              {formatPrice(item.price * item.quantity)}
            </p>
          </>
        ) : (
          <p>{formatPrice(item.price)} each</p>
        )}
      </div>

      <QuantityInput
        className={styles.qty}
        value={item.quantity}
        onChange={(quantity) => onQuantityChange(item.id, quantity)}
      />
      <button
        type="button"
        className={styles.remove}
        onClick={() => onRemove(item.id)}
        aria-label={`remove ${item.title}`}
      >
        remove item
      </button>
    </article>
  );
};
