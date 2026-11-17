import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import styles from "./App.module.css";

export const App = () => {
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const addToCart = (product, quantity) => {
    const alreadyInCart = cart.some((item) => item.id === product.id);

    if (alreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item,
      ),
    );
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.app}>
      <Navbar cartCount={cartCount}></Navbar>
      <main className={styles.main}>
        <Outlet context={{ cart, addToCart, updateQuantity, removeFromCart }} />
      </main>
      <footer className={styles.footer}>
        <p>
          Product data from{" "}
          <a href="https://fakestoreapi.com/">FakeStore API</a>. Built by
          whyitboi
        </p>
      </footer>
    </div>
  );
};
