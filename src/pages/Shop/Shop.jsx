import { useProduct } from "../../hooks/useProducts";

export const Shop = () => {
  const { products, loading, error } = useProduct();
  return loading ? (
    <p>Loading..</p>
  ) : error ? (
    <p>{error.message}</p>
  ) : (
    <ul>
      {products.map((product) => {
        <li key={product.id}>{product.title}</li>;
      })}
    </ul>
  );
};
