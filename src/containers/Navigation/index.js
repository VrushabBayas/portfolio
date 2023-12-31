import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import ArticleIcon from "@mui/icons-material/Article";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AppsIcon from "@mui/icons-material/Apps";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

import "./style.css";

function NavigationBar() {
  return (
    <Grid className="container">
      <ul className="list-group">
        <li className="list-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
            }
          >
            <HomeIcon className="zoom-effect" />
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
            }
          >
            <Person2Icon className="zoom-effect" />
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/resume"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
            }
          >
            <ArticleIcon className="zoom-effect" />
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
            }
          >
            <AppsIcon className="zoom-effect" />
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active nav-link" : "nav-link"
            }
          >
            <ContactMailIcon className="zoom-effect" />
          </NavLink>
        </li>
      </ul>
    </Grid>
  );
}

export default NavigationBar;
