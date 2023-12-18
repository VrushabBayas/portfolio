import React from "react";

import { Grid } from "@mui/material";
import SideBar from "../SideBar";
import NavigationBar from "../Navigation";

function About({ children }) {
  return (
    <Grid container>
      <Grid xs={2}>
        <SideBar />
      </Grid>
      <Grid
        xs={9}
        sx={{
          backgroundColor: "#e9f5f9",
        }}
      >
        {children}
      </Grid>
      <Grid
        xs={1}
        sx={{
          padding: "13rem 3rem",
          backgroundColor: "#e9f5f9",
        }}
      >
        <NavigationBar />
      </Grid>
    </Grid>
  );
}

About.propTypes = {};

export default About;
