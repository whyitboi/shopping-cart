import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { describe, expect, beforeEach, vi, afterEach, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "/src/App";

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
});

//function to render the App
function renderApp(startAt = "./shop") {
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
      screen.getByRole("link", { name: /cart 1 items/i }),
    ).toBeInTheDocument();
  });
  test("adding the same product twice gives one entry with a higher quantity", async () => {
    const user = userEvent.setup();
    renderApp();
    const addButtons = await screen.findAllByRole("button", {
      name: /add to cart/i,
    });
    await user.click(addButtons[0]);
    await user.click(addButtons[0]);
    await user.click(screen.getByRole("link", { name: /cart/i }));

    expect(
      screen.getAllByRole("heading", { name: "Test Backpack" }),
    ).toHaveLength(1);
  });
});
