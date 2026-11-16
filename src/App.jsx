import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router";

export const App = () => {
  const [cart, setCart] = useState([]);

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
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <main>
        <Outlet context={{ cart, addToCart }} />
      </main>
    </>
  );
};
