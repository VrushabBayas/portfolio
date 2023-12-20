import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../SideBar";
import NavigationBar from "../Navigation";
import Header from "../Header";

function Layout({ children, title }) {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#e9f5f9",
        height: "100vh",
      }}
    >
      <Grid xs={2}>
        <SideBar />
      </Grid>
      <Grid
        xs={9}
        sx={{
          padding: "2rem 4rem 1rem 4rem",
        }}
      >
        <Header title={title} />
        {children}
      </Grid>
      <Grid
        xs={1}
        sx={{
          margin: "auto",
          paddingLeft: "3rem",
        }}
      >
        <NavigationBar />
      </Grid>
    </Grid>
  );
}

export default Layout;
