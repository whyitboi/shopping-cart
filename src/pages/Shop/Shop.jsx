import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";

export const Shop = () => {
  const { products, loading, error } = useProducts();
  return loading ? (
    <p>Loading..</p>
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            onAddToCart={(product, quantity) =>
              console.log(product.title, quantity)
            }
          />
        </li>
      ))}
    </ul>
  );
};
