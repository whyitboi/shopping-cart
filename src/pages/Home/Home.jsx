import { Link } from "react-router";

export const Home = () => {
  return (
    <>
      <header>
        <h1>FakeStore</h1>
        <p>Real style. Fake checkout</p>
      </header>
      <main>
        <section>
          <p>Intro Paragraph</p>
          <Link to="/shop">Shop now</Link>
        </section>
        <section>
          <h3>Why shop?</h3>
          <ul>
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
      </main>
      <footer>
        <p>
          Product data from <a href="fakestore">FakeStore API</a>. Built by
          whytiboi
        </p>
      </footer>
    </>
  );
};
