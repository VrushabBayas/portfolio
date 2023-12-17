import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/Home";
import Layout from "./containers/Layout";

import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <Layout />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
