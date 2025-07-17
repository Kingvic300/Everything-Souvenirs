import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "./index.css";

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
