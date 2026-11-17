import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { MemoryRouter } from "react-router";

describe("Home page", () => {
  test("that Navbar renders and matches snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  test("shows home h1", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading").textContent).toBe(" Home ");
  });
});
