import React, { useState } from "react";
import styles from "./bookingForm-styles.module.css";
import { Form, Formik } from "formik";
import MyFormField from "./../../components/common/myformfield";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function BookingForm(props) {
  const { availableTimes, formikValues, disableForm, updateTimes, submitting } =
    props;
  const { initialValues, validationSchema, handleSubmit } = formikValues;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      className={styles.form}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form>
        <MyFormField
          disabled={disableForm}
          type="text"
          name="name"
          label="Name:"
        />
        <MyFormField
          disabled={disableForm}
          type="email"
          name="email"
          label="Email:"
        />
        <MyFormField
          disabled={disableForm}
          type="date"
          name="date"
          label="Choose Date:"
          onChange={updateTimes}
        />
        <MyFormField
          disabled={disableForm}
          as="select"
          label="Choose Time:"
          name="time"
          type="text"
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </MyFormField>
        <MyFormField
          disabled={disableForm}
          type="number"
          label="Number of guests:"
          name="guests"
        />
        <MyFormField
          disabled={disableForm}
          as="select"
          label="Occasion:"
          name="occasion"
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </MyFormField>
        <button disabled={disableForm} className="btn-submit" type="submit">
          {submitting ? (
            <FontAwesomeIcon icon={faCircleNotch} size="1x" spin={true} />
          ) : (
            <p>Submit</p>
          )}
        </button>
      </Form>
    </Formik>
  );
}

export default BookingForm;
