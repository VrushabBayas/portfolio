import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./containers/Home";
import About from "./containers/About";
import Resume from "./containers/Resume";
import Projects from "./containers/Projects";

import "./App.css";
import Contact from "./containers/Contact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]
  // { basename: "/portfolio" }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
