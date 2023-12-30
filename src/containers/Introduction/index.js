import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, Chip, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

import "./style.css";
function Introduction({ isMobileView }) {
  return (
    <Box>
      <Grid>
        <Typography
          variant={`${isMobileView ? "h4" : "h2"}`}
          marginBottom="15px"
        >
          <div className="shadow">HI THERE!</div>{" "}
        </Typography>
        <Typography
          variant={`${isMobileView ? "h3" : "h1"}`}
          marginBottom="15px"
        >
          <div className="shadow">I'M VRUSHABH</div>
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
          variant="h6"
          marginBottom="15px"
          style={{
            fontFamily: `font-family: 'Poppins', sans-serif`,
          }}
        >
          I am a professional <b>Web Developer</b> with over <b>6 year's</b> of
          experience in <b>Web Development</b>. I have strong creative and
          analytical skills, paying great attention to detail. As a team player,
          I thrive in collaborative environments. My expertise lies in{" "}
          <b>JavaScript</b>,
          <b> ReactJs, NodeJs, NextJS, HTML, CSS, and Bootstrap</b>.
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
