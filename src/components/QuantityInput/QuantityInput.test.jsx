import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QuantityInput } from "./QuantityInput";

describe("QuantityInput component", () => {
  test("QuantityInput renders", () => {
    const { container } = render(<QuantityInput />);
    expect(container).toMatchSnapshot();
  });

  test("clicking + button increases value and calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput value={1} onChange={onChange} />);
    const button = screen.getByRole("button", { name: "+" });
    await user.click(button);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(2);
  });

  test("clicking - button decreases value and calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput value={3} onChange={onChange} />);
    const button = screen.getByRole("button", { name: /decrease quantity/i });
    await user.click(button);

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(2);
  });
  test("clicking - button when value is 1", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput value={1} onChange={onChange} />);
    const button = screen.getByRole("button", { name: /increase quantity/i });
    await user.click(button);

    expect(onChange).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
  test("typing a number calls onChange", () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<QuantityInput value={1} onChange={onChange} />);

    //input type number is spinbutton role
    const input = screen.getByRole("spinbutton");
    user.clear(input);
    fireEvent.change(input, { target: { value: "2" } });

    expect(onChange).toHaveBeenCalledWith(2);
  });
  test("typin 0", () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<QuantityInput value={1} onChange={onChange} />);
    const input = screen.getByRole("spinbutton");
    user.clear(input);

    fireEvent.change(input, { target: { value: "0" } });

    expect(onChange).toHaveBeenCalledWith(1);
  });
});
