import React from "react";
import Layout from "../Layout";

import { Chip, Grid, Typography } from "@mui/material";

function Projects(props) {
  return (
    <Layout title="PROJECTS">
      <Grid
        container
        spacing={1}
        sx={{
          margin: "auto",
          padding: "0.5rem",
        }}
      >
        <Grid
          xs={12}
          sx={{
            margin: "auto",
            padding: "1rem",
          }}
        >
          <Grid container marginBottom={1}>
            <Chip
              sx={{
                backgroundColor: "orange",
              }}
              label={
                <Typography variant="h5" fontWeight="bold" color="white">
                  MINT
                </Typography>
              }
            />
          </Grid>
          <Typography variant="p" fontSize={18}>
            Proident eu aliqua laboris sint reprehenderit irure fugiat est sunt
            velit dolore enim elit duis. Ad occaecat qui cillum fugiat
            excepteur.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            margin: "auto",
            padding: "0.5rem",
          }}
        >
          <Grid container marginBottom={1}>
            <Chip
              sx={{
                backgroundColor: "orange",
              }}
              label={
                <Typography variant="h5" fontWeight="bold" color="white">
                  SAT(Security Assessment Training)
                </Typography>
              }
            />
          </Grid>
          <Typography variant="p" fontSize={18}>
            SAT is a training platform that gives training to users against
            different phishing attacks.I am carrying out the responsibility of
            its migration that is converting the existing code base to its
            latest version from React 15.x to 16.x and the re-skinning that is
            giving new look and feel to it.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            margin: "auto",
            padding: "0.5rem",
          }}
        >
          <Grid container marginBottom={1}>
            <Chip
              sx={{
                backgroundColor: "orange",
              }}
              label={
                <Typography variant="h5" fontWeight="bold" color="white">
                  Circles.life
                </Typography>
              }
            />
          </Grid>
          <Typography variant="p" fontSize={18}>
            This is telecom company sells sim cards in various countries. I have
            built dashboard for it which includes showing data using various
            charts and tabular format.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            margin: "auto",
            padding: "0.5rem",
          }}
        >
          <Grid container marginBottom={1}>
            <Chip
              sx={{
                backgroundColor: "orange",
              }}
              label={
                <Typography variant="h5" fontWeight="bold" color="white">
                  Loookit
                </Typography>
              }
            />
          </Grid>
          <Typography variant="p" fontSize={18}>
            LoookIt is an immersive communications service that allows
            participants to share a whiteboard in the cloud in real-time.LoookIt
            can be used by Consumers, Educators, and Customer Support staff to
            provide rich interactions in a simple and easy-to-use manner
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            margin: "auto",
            padding: "0.5rem",
          }}
        >
          <Grid container marginBottom={1}>
            <Chip
              sx={{
                backgroundColor: "orange",
              }}
              label={
                <Typography variant="h5" fontWeight="bold" color="white">
                  Kristal.IO
                </Typography>
              }
            />
          </Grid>
          <Typography variant="p" fontSize={18}>
            Kristal’s are digital portfolios of assets built using unique
            investment strategies. Renowned traders across the world have come
            together to create each Kristal with their in-depth financial
            intuition and decades of investment experience.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sx={{
            margin: "auto",
            padding: "0.5rem",
          }}
        >
          <Grid container marginBottom={1}>
            <Chip
              sx={{
                backgroundColor: "orange",
              }}
              label={
                <Typography variant="h5" fontWeight="bold" color="white">
                  BidWheelz
                </Typography>
              }
            />
          </Grid>
          <Typography variant="p" fontSize={18}>
            This is the platform where users can sell and buy old cars. This
            platform provides the feature of live bidding where users can play
            bid for the cars. I was responsible for building new features and
            fixing the bugs
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Projects;
