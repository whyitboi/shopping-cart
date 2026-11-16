import { Navbar } from "./components/Navbar/Navbar";
import { Outlet } from "react-router";

export const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};
