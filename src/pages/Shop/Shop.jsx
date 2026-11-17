import { useOutletContext } from "react-router";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";

export const Shop = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useOutletContext();
  return loading ? (
    <>
      <h1>Shop</h1>
      <p>Loading...</p>
    </>
  ) : error ? (
    <>
      <h1>Shop</h1>
      <p>{error.message}</p>
    </>
  ) : (
    <>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} onAddToCart={addToCart} />
          </li>
        ))}
      </ul>
    </>
  );
};
