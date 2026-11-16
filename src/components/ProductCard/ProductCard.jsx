import { useState } from "react";
import { QuantityInput } from "../QuantityInput/QuantityInput";

export const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <article>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <h3>{Intl.NumberFormat(product.price)}</h3>
        <QuantityInput value={quantity} onChange={setQuantity} />
      </article>
      <button
        type="button"
        onClick={(product, quantity) => console.log(product.title, quantity)}
      />
    </>
  );
};
