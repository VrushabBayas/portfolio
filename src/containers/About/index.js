import React from "react";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import InteractiveCard from "../../components/common/Cards";
import Layout from "../Layout";

function About() {
  return (
    <Layout title="ABOUT ME">
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Typography
          variant="h4"
          sx={{
            padding: "1rem",
          }}
        >
          I'm <b>Vrushabh Bayas</b> , Software Engineer / Web Developer
        </Typography>
        <Typography
          variant="h6"
          sx={{
            padding: "1rem",
          }}
        >
          I am a software engineer with <b>6 year's</b> of experience,
          specializing in <b>web development</b> with a focus on{" "}
          <b>React.js.</b>
          Recognized for my quick learning abilities, I thrive on exploring new
          technologies and ideas. Beyond coding, I am a passionate gamer and
          content creator with two channels. One channel is dedicated to sharing
          my gaming adventures and strategies, while the other delves into
          technical topics, offering insights and tutorials. I find joy in both
          playing games and teaching others. Join me on my channels to
          experience the perfect blend of technology and entertainment!"
        </Typography>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12}>
        <Grid container justifyContent="center">
          <Grid
            xs={12}
            sm={5}
            md={6}
            lg={6}
            sx={{
              padding: "0.5rem",
            }}
          >
            <Card
              className="card-body"
              sx={{
                backgroundColor: "black",
                color: "orange",
              }}
            >
              <CardContent>
                <Grid container spacing={1}>
                  <Grid
                    xs={5}
                    sm={4}
                    md={4}
                    lg={4}
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                      height: "10rem",
                      width: "10rem",
                    }}
                  >
                    <Grid>
                      <Box>
                        <Typography
                          variant="h3"
                          textAlign="center"
                          fontWeight="bold"
                          className="zoom-effect"
                        >
                          6 +
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          textAlign="center"
                          variant="h6"
                          color="white"
                        >
                          Projects Done
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    color="white"
                  />
                  <Grid
                    xs={5}
                    sm={4}
                    md={4}
                    lg={4}
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                      height: "10rem",
                      width: "10rem",
                    }}
                  >
                    <Grid>
                      <Box>
                        <Typography
                          variant="h3"
                          textAlign="center"
                          fontWeight="bold"
                          className="zoom-effect"
                        >
                          30k +
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          textAlign="center"
                          variant="h6"
                          color="white"
                        >
                          Lines Code Written
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Divider
                    orientation="horizontal"
                    color="white"
                    sx={{ width: "100%" }}
                  />

                  <Grid
                    xs={5}
                    sm={4}
                    md={4}
                    lg={4}
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                      height: "10rem",
                      width: "10rem",
                    }}
                  >
                    <Grid>
                      <Box>
                        <Typography
                          variant="h3"
                          textAlign="center"
                          fontWeight="bold"
                          className="zoom-effect"
                        >
                          6 +
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          textAlign="center"
                          variant="h6"
                          color="white"
                        >
                          Technical Skills
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    color="white"
                  />
                  <Grid
                    xs={5}
                    sm={4}
                    md={4}
                    lg={4}
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                      height: "10rem",
                      width: "10rem",
                    }}
                  >
                    <Grid>
                      <Box>
                        <Typography
                          variant="h3"
                          textAlign="center"
                          fontWeight="bold"
                          className="zoom-effect"
                        >
                          6 +
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          textAlign="center"
                          variant="h6"
                          color="white"
                        >
                          Years Experience
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={5}
            md={5}
            lg={5}
            sx={{
              margin: "auto",
            }}
            container
          >
            <Grid>
              <Typography variant="h4" fontWeight="bold">
                What I do?
              </Typography>
            </Grid>
            <Grid>
              <InteractiveCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default About;
