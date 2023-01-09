import React, { useReducer, useState, useEffect } from "react";
import BookingForm from "../../components/BookingForm";
import { fetchAPI, submitAPI } from "./../../util/bookingApi/api";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { reducer, updateTimes } from "./../../util/reducers/bookingReducer";

import styles from "./bookingpage.module.css";

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

  const [submitting, setSubmitting] = useState(false);
  const [disableForm, setDisableForm] = useState(false);
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const initialValues = {
    name: "",
    email: "",
    date: currentDate,
    time: availableTimes[0],
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

  function updateTimes(e, callback) {
    const data = e.target.value;
    dispatch({ type: "DATE_CHANGE", payload: data });
    callback(e);
    return;
  }

  function handleSubmit(values) {
    setSubmitting(!submitting);
    console.log("booking");
    console.log("values");
    setDisableForm(!disableForm);
    setTimeout(() => {
      navigate("/booking-confirmed");
    }, 2000);
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Booking Form</h1>
        <BookingForm
          availableTimes={availableTimes}
          formikValues={{
            initialValues,
            validationSchema,
            handleSubmit,
          }}
          submitting={submitting}
          updateTimes={updateTimes}
          disableForm={disableForm}
        />
      </div>
    </>
  );
}

export default BookingPage;
