import React, { useState } from "react";
import styles from "./bookingForm-styles.module.css";

function AvailableTimes(props) {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <>
      {availableTimes.map((time) => (
        <option key={time}>{time}</option>
      ))}
    </>
  );
}

function BookingForm() {
  const currentDate = new Date()
    .toLocaleDateString()
    .split("/")
    .reverse()
    .join("-");

  const [formValues, setFormValues] = useState({
    date: currentDate,
    time: "",
    guests: "1",
    occasion: "Birthday",
  });

  const handleInputChange = (name) => (event) => {
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

  const { date, time, guests, occasion } = formValues;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="res-date">Choose Date:</label>
        <input
          type="date"
          id="res-date"
          min="2023-01-06"
          max="2023-02-06"
          required
          value={date}
          onChange={handleInputChange("date")}
        />
      </div>
      <div>
        <label htmlFor="res-time">Choose Time:</label>
        <select id="res-time" value={time} onChange={handleInputChange("time")}>
          <AvailableTimes />
        </select>
      </div>
      <div>
        <label htmlFor="guest">Number of Guests: </label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleInputChange("guests")}
        />
      </div>
      <label htmlFor="occasion">Occasion: </label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleInputChange("occasion")}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <div>
        <input type="submit" value="Make your reservation" />
      </div>
    </form>
  );
}

export default BookingForm;