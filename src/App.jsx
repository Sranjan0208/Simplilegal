import "./App.css";

import Landing from "./pages/Landing";
import ErrorPage from "./pages/error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
