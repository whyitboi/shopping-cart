import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartItem } from "./CartItem";

describe("CartItem component", () => {
  const item = {
    id: 1,
    title: "Test Backpack",
    price: 10,
    quantity: 2,
    image: "https://example.com/a.jpg",
  };
  test("cart item renders properly", () => {
    const { container } = render(
      <CartItem item={item} onRemove={() => {}} onQuantityChange={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });
  test("changing the quantity of an item", async () => {
    const user = userEvent.setup();
    const onQuantityChange = vi.fn();

    render(
      <CartItem
        item={item}
        onQuantityChange={onQuantityChange}
        onRemove={() => {}}
      />,
    );
    const decrease = await screen.findByRole("button", {
      name: /decrease quantity/i,
    });
    await user.click(decrease);

    expect(onQuantityChange).toHaveBeenCalledOnce();
    expect(await screen.findByText("$10.00 each")).toBeInTheDocument();
  });
  test("removing an item", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();

    render(
      <CartItem item={item} onRemove={onRemove} onQuantityChange={() => {}} />,
    );

    const removeBtn = await screen.findByRole("button", {
      name: /remove Test Backpack/i,
    });
    await user.click(removeBtn);
    screen.debug();

    expect(onRemove).toHaveBeenCalledOnce();
    onRemove(item.id, 1);
    expect(
      await screen.findByRole("spinbutton", { name: /quantity/i }),
    ).toHaveValue(1);
  });
});
