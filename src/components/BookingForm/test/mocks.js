import "@testing-library/jest-dom";
import * as Yup from "yup";

const submitHandlerMock = jest.fn((e) => {
  e.preventDefault();
  console.log("submitted");
});

const updateTimesMock = jest.fn(() => {
  console.log("updateTime");
});

const today = new Date();
today.setHours(0, 0, 0, 0);

const currentDate = new Date()
  .toLocaleDateString()
  .split("/")
  .reverse()
  .join("-");

const initValues = {
  name: "",
  email: "",
  date: currentDate,
  time: "17:00",
  guests: "1",
  occasion: "birthday",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(4, "Minimum 4 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  date: Yup.date().min(today, "Date can not be in the past"),
  times: Yup.string(),
  guests: Yup.number().min(1, "Guests can't be less than 1"),
  occasion: Yup.string(),
});

// Mocked Props
const defaultFormProps = {
  formikValues: {
    initialValues: initValues,
    validationSchema,
    handleSubmit: submitHandlerMock,
  },
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  submitting: false,
  disableForm: false,
  updateTimes: updateTimesMock,
};

export { submitHandlerMock, defaultFormProps };
