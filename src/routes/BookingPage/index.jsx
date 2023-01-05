import React, { useReducer, useState, useEffect } from "react";
import BookingForm from "../../components/BookingForm";
import { fetchAPI, submitAPI } from "./../../util/bookingApi/api";
import { getRandomArbitraryTimes } from "./../../util/fun";
import { useNavigate } from "react-router-dom";

const initTimes = ["17:00", "18:00", "19:00"];

function reducer(state, action) {
  switch (action.type) {
    case "DATE_CHANGE":
      return fetchAPI(new Date(action.payload));
      break;
  }
}

function initializeTimes() {
  return initTimes;
}

function BookingPage() {
  const navigate = useNavigate();
  const currentDate = new Date()
    .toLocaleDateString()
    .split("/")
    .reverse()
    .join("-");

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  const [formValues, setFormValues] = useState({
    date: currentDate,
    time: availableTimes,
    guests: "1",
    occasion: "Birthday",
  });

  useEffect(() => {
    updateTimes(currentDate);
  }, []);

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
    console.log("confirmed booking");
    submitAPI() && navigate("/booking-confirmed");
  };

  function updateTimes(data) {
    dispatch({ type: "DATE_CHANGE", payload: data });
    return;
  }

  return (
    <BookingForm
      availableTimes={availableTimes}
      formValues={formValues}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default BookingPage;
