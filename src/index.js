import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Route Components
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import MenuPage from "./routes/MenuPage";
// import ReservationsPage from "./routes/ReservationsPage";
import OrderPage from "./routes/OrderPage";
import LoginPage from "./routes/LogInPage";
import BookingPage from "./routes/BookingPage";
import ConfirmedBookingPage from "./routes/ConfirmedBookingPage";
import Header from "./components/Header";
import About from "./components/About";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/booking",
        element: <BookingPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/booking-confirmed",
        element: <ConfirmedBookingPage />,
      },
    ],
  },
]);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
