import React from "react";
import styles from "./nav-styles.module.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const navigationLinks = ["Home", "About", "Menu", "Booking", "Order"];

  const { navigation, logo, list } = styles;

  return (
    <nav className={navigation}>
      <a className={logo}>Little Lemon</a>
      <ul className={list}>
        {navigationLinks.map((link) => (
          <li key={link.toLowerCase()}>
            <NavLink className={styles.link} to={link.toLocaleLowerCase()}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
