import { describe, test, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { ProductCard } from "./ProductCard";

describe("ProductCard component", () => {
  test("ProductCard rendered and matches snapshot", async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn();

    const { container } = render(
      <ProductCard onAddToCart={() => onAddToCart} />,
    );
    const addbutton = screen.getByRole("button", { name: /add to cart/i });
    //const product = hopw can i get the product
    await user.click(addbutton);
    await user.click(addbutton);

    expect(onAddToCart).toHaveBeenCalledWith(/*product.id, quantity*/);
    expect(container).toMatchSnapshot();
  });
});
