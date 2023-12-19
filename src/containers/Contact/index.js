import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";

import { Chip, Grid, Typography } from "@mui/material";

import "./style.css";
import Email from "../../Assets/Images/email.png";
import Call from "../../Assets/Images/call.png";
import { Box } from "@mui/system";
function Contact(props) {
  return (
    <Layout title="CONTACT">
      <Grid
        container
        spacing={1}
        sx={{
          margin: "auto",
          padding: "0.5rem",
        }}
      >
        <Grid container>
          <Typography variant="h2">
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
            xs={6}
            marginTop={5}
            justifyContent="space-between"
            alignItems="center"
            display="flex"
            p={1}
          >
            <img
              style={{
                width: "15rem",
                height: "15rem",
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
            xs={5}
            p={1}
            marginTop={5}
            justifyContent="space-between"
            alignItems="center"
            display="flex"
          >
            <img
              style={{
                width: "15rem",
                height: "15rem",
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
            margin: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2">THANKS FOR PATIENCE!</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

Contact.propTypes = {};

export default Contact;
