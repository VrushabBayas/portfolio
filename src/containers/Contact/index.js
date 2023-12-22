import React from "react";
import Layout from "../Layout";
import Email from "../../Assets/Images/email.png";
import Call from "../../Assets/Images/call.png";

import { Grid, Typography } from "@mui/material";

import "./style.css";
const isMobileDevice = () => {
  return window.innerWidth <= 767;
};
function Contact(props) {
  const isMobileview = isMobileDevice();
  return (
    <Layout title="CONTACT">
      <Grid
        container
        spacing={1}
        sx={{
          margin: "auto",
          padding: "1rem",
        }}
      >
        <Grid container>
          <Typography variant={`${isMobileview ? "h4" : "h2"}`}>
            Feel <b>free</b> to contact me!
          </Typography>
        </Grid>
        <Grid container>
          <Typography variant="h6">
            Unlock endless possibilities by reaching out – let's collaborate and
            create something extraordinary
          </Typography>
        </Grid>
        <Grid container>
          <Grid
            xs={12}
            ls={6}
            sm={6}
            md={6}
            marginTop={20}
            justifyContent="space-around"
            alignItems="center"
            display="flex"
            p={1}
          >
            <img
              style={{
                width: isMobileview ? "4rem" : "8rem",
                height: isMobileview ? "4rem" : "8rem",
              }}
              className="contact-icon"
              src={Email}
              alt="email"
            />
            <Typography variant="h6" fontWeight={300}>
              bayasvrushabh@gmail.com
            </Typography>
          </Grid>
          <Grid
            xs={12}
            ls={6}
            sm={6}
            md={6}
            p={1}
            marginTop={20}
            justifyContent="space-around"
            alignItems="center"
            display="flex"
          >
            <img
              style={{
                width: isMobileview ? "4rem" : "8rem",
                height: isMobileview ? "4rem" : "8rem",
              }}
              className="contact-icon"
              src={Call}
              alt="email"
            />
            <Typography variant="h6" fontWeight={300}>
              +91 9607335159
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            // height: 300,
            margin: "auto",
            padding: "6rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            className="good-by-msg"
            variant={`${isMobileview ? "h5" : "h2"}`}
          >
            THANKS FOR PATIENCE!
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Contact;
