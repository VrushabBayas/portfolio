import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

import "./style.css";
function Header({ title }) {
  return (
    <Box className="header">
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{
          wordSpacing: 25,
          letterSpacing: 10,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
