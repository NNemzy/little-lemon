import "@testing-library/jest-dom";
import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import * as React from "react";
import userEvent from "@testing-library/user-event";
import BookingForm from "..";
import * as Yup from "yup";

// Mock Functions & Data
import { submitHandlerMock, defaultFormProps } from "./mocks";

describe("Booking Form", () => {
  it("renders", () => {
    renderFormWithDefaultProps();
  });

  it("renders inputs", () => {
    renderFormWithDefaultProps();

    expect(screen.getByLabelText("Choose Date:")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose Time:")).toBeInTheDocument();
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion:")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders inputs with default values", () => {
    renderFormWithDefaultProps();

    const [dateInput, timeInput, guestInput, occasionInput] = getAllInputs();
    const { date, time, guests, occasion } =
      defaultFormProps.formikValues.initialValues;

    expect(dateInput.value).toBe(date);
    expect(timeInput.value).toBe(time);
    expect(guestInput.value).toBe(guests);
    expect(occasionInput.value).toBe(occasion);
  });

  it("changes inputs values correctly ", () => {
    renderFormWithDefaultProps();
    const defaultValue = defaultFormProps.formikValues.initialValues.occasion;
    const newValue = "anniversary";
    const occasionInput = screen.getByLabelText("Occasion:");

    expect(occasionInput.value).toBe(defaultValue);
    act(() => {
      fireEvent.select(occasionInput, { target: { value: newValue } });
    });
    expect(occasionInput.value).toBe(newValue);
  });

  it("shows an error message if name is empty", () => {
    renderFormWithDefaultProps();

    const nameInput = screen.getByLabelText("Name:");

    act(() => {
      fireEvent.focus(nameInput);
      fireEvent.focusOut(nameInput);
    });

    waitFor(() => {
      const errorMessage = screen.getByTestId("name");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Name is required");
    });
  });
  it("shows an error message if name is less than 4 characters", () => {
    renderFormWithDefaultProps();

    const nameInput = screen.getByLabelText("Name:");

    act(() => {
      fireEvent.focus(nameInput);
      fireEvent.change(nameInput, { target: { value: "ho" } });
      fireEvent.focusOut(nameInput);
    });

    waitFor(() => {
      const errorMessage = screen.getByTestId("name");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Minimum 4 characters");
    });
  });
  it("shows an error message if email is empty", () => {
    renderFormWithDefaultProps();

    const emailInput = screen.getByLabelText("Email:");

    act(() => {
      fireEvent.focus(emailInput);
      fireEvent.focusOut(emailInput);
    });

    waitFor(() => {
      const errorMessage = screen.getByTestId("email");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Email is required");
    });
  });
  it("shows an error message if email is an invalid address ", () => {
    renderFormWithDefaultProps();

    const emailInput = screen.getByLabelText("Email:");

    act(() => {
      fireEvent.focus(emailInput);
      fireEvent.change(emailInput, { target: { value: "sd" } });
      fireEvent.focusOut(emailInput);
    });

    waitFor(() => {
      const errorMessage = screen.getByTestId("email");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Invalid email address");
    });
  });
  it("shows an error message if date is invalid", () => {
    renderFormWithDefaultProps();

    const dateInput = screen.getByLabelText("Choose Date:");

    act(() => {
      fireEvent.focus(dateInput);
      fireEvent.change(dateInput, { target: { value: "2023-01-03" } });
      fireEvent.focusOut(dateInput);
    });

    waitFor(() => {
      const errorMessage = screen.getByTestId("date");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Date can not be in the past");
    });
  });
  it("shows an error message if the number of guests is less than 1 ", () => {
    renderFormWithDefaultProps();

    const guestsInput = screen.getByRole("spinbutton");

    act(() => {
      fireEvent.focus(guestsInput);
      fireEvent.change(guestsInput, { target: { value: -2 } });
      fireEvent.focusOut(guestsInput);
    });

    waitFor(() => {
      const errorMessage = screen.getByTestId("guests");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("Guests can't be less than 1");
    });
  });
  it("calls the submit handle", () => {
    renderFormWithDefaultProps();
    const submitButton = screen.getByTestId("submit");

    act(() => {
      fireEvent.click(submitButton);
    });
  });

  it("disables all inputs after submitting", async () => {
    renderFormWithDefaultProps();
    const submitInput = screen.getByTestId("submit");
    const [dateInput, timeInput, guestInput, occasionInput] = getAllInputs();

    act(() => {
      fireEvent.click(submitInput);
    });

    waitFor(() => expect(dateInput).toBeDisabled());
    waitFor(() => expect(timeInput).toBeDisabled());
    waitFor(() => expect(guestInput).toBeDisabled());
    waitFor(() => expect(occasionInput).toBeDisabled);
  });
});

function renderFormWithDefaultProps() {
  render(<BookingForm {...defaultFormProps} />);
}
function renderFormWithCustomProps(props) {
  render(<BookingForm {...props} />);
}

function getAllInputs() {
  const dateInput = screen.getByLabelText("Choose Date:");
  const timeInput = screen.getByLabelText("Choose Time:");
  const guestInput = screen.getByRole("spinbutton");
  const occasionInput = screen.getByLabelText("Occasion:");

  return [dateInput, timeInput, guestInput, occasionInput];
}
