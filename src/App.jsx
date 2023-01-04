import { Outlet } from "react-router-dom";

// Components
import Nav from "./components/Nav/index";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
