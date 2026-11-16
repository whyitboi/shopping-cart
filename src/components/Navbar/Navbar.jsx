import { NavLink } from "react-router";

export const Navbar = ({ cartCount }) => {
  //map the 3 items into nav
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="cart" aria-label={`Cart, ${cartCount} items`}>
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
