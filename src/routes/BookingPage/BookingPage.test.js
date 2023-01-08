import * as React from "react";
import "@testing-library/jest-dom";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { fetchAPI } from "./../../util/bookingApi/api";
import userEvent from "@testing-library/user-event";

// Component
import BookingPage from ".";

describe("Booking Page", () => {
  it("renders", () => {
    renderPage(<BookingPage />, "/booking");

    const headings = screen.getAllByRole("heading");
    expect(headings[0]).toHaveTextContent("Booking Form");
  });

  it("return the current date as default value", () => {
    renderPage(<BookingPage />, "/booking");
    const currentDate = new Date()
      .toLocaleDateString()
      .split("/")
      .reverse()
      .join("-");

    const dateInput = screen.getByLabelText("Choose Date:");

    expect(dateInput.value).toEqual(currentDate);
  });

  it("returns different times on different days", () => {
    renderPage(<BookingPage />, "/booking");
    const currentDateTimes = fetchAPI(new Date());
    const defaultDate = screen.getByLabelText("Choose Date:");
    const times = screen.getByLabelText("Choose Time:").children;

    const timeCopy = [...times];

    fireEvent.change(defaultDate, { target: { value: "2023-01-23" } });

    expect(currentDateTimes).not.toEqual(times);
    expect(times).not.toEqual(timesCopy);
  });

  it("");
});

function renderPage(Component, path) {
  const routes = [{ path, element: Component }];
  const initialEntries = [path];
  const initialIndex = 0;
  const router = getRouter(routes, initialEntries, initialIndex);
  return render(<RouterProvider router={router} />);
}

function getRouter(routes, initialEntries, initialIndex) {
  return createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });
}
