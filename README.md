# FakeStore: Shopping Cart

A small online shop built with React. Browse products, pick a quantity, add them to your cart, and adjust or remove them before "checking out". Nothing is ever charged: the products come from a practice API, and there's no real checkout.

**Live demo:** [FakeStore](https://shopingcart.vercel.app)

![Screenshot of the FakeStore shop page](screenshot.png)

## Features

- **Three pages** (Home, Shop and Cart) with client-side routing, so there's no page reload between them
- **Live product data** from [FakeStore API](https://fakestoreapi.com/), with loading and error states
- **Quantity control** on every product: type a number or use the − / + buttons
- **Cart count** in the navbar that updates as you add items
- **Cart page** to change quantities, remove items, and see line totals and the order total
- **Responsive layout**, from 320px phones to wide desktops
- **Accessible**: keyboard focus outlines, labelled controls for screen readers, WCAG AA colour contrast, and reduced motion for users who ask for it

## Built with

- [React](https://react.dev/) (`useState`, `useEffect`, a custom `useProducts` hook)
- [React Router](https://reactrouter.com/) (nested routes, `NavLink`, `useOutletContext`)
- [Vite](https://vite.dev/)
- CSS Modules
- [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Running it locally

```
git clone https://github.com/whyitboi/shopping-cart.git
cd shopping-cart
npm install
npm run dev
```

Then open the address Vite prints, usually `http://localhost:5173`.

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Starts the development server                  |
| `npm test`        | Runs the test suite in watch mode              |
| `npm run build`   | Creates the production build in `dist/`        |
| `npm run preview` | Serves the production build locally to test it |
| `npm run lint`    | Checks the code with ESLint                    |

## Testing

Each component has its own tests next to it (for example `ProductCard/ProductCard.test.jsx`), and `App.test.jsx` tests whole user journeys: adding products, changing quantities, removing items, the empty cart, and a failed product fetch. The API is mocked in the tests, so they run without a network connection.

## Project structure

```
src/
  components/   Navbar, ProductCard, QuantityInput, CartItem
  pages/        Home, Shop, Cart
  hooks/        useProducts (fetches the product list)
  utils/        formatPrice
  App.jsx       Layout and cart state
  routes.jsx    Route configuration
```

## About this project

This is [The Odin Project's Shopping Cart project](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart) from the React course. Product data comes from [FakeStore API](https://fakestoreapi.com/).
