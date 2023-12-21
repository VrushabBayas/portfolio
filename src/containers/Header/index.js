import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";

import "./style.css";
function Header({ title, isMobileView }) {
  return (
    <Grid className="header">
      <Typography
        variant={`${isMobileView ? "h3" : "h1"}`}
        fontWeight="bold"
        sx={{
          wordSpacing: 25,
          letterSpacing: 10,
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
