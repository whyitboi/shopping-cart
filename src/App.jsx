import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router";

export const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    cart
      .some((item) => item.id === product.id)
      .map((item) => [{ quantity: item + quantity }]);

    //not in cart
    //setCart([..cart, {...product, quantity}])
  };
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <Navbar
        cartCount={cartCount}
        aria-label={`Cart, ${cartCount} items`}
      ></Navbar>
      <main>
        <Outlet context={{ cart, addToCart }} />
      </main>
    </>
  );
};
