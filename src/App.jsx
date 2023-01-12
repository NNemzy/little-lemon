import { Outlet } from "react-router-dom";

// Components
import Nav from "./components/nav/index.jsx";
import Footer from "./components/footer/index.jsx";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
