import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../SideBar";
import NavigationBar from "../Navigation";
import Header from "../Header";

const isMobileDevice = () => {
  return window.innerWidth <= 767;
};
const isResume = () => {
  return window.location.href.includes("resume");
};
function Layout({ children, title }) {
  const isMobileView = isMobileDevice();
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#e9f5f9",
        margin: "auto",
      }}
    >
      {!isMobileView && (
        <Grid item xs={12} sm={6} md={6} lg={2}>
          <SideBar />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        lg={!isResume ? "9" : "10"}
        sx={
          !isMobileView && {
            padding: "2rem 4rem 1rem 4rem",
          }
        }
      >
        <Header title={title} isMobileView={isMobileView} />
        {children}
      </Grid>
      {
        <Grid
          item
          xs={12}
          sm={12}
          md={1}
          lg={1}
          sx={{
            margin: "auto",
          }}
        >
          <NavigationBar />
        </Grid>
      }
    </Grid>
  );
}

export default Layout;
