import React from "react";
import Box from "@mui/material/Box";
import backgroundImage from "../../Assets/Images/cropped-bg.png";

import "./style.css";

const Profile = () => {
  return (
    <Box component="div" className="container">
      <img
        style={{
          maxWidth: "100%",
          maxHeight: "100%", // Ensure the image doesn't exceed the container height
          width: "auto",
          height: "auto",
          objectFit: "contain",
          filter: "drop-shadow(0px 0px 10px rgba(0, 0,0,0.5))",
        }}
        src={backgroundImage}
        alt="back ground image"
      />
    </Box>
  );
};

export default Profile;
