import { useOutletContext } from "react-router";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import styles from "./Shop.module.css";

export const Shop = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useOutletContext();
  return (
    <section className={styles.shop}>
      <h1>Shop</h1>
      {loading ? (
        <div>
          <p className="status">Loading...</p>
        </div>
      ) : error ? (
        <div>
          <p className="status">{error.message}</p>
        </div>
      ) : (
        <div>
          <ul className={styles.grid}>
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} onAddToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
