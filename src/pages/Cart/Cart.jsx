import { Link, useOutletContext } from "react-router";
import { CartItem } from "../../components/CartItem/CartItem";
import { formatPrice } from "../../utils/formatPrice";
export const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useOutletContext();

  const total = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return cart.length === 0 ? (
    <>
      <h1>Your Cart</h1>
      <p>Your cart is empty</p>
      <Link to="/shop">Go shopping</Link>
    </>
  ) : (
    <>
      <ul>
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
      <p>Total: {formatPrice(total)}</p>
    </>
  );
};
