import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";

const Main = () => {
  const { dark } = useContext(AuthContext);
  return (
    <div>
      <Header></Header>
      <div className="mt-4 pb-2">
        <Outlet
          className={dark ? "bg-dark text-white" : "bg-transparent text-dark"}
        ></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
