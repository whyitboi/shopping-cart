import { Link, useOutletContext } from "react-router";
import { CartItem } from "../../components/CartItem/CartItem";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./Cart.module.css";
export const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useOutletContext();

  const total = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return (
    <section className={styles.cart}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <>
          <div className={styles.empty}>
            <p>Your cart is empty</p>
            <Link to="/shop">Go shopping</Link>
          </div>
        </>
      ) : (
        <>
          <ul className={styles.list}>
            {cart.map((item) => (
              <li key={item.id}>
                <CartItem
                  item={item}
                  onQuantityChange={updateQuantity}
                  onRemove={removeFromCart}
                />
              </li>
            ))}
          </ul>
          <div className={styles.summary}>
            <p className={styles.total}>Total: {formatPrice(total)}</p>
          </div>
        </>
      )}
    </section>
  );
};
