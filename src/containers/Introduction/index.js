import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, Chip, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

import "./style.css";
function Introduction() {
  return (
    <Box>
      <Grid>
        <Typography variant="h2" marginBottom="15px">
          HI THERE!{" "}
        </Typography>
        <Typography variant="h1" marginBottom="15px">
          <b>I'M</b> <span style={{ fontFamily: "sans-serif" }}>VRUSHABH</span>
        </Typography>
        <Typography variant="h4" marginBottom="15px">
          <Card
            sx={{
              backgroundColor: "orange",
              width: "fit-content",
            }}
          >
            <b
              style={{
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Web Developer
            </b>
          </Card>
        </Typography>
        <Typography
          variant="body1"
          marginBottom="15px"
          style={{
            fontFamily: `font-family: 'Poppins', sans-serif`,
          }}
        >
          I am a professional Web Developer with over 6 years of experience in
          web development. I have strong creative and analytical skills, paying
          great attention to detail. As a team player, I thrive in collaborative
          environments. My expertise lies in JavaScript, ReactJs, HTML, CSS, and
          Bootstrap.
        </Typography>
        <Chip
          size="large"
          className="zoom-effect"
          label={
            <NavLink to="/about" className="about-me-link">
              <Typography variant="h6" fontWeight={600}>
                MORE ABOUT ME
              </Typography>
            </NavLink>
          }
          style={{
            backgroundColor: "orange",
            color: "white",
          }}
        />
      </Grid>
    </Box>
  );
}

export default Introduction;