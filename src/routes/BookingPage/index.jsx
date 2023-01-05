import React, { useReducer, useState } from "react";
import BookingForm from "../../components/BookingForm";

const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
let types;

function reducer(state, action) {
  switch (action.type) {
    case "DATE_CHANGE":
      return getRandomArbitraryTimes(13, 23);
      break;
  }
}

function initializeTimes() {
  return times;
}

function getRandomArbitraryTimes(min, max) {
  let times = new Set();

  min = Math.ceil(min);
  max = Math.floor(max);

  while (times.size < 5) {
    times.add(`${Math.floor(Math.random() * (max - min + 1)) + min}:00`);
  }

  return Array.from(times).sort(
    (a, b) => Number(a.split(":")[0]) - Number(b.split(":")[0])
  );
}

function BookingPage() {
  const currentDate = new Date()
    .toLocaleDateString()
    .split("/")
    .reverse()
    .join("-");

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  const [formValues, setFormValues] = useState({
    date: currentDate,
    time: availableTimes[0],
    guests: "1",
    occasion: "Birthday",
  });

  const handleInputChange = (name) => (event) => {
    if (name === "date") {
      console.log("here");
      updateTimes();
    }
    const inputValue = event.target.value;
    setFormValues({
      ...formValues,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  function updateTimes() {
    dispatch({ type: "DATE_CHANGE" });
    return;
  }

  getRandomArbitraryTimes(13, 23);
  console.log("available ", availableTimes);

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
