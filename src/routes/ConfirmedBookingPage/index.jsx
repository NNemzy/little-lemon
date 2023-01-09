import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./confirmed-styles.module.css";

function ConfirmedBookingPage() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon size="7x" icon={faCircleCheck} />
      <h1 className={styles.heading}>You have successfully booked a table!</h1>
    </div>
  );
}

export default ConfirmedBookingPage;
