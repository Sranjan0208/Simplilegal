import "./App.css";
import ImgUpload from "./components/Img/ImgUpload";
import ImgViewer from "./components/Img/ImgViewer";
import FileUpload from "./components/PDF/FileUpload";
import PDFViewer from "./components/PDF/PDFViewer";
import Dashboard from "./pages/Dashboard";

import Landing from "./pages/Landing";
import Lawyer from "./pages/Lawyer";
import LegalDoc from "./pages/LegalDoc";
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
      path: "/imgupload",
      element: <ImgUpload />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/view/:id",
      element: <PDFViewer />,
    },
    {
      path: "/view/:id",
      element: <ImgViewer />,
    },
    {
      path: "/legal-doc",
      element: <LegalDoc />,
    },
    {
      path: "/lawyer",
      element: <Lawyer />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
