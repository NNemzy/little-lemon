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
        <div style={{ display: "flex" }}>
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
        </div>
        <div style={{ display: "flex" }}>
          <MyFormField
            disabled={disableForm}
            type="date"
            label="Choose Date:"
            name="date"
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
        </div>
        <div>
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
        </div>
        <button
          className={styles.formSubmit}
          type={submitting ? "button" : "submit"}
        >
          {submitting ? (
            <FontAwesomeIcon
              icon={faCircleNotch}
              size="1x"
              color="white"
              spin={true}
            />
          ) : (
            <p>Submit</p>
          )}
        </button>
      </Form>
    </Formik>
  );
}

export default BookingForm;
