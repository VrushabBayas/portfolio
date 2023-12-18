import React from "react";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import SideBar from "../SideBar";
import NavigationBar from "../Navigation";
import Header from "../Header";
import Introduction from "../Introduction";

function About() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#e9f5f9",
      }}
    >
      <Grid xs={2}>
        <SideBar />
      </Grid>
      <Grid
        xs={9}
        sx={{
          padding: "4rem 1rem 4rem 4rem",
        }}
      >
        <Header title="About" />
        <Box
          sx={{
            padding: "0.5rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              padding: "1rem",
            }}
          >
            I'm <b>Vrushabh Bayas</b> , Software Engineer / Web Developer
          </Typography>
          <Typography
            sx={{
              padding: "1rem",
            }}
          >
            Excepteur voluptate duis cillum id aute eiusmod nulla nisi
            adipisicing amet ipsum pariatur. Ullamco quis excepteur sint Lorem
            exercitation eiusmod consectetur minim consectetur Lorem eiusmod
            proident exercitation est. Aliqua ex irure in dolore labore quis.
            Aute ex enim commodo duis cupidatat incididunt qui. Dolore tempor
            qui magna velit consequat elit enim irure laboris adipisicing. Duis
            fugiat deserunt Lorem deserunt aliqua occaecat Lorem. Quis veniam
            velit mollit aliquip amet cupidatat elit in ullamco reprehenderit
            sit sunt ad.
          </Typography>
        </Box>
        <Grid
          sx={{
            p: "1.5rem",
          }}
          xs={12}
        >
          <Grid container justifyContent="center">
            <Grid xs={8}>
              <Card sx={{ minWidth: 275 }} className="card-body">
                <CardContent>
                  <Grid container>
                    <Grid>
                      <Typography variant="h4">20+ Projects</Typography>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <Typography variant="h4">20+ Projects</Typography>
                    </Grid>
                    <Divider />
                    <Grid>
                      <Typography variant="h4">20+ Projects</Typography>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <Typography variant="h4">20+ Projects</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Paper
                sx={{
                  height: "20rem",
                  width: "20rem",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        xs={1}
        sx={{
          // padding: "13rem 1rem",
          margin: "auto",
        }}
      >
        <NavigationBar />
      </Grid>
    </Grid>
  );
}

About.propTypes = {};

export default About;
