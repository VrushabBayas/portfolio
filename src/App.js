import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";

import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
