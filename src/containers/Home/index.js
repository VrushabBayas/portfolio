import * as React from "react";

import Grid from "@mui/material/Unstable_Grid2";
import Introduction from "../Introduction/index";
import Profile from "../Profile";

import NavigationBar from "../Navigation";

// import "./style.css";
const Home = () => {
  return (
    <Grid container className="container" xs={12}>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        sx={{
          margin: "auto",
          padding: "0rem 3rem",
        }}
      >
        <Introduction />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={5} sx={{}}>
        <Profile />
      </Grid>
      <Grid
        item
        xs={12}
        sm={1}
        md={1}
        lg={1}
        sx={{
          margin: "auto",
          paddingLeft: "1rem",
        }}
      >
        <NavigationBar />
      </Grid>
    </Grid>
  );
};

export default Home;
