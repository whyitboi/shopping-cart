import { NavLink } from "react-router";

export const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart" aria-label={`Cart, ${cartCount} items`}>
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
