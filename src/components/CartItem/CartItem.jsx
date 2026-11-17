import { QuantityInput } from "../QuantityInput/QuantityInput";
import { formatPrice } from "../../utils/formatPrice";

export const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <article>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{formatPrice(item.price * item.quantity)} each</p>
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
