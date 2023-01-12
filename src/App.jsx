import { Outlet } from "react-router-dom";

// Components
import Nav from "./components/nav/index";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
