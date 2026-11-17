import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { MemoryRouter } from "react-router";

describe("Home page", () => {
  test("Homepage renders and matches snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  test("shows h1", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: /FakeStore/i }),
    ).toBeInTheDocument();
  });
  test("shows shop now link", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /shop now/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /shop now/i })).toHaveAttribute(
      "href",
      "/shop",
    );
  });
});
