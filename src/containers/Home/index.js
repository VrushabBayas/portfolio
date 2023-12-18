import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Introduction from "../Introduction";
import Profile from "../Profile";

import NavigationBar from "../Navigation";

import "./style.css";
const Home = ({ children }) => {
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
