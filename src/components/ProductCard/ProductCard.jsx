import { useState } from "react";
import { QuantityInput } from "../QuantityInput/QuantityInput";

export const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <article>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
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
    </article>
  );
};
