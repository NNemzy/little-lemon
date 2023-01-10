// import Nav from "./components/nav/nav";
import styles from "./header-styles.module.css";
import { NavLink } from "react-router-dom";
import img from "./d3.jpeg";

function Header() {
  const { header, container, text, imageContainer, image, book } = styles;

  return (
    <header className={header}>
      <div className={container}>
        <div className={text}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button>
            <NavLink to="/booking" className={book}>
              Reserve a Table
            </NavLink>
          </button>
        </div>
        <div className={imageContainer}>
          <img className={image} src={img} />
        </div>
      </div>
    </header>
  );
}

export default Header;
