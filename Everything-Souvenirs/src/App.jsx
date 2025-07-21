import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "./index.css";

function App() {

  return (
    <>
         <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-pink-100">
              <ToastContainer position="top-right" autoClose={3000} />
              <RouterProvider router={router} />
         </div>
    </>
  )
}

export default App
