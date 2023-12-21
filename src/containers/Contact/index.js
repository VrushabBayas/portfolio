import React from "react";
import Layout from "../Layout";
import Email from "../../Assets/Images/email.png";
import Call from "../../Assets/Images/call.png";

import { Grid, Typography } from "@mui/material";

import "./style.css";

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
                width: "8rem",
                height: "8rem",
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
                width: "8rem",
                height: "8rem",
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
            height: 200,
            margin: "auto",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography className="good-by-msg" variant="h2">
            THANKS FOR PATIENCE!
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Contact;
