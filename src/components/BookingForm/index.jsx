import React, { useState } from "react";
import "./bookingForm-styles.module.css";

function BookingForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastNName: "",
    email: "",
    password: "",
    request: "",
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

  return (
    <form onSubmit={handleSubmit} className="bookingForm">
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" onChange={handleInputChange("firstName")} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" onChange={handleInputChange("lastName")} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" onChange={handleInputChange("email")} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" onChange={handleInputChange("password")} />
      </div>
      <div>
        <label htmlFor="request">Special Request:</label>
        <textarea id="request" onChange={handleInputChange("request")} />
      </div>
      <button className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default BookingForm;
