import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";

import { Divider, Grid, Typography } from "@mui/material";

function Resume(props) {
  return (
    <Layout title="RESUME">
      <Grid
        sx={{
          margin: "auto",
          padding: "1rem",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            height: 200,
          }}
          spacing={1}
        >
          <Grid container>
            <Typography variant="h3">Education</Typography>
          </Grid>
          <Grid xs={4}>One</Grid>
          <Grid xs={4}>One</Grid>
          <Grid xs={4}>One</Grid>
        </Grid>
        <Divider
          sx={{
            marginBottom: "0.5rem",
          }}
        />
        <Grid
          container
          sx={{
            display: "flex",
            height: 200,
          }}
          spacing={1}
        >
          <Grid container>
            <Typography variant="h3">Projects</Typography>
          </Grid>
          <Grid xs={4}>One</Grid>
          <Grid xs={4}>One</Grid>
          <Grid xs={4}>One</Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            height: 200,
          }}
          spacing={1}
        >
          <Grid container>
            <Typography variant="h3">Top Skills</Typography>
          </Grid>
          <Grid xs={4}>One</Grid>
          <Grid xs={4}>One</Grid>
          <Grid xs={4}>One</Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

Resume.propTypes = {};

export default Resume;
