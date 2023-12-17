import React from "react";
import PropTypes from "prop-types";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ArticleIcon from "@mui/icons-material/Article";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Box } from "@mui/material";
import "./style.css";

function NavigationBar(props) {
  return (
    <Box className="container">
      <ul className="list-group">
        <li className="list-item">
          <HomeIcon />
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <Person2Icon />
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <WorkOutlineIcon />
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <ArticleIcon />
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <MenuBookIcon />
        </li>
        <div className="verticle-bar" />
        <li className="list-item">
          <ContactMailIcon />
        </li>
      </ul>
    </Box>
  );
}

NavigationBar.propTypes = {};

export default NavigationBar;
