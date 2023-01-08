import React, { useReducer, useState, useEffect } from "react";
import BookingForm from "../../components/BookingForm";
import { fetchAPI, submitAPI } from "./../../util/bookingApi/api";
import { useNavigate } from "react-router-dom";

import { reducer, updateTimes } from "./../../util/reducers/bookingReducer";

function initializeTimes() {
  return fetchAPI(new Date());
}

function BookingPage() {
  const navigate = useNavigate();
  const currentDate = new Date()
    .toLocaleDateString()
    .split("/")
    .reverse()
    .join("-");

  const [disableForm, setDisableForm] = useState(false);
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  const [formValues, setFormValues] = useState({
    date: currentDate,
    time: availableTimes,
    guests: "1",
    occasion: "Birthday",
  });

  function updateTimes(data) {
    dispatch({ type: "DATE_CHANGE", payload: data });
    return;
  }

  useEffect(() => {}, []);

  const handleInputChange = (name) => (event) => {
    let inputValue = event.target.value;
    if (name === "date") {
      updateTimes(inputValue);
    }
    setFormValues({
      ...formValues,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableForm(!disableForm);
    console.log("confirmed booking");
    // submitAPI() && navigate("/booking-confirmed");
  };

  return (
    <>
      <h1>Booking Form</h1>
      <BookingForm
        availableTimes={availableTimes}
        formValues={formValues}
        disableForm={disableForm}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default BookingPage;
