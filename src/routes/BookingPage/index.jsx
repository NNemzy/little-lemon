import React, { useReducer, useState, useEffect } from "react";
import BookingForm from "../../components/BookingForm";
import { fetchAPI, submitAPI } from "./../../util/bookingApi/api";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      date: currentDate,
      time: availableTimes,
      guests: 1,
      occasion: "Birthday",
    },
    validationSchema: Yup.object({
      date: Yup.date().required(),
      times: Yup.string().required("Please choose a time"),
      guest: Yup.number().required().min("1", "Minimum number is 1"),
      occasion: Yup.string().required(),
    }),
    onSubmit: handleSubmit,
  });

  function updateTimes(data) {
    dispatch({ type: "DATE_CHANGE", payload: data });
    return;
  }

  function handleSubmit(event) {
    console.log("confirmed booking");
    event.preventDefault();
    setDisableForm(!disableForm);
  }

  return (
    <>
      <h1>Booking Form</h1>
      <BookingForm
        availableTimes={availableTimes}
        disableForm={disableForm}
        formik={formik}
      />
    </>
  );
}

export default BookingPage;
