import { describe, test, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { ProductCard } from "./ProductCard";

describe("ProductCard component", () => {
  const product = {
    id: 1,
    title: "Test backpack",
    price: 19.99,
    image: "https://example.com/bag.jpg",
  };
  test("renders component that mmatches snapshot", () => {
    const onAddToCart = vi.fn();
    const { container } = render(
      <ProductCard product={product} onAddToCart={onAddToCart} />,
    );

    expect(container).toMatchSnapshot();
  });
  test("adds the chosen quantity to cart", async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();

    render(<ProductCard product={product} onAddToCart={onAddToCart} />);
    const increase = screen.getByRole("button", { name: /increase quantity/i });
    const addButton = screen.getByRole("button", { name: /add to cart/i });

    await user.click(increase);
    await user.click(increase);
    await user.click(addButton);

    expect(onAddToCart).toHaveBeenCalledWith(product, 3);
    expect(screen.getByRole("spinbutton")).toHaveValue(1);
  });
});
