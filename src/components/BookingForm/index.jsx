import React, { useState } from "react";
import styles from "./bookingForm-styles.module.css";

function BookingForm(props) {
  const { availableTimes, formValues, handleInputChange, handleSubmit } = props;

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
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
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
