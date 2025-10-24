import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <ToastContainer position="top-right" autoClose={3000} />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  )
}

export default App
