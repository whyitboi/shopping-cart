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
        <ProductCard key={product.id}>{product.title}</ProductCard>
      ))}
    </ul>
  );
};
