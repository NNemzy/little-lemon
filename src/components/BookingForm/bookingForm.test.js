import "@testing-library/jest-dom";
import { screen, render, waitFor, fireEvent } from "@testing-library/react";
import * as React from "react";
import userEvent from "@testing-library/user-event";
import BookingForm from ".";

// Mock Functions
const submitHandlerMock = jest.fn((e) => {
  e.preventDefault();
  console.log("submitted");
});
const changeHandlerMock = jest.fn(() => () => {
  console.log("change");
});

// Mock Data
const defaultFormProps = {
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  formValues: {
    date: "2023-01-06",
    time: "17:00",
    guests: "1",
    occasion: "Birthday",
  },
  disableForm: false,
  handleInputChange: () => changeHandlerMock,
  handleSubmit: submitHandlerMock,
};

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
    const { date, time, guests, occasion } = defaultFormProps.formValues;

    expect(dateInput.value).toBe(date);
    expect(timeInput.value).toBe(time);
    expect(guestInput.value).toBe(guests);
    expect(occasionInput.value).toBe(occasion);
  });

  it("calls onChange handle once", () => {
    renderFormWithDefaultProps();

    const dateInput = screen.getByLabelText("Choose Date:");

    fireEvent.change(dateInput, { target: { value: "2023-01-12" } });
    expect(changeHandlerMock.mock.calls).toHaveLength(1);
  });

  it("changes inputs values correctly ", () => {
    renderFormWithDefaultProps();
    const defaultValue = defaultFormProps.formValues.occasion;
    const newValue = "Anniversary";
    const occasionInput = screen.getByLabelText("Occasion:");

    expect(occasionInput.value).toBe(defaultValue);
    fireEvent.select(occasionInput, { target: { value: newValue } });
    expect(occasionInput.value).toBe(newValue);
  });

  it("calls the submit handle", () => {
    renderFormWithDefaultProps();
    const submitInput = screen.getByRole("button");

    fireEvent.submit(submitInput);
    expect(submitHandlerMock.mock.calls).toHaveLength(1);
  });

  it("disables all inputs after submitting", async () => {
    renderFormWithDefaultProps();
    const submitInput = screen.getByRole("button");
    const [dateInput, timeInput, guestInput, occasionInput] = getAllInputs();

    fireEvent.submit(submitInput);
    expect(submitHandlerMock.mock.calls).toHaveLength(1);

    waitFor(() => expect(dateInput).toBeDisabled());
    waitFor(() => expect(timeInput).toBeDisabled());
    waitFor(() => expect(guestInput).toBeDisabled());
    waitFor(() => expect(occasionInput).toBeDisabled);
    waitFor(() => expect(submitInput).toBeDisabled());
  });
  // it("resets form", () => {});
  // it("gives feedback if value is invalid", () => {});
  // it("submits the form with correct values", () => {});
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
