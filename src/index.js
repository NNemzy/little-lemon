import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Route Components
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import MenuPage from "./routes/MenuPage";
import OrderPage from "./routes/OrderPage";
import BookingPage from "./routes/BookingPage";
import ConfirmedBookingPage from "./routes/ConfirmedBookingPage";
import LoginPage from "./routes/LogInPage/index.jsx";

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
        path: "/",
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
        path: "/reservations",
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
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
