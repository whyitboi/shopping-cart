import { QuantityInput } from "../QuantityInput/QuantityInput";
import { formatPrice } from "../../utils/formatPrice";

export const CardItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <article key={item.id}>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{formatPrice(item.price * item.quantity)}</p>
      <QuantityInput
        value={item.quantity}
        onChange={(quantity) => onQuantityChange(item.id, quantity)}
      />
      <button
        type="button"
        onClick={() => onRemove(item.id)}
        aria-label={`remove ${item.title}`}
      >
        remove item
      </button>
    </article>
  );
};
