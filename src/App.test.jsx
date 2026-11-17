import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { describe, expect, beforeEach, vi, afterEach, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const products = [
  {
    id: 1,
    title: "Test Backpack",
    price: 10,
    image: "https://example.com/a.jpg",
  },
  { id: 2, title: "Test shirt", price: 5, image: "https://example.com/b.jpg" },
];

beforeEach(() => {
  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => products,
  });
});

afterEach(() => {
  vi.resetAllMocks();
  vi.restoreAllMocks();
});

//function to render the App
function renderApp(startAt = "/shop") {
  const router = createMemoryRouter(routes, { initialEntries: [startAt] });
  render(<RouterProvider router={router} />);
}

describe("App component", () => {
  test("adding a product updates the cart count in the navbar", async () => {
    const user = userEvent.setup();
    renderApp();

    const addButtons = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });
    await user.click(addButtons[0]);

    expect(
      await screen.findByRole("link", { name: /cart, 1 items/i }),
    ).toBeInTheDocument();
  });
  test("adding the same product twice gives a single heading and cart coutn of 2", async () => {
    const user = userEvent.setup();
    renderApp();
    const addButtons = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });
    await user.click(addButtons[0]);
    await user.click(addButtons[0]);
    await user.click(screen.getByRole("link", { name: /cart/i }));

    const headings = await screen.findAllByRole("heading", {
      name: "Test Backpack",
    });
    const cartLink = await screen.findByRole("link", {
      name: /cart, 2 items/i,
    });
    expect(headings).toHaveLength(1);
    expect(cartLink).toBeInTheDocument();
  });
  test("cart shows what was added with the right total", async () => {
    const user = userEvent.setup();
    renderApp();

    const addButtons = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });

    await user.click(addButtons[0]);
    await user.click(addButtons[1]);
    await user.click(await screen.findByRole("link", { name: /cart/i }));

    expect(await screen.findByText("Total: $15.00")).toBeInTheDocument();
  });
  test("changing the quantity on the cart page updates total and cart count", async () => {
    const user = userEvent.setup();
    renderApp();

    const addButtons = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });
    await user.click(addButtons[0]);
    await user.click(await screen.findByRole("link", { name: /cart/i }));
    const increase = await screen.findByRole("button", {
      name: /increase quantity/i,
    });
    await user.click(increase);

    const cartLink = await screen.findByRole("link", {
      name: /cart, 2 items/i,
    });

    expect(await screen.findByText("Total: $20.00")).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });
  test("removing an item", async () => {
    const user = userEvent.setup();
    renderApp();

    const addButtons = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });
    await user.click(addButtons[0]);
    await user.click(await screen.findByRole("link", { name: /cart/i }));

    const removeButton = await screen.findByRole("button", {
      name: /remove Test Backpack/i,
    });
    await user.click(removeButton);
    expect(await screen.findByText("Your cart is empty")).toBeInTheDocument();
  });
  test("an empty cart renders empty cart message", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(await screen.findByRole("link", { name: /cart/i }));
    expect(await screen.findByText("Your cart is empty")).toBeInTheDocument();
  });
  test("failed fetch returns server error message", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
      json: async () => products,
    });
    renderApp();
    expect(
      await screen.findByText("server failed to respond"),
    ).toBeInTheDocument();
  });
});
