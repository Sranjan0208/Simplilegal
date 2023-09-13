import "./App.css";
import FileUpload from "./components/PDF/FileUpload";
import PDFViewer from "./components/PDF/PDFViewer";
import Dashboard from "./pages/Dashboard";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/upload",
      element: <FileUpload />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/view/:id",
      element: <PDFViewer />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
