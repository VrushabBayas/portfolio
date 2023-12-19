import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Resume from "./containers/Resume";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "about",
    element: <About />,
    exact: true,
  },
  {
    path: "resume",
    element: <Resume />,
    exact: true,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
