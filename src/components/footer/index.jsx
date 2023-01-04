import React from "react";
import styles from "./footer-styles.module.css";
import img from "./../../assets/images/d1.jpeg";

function Footer() {
  const { footer, container, imageContainer, navigation, contacts, socials } =
    styles;
  const navigationLinks = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Log In",
  ];
  const contactLinks = ["Address", "Phone Number", "Email"];
  const socialLinks = ["Address", "Phone Number", "Email"];

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={imageContainer}>
          <img src={img} />
        </div>
        <ul className={navigation}>
          <li>
            <h3>Navigation Links</h3>
          </li>
          {navigationLinks.map((item) => (
            <li key={item.toLowerCase()}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <ul className={contacts}>
          <li>
            <h3>Contact Links</h3>
          </li>
          {contactLinks.map((item) => (
            <li key={item.toLowerCase()}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <ul className={socials}>
          <li>
            <h3>Social Links</h3>
          </li>
          {socialLinks.map((item) => (
            <li key={item.toLowerCase()}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
