import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";

import "./style.css";
function Header({ title, isMobileView }) {
  return (
    <Grid className="header ">
      <Typography
        variant={`${isMobileView ? "h3" : "h1"}`}
        sx={{
          wordSpacing: 25,
          letterSpacing: 10,
        }}
      >
        <div className="shadow"> {title}</div>
      </Typography>
    </Grid>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
