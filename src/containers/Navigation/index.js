import React from "react";
import PropTypes from "prop-types";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ArticleIcon from "@mui/icons-material/Article";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./style.css";

function NavigationBar({ withLabel = false }) {
  return (
    <Box className="container">
      <ul className="list-group">
        <li className="list-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {!withLabel && <HomeIcon className="zoom-effect" />}
            {withLabel && <span>Home</span>}
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {!withLabel && <Person2Icon className="zoom-effect" />}
            {withLabel && <span>About</span>}
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {!withLabel && <WorkOutlineIcon />}

            {withLabel && <span>Work</span>}
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {!withLabel && <ArticleIcon className="zoom-effect" />}

            {withLabel && <span>Resume</span>}
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {withLabel && <span>Blogs</span>}
          </NavLink>
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {!withLabel && <ContactMailIcon className="zoom-effect" />}

            {withLabel && <span>Contact</span>}
          </NavLink>
        </li>
      </ul>
    </Box>
  );
}

NavigationBar.propTypes = {};

export default NavigationBar;
