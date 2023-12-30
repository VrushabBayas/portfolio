import React from "react";
import Layout from "../Layout";
import { Grid, Typography } from "@mui/material";

function Content(props) {
  return (
    <Layout title="CONTENT">
      <Grid
        container
        sx={{
          margin: "auto",
        }}
      >
        <Typography variant="h3">
          <b>Youtube</b>
        </Typography>
      </Grid>
    </Layout>
  );
}

export default Content;
