import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

const linkClass = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

export const Navbar = ({ cartCount }) => {
  return (
    <nav className={styles.nav} aria-label="Main">
      <div className={styles.inner}>
        <NavLink className={styles.brand} to="/">
          Fake<span>Store</span>
        </NavLink>
        <ul className={styles.links}>
          <li>
            <NavLink className={linkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              className={linkClass}
              to="/cart"
              aria-label={`Cart, ${cartCount} items`}
            >
              Cart <span className={styles.badge}>({cartCount})</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
