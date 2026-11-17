import { Link } from "react-router";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>FakeStore</h1>
        <p>Real style. Fake checkout.</p>
      </header>
      <>
        <section>
          <p>
            Browse clothing, jewellery and electronics, pick rour favorites, and
            fill your cart. Everything here is for practice, so no money changes
            hands.
          </p>
          <Link to="/shop">Shop now</Link>
        </section>
        <section>
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
    </>
  );
};
