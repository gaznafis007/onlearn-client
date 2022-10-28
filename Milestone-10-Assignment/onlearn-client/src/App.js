import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { dark } = useContext(AuthContext);
  return (
    <div className={dark ? "bg-dark text-white" : "bg-transparent text-dark"}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
