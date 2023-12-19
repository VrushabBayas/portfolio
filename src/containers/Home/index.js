import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Introduction from "../Introduction/index";
import Profile from "../Profile";

import NavigationBar from "../Navigation";

import "./style.css";
const Home = () => {
  return (
    <Grid container className="container">
      <Grid
        xs={6}
        sx={{
          padding: "13rem 3rem",
        }}
      >
        <Introduction />
      </Grid>
      <Grid
        xs={5}
        sx={{
          backgroundColor: "#f0f0ed",
        }}
      >
        <Profile />
      </Grid>
      <Grid
        xs={1}
        sx={{
          padding: "13rem 3rem",
          backgroundColor: "#f0f0ed",
        }}
      >
        <NavigationBar />
      </Grid>
    </Grid>
  );
};

export default Home;
