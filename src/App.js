import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";

import "./App.css";
import Contact from "./containers/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/about",
    element: <About />,
    exact: true,
  },
  {
    path: "/resume",
    element: <Resume />,
    exact: true,
  },
  {
    path: "/projects",
    element: <Projects />,
    exact: true,
  },
  {
    path: "/contact",
    element: <Contact />,
    exact: true,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
