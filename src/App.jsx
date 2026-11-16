import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";

export const App = () => {
  return (
    <>
      <h1> App </h1>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
};
