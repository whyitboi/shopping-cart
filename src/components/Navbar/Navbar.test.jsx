import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router";

describe("Navbar component", () => {
  test("that Navbar renders and matches snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar cartCount={4} />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  test("shows the cart count", () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={4} />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("link", { name: /cart, 4 items/i }),
    ).toBeInTheDocument();
  });
});
