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
        margin: "auto",
        padding: "1.5rem 1rem",
      }}
    >
      <Grid item xs={12} sm={6} md={6} lg={2}>
        <SideBar />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={9}
        lg={9}
        sx={{
          padding: "2rem 4rem 1rem 4rem",
        }}
      >
        <Header title={title} />
        {children}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={1}
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
