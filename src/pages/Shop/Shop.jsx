import { useOutletContext } from "react-router";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import styles from "./Shop.module.css";

export const Shop = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useOutletContext();
  return (
    <section className={styles.shop}>
      {loading ? (
        <div>
          <h1>Shop</h1>
          <p className="status">Loading...</p>
        </div>
      ) : error ? (
        <div>
          <h1>Shop</h1>
          <p className="status">{error.message}</p>
        </div>
      ) : (
        <div>
          <h1>Shop</h1>
          <ul className={styles.grid}>
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} onAddToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div>
      )}{" "}
    </section>
  );
};
