import React from "react";
import styles from "./nav-styles.module.css";

function Nav() {
  const navigationLinks = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Log In",
  ];

  const { navigation, logo, list, link } = styles;

  return (
    <nav className={navigation}>
      <a className={logo}>Little Lemon</a>
      <ul className={list}>
        {navigationLinks.map((link) => (
          <li key={link.toLowerCase()}>
            <a className={styles.link} href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
