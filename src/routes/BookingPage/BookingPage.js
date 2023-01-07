import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingPage from ".";

describe("BookingPage component", () => {
  test("renders successfully", () => {
    const { container } = render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );
    console.log(container);
    const heading = screen.getByText("Booking Form");
    expect(heading).toBeInTheDocument();
    screen.debug();
  });
});

// test("loads without crashing");
// test("date input is in the document");
// test("date input has default value");
// test("date input value is current day");
// test("date input change loads without crashing");
// test("date input ");
