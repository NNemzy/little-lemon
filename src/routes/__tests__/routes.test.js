import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";

import HomePage from "./../HomePage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import AboutPage from "./../../routes/AboutPage";
import MenuPage from "./../../routes/MenuPage";
import BookingPage from "./../../routes/BookingPage";
import OrderPage from "./../../routes/OrderPage";

describe("Main App ", () => {
  test("renders home page route successfully", () => {
    renderPage(<HomePage />, "/");
    const headings = screen.getAllByRole("heading");
    expect(headings[0]).toHaveTextContent("Little Lemon");
  });

  test("renders about page route successfully", () => {
    renderPage(<AboutPage />, "/about");
    const headings = screen.getAllByRole("heading");
    expect(headings[0]).toHaveTextContent("About Page");
  });
  test("renders menu page route successfully", () => {
    renderPage(<MenuPage />, "/menu");
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Menu Page");
  });
  test("renders booking page route successfully", () => {
    renderPage(<BookingPage />, "/booking");
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Booking Form");
  });
  test("renders order page route successfully", () => {
    renderPage(<OrderPage />, "/order");
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Order Page");
  });
});

function renderPage(Component, path) {
  const routes = [
    {
      path,
      element: Component,
    },
  ];
  const initialEntries = [path];
  const initialIndex = 0;
  const router = getRouter(routes, initialEntries, initialIndex);
  render(<RouterProvider router={router} />);
}

function getRouter(routes, initialEntries, initialIndex) {
  return createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });
}
