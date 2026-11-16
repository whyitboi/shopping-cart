import { QuantityInput } from "../QuantityInput/QuantityInput";

export const CardItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <article key={item.id}>
      <QuantityInput
        value={item.quantity}
        onChange={() => onQuantityChange(item.id, item.quantity)}
      />
      <span>{item.price * item.quantity}</span>
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
