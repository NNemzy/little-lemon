import React, { useState } from "react";
import styles from "./bookingForm-styles.module.css";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function BookingForm(props) {
  const { availableTimes, formik, disableForm } = props;
  const { handleSubmit, getFieldProps, touched, errors } = formik;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="res-date">Choose Date:</label>
        <input
          disabled={disableForm}
          id="res-date"
          type="date"
          {...getFieldProps("date")}
        />
        {touched.date && errors.date ? <div>{errors.date}</div> : null}
      </div>
      <div>
        <label htmlFor="res-time">Choose Time:</label>
        <select disabled={disableForm} id="res-time" {...getFieldProps("time")}>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        {touched.time && errors.time ? <div>{errors.time}</div> : null}
      </div>
      <div>
        <label htmlFor="guest">Number of Guests: </label>
        <input
          id="guest"
          type="number"
          disabled={disableForm}
          placeholder="1"
          min="1"
          max="10"
          {...getFieldProps("guest")}
        />
        {touched.guest && errors.guest ? <div>{errors.guest}</div> : null}
      </div>
      <label htmlFor="occasion">Occasion: </label>
      <select
        id="occasion"
        disabled={disableForm}
        {...getFieldProps("occasion")}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {touched.occasion && errors.occasion ? (
        <div>{errors.occasion}</div>
      ) : null}
      <div>
        <input
          id="submit"
          style={disableForm ? { backgroundColor: "gray" } : null}
          disabled={disableForm}
          type="submit"
          value="Make your reservation"
        />
      </div>
    </form>
  );
}

export default BookingForm;
