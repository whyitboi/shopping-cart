import { describe, test, expect, vi } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QuantityInput } from "./QuantityInput";

describe("QuantityInput component", () => {
  test("QuantityInput renders", () => {
    const { container } = render(<QuantityInput />);
    expect(container).toMatchSnapshot();
  });
  test("clicking + button calls onChange", () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput />);
    const button = getByRole("button", { name: "-" });
    user.click(button);

    expect(onChange).toHaveBeenCalled();
  });
  test("clicking + button increases value and calls onChange", () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput value={1} onChange={onChange} />);
    const button = screen.getByRole("button", { name: "+" });
    user.click(button);
    const input = screen.getByRole("input");

    expect(onChange).toHaveBeenCalled();
    expect(input.value).toBe(2);
  });

  test("clicking - button decreases value and calls onChange", () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput value={3} onChange={onChange} />);
    const button = screen.getByRole("button", { name: "-" });
    user.click(button);
    const input = screen.getByRole("input");

    expect(onChange).toHaveBeenCalled();
    expect(input.value).toBe(2);
  });
  test("clicking - button when value is 1", () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput value={1} onChange={onChange} />);
    const button = screen.getByRole("button", { name: "-" });
    user.click(button);
    const input = screen.getByRole("input");

    expect(onChange).not.toHaveBeenCalled();
    expect(input.disabled).toBe(true);
  });
  test("typing a number calls onChange", () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput value={1} onChange={onChange} />);
    const input = screen.getByRole("input");
    user.clear(input);
    user.type(input(2));

    expect(onChange).toHaveBeenCalledWith(2);
  });
});
