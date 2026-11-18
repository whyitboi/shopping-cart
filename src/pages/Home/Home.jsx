import { Link } from "react-router";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Fake<span>Store</span>
        </h1>
        <p className={styles.tagline}>Real style. Fake checkout.</p>

        <p className={styles.intro}>
          Browse clothing, jewellery and electronics, pick your favourites, and
          fill your cart. Everything here is for practice, so no money changes
          hands.
        </p>
        <Link className="button" to="/shop">
          Shop now
        </Link>
      </header>

      <section className={styles.why}>
        <h2>Why shop?</h2>
        <ul className={styles.perks}>
          <li>
            <strong>Free shipping: </strong>nothing ever ships
          </li>
          <li>
            <strong>No hidden fees: </strong>no fees at all
          </li>
          <li>
            <strong>24/7 support: </strong>from your browser's DevTools
          </li>
        </ul>
      </section>
    </>
  );
};
