import { describe, test, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router";

describe("Navbar component", () => {
  test("that Navbar renders and matches snapshot", () => {
    //remind me how to use <Memery router />
  });
  test("shows the cart count", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar cartCount={4} />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("link", { name: /cart, 4 items/i }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
