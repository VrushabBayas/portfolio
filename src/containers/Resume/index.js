import React from "react";
import PropTypes from "prop-types";
import Layout from "../Layout";

import { Chip, Divider, Grid, Rating, Typography } from "@mui/material";

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
          <Grid container alignItems="center">
            <Typography variant="h5" fontWeight="bold">
              Education
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Grid container>
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography variant="h6" fontWeight="bold" color="white">
                    Passed out 2018
                  </Typography>
                }
              />
            </Grid>
            <Grid container>
              <Typography fontWeight="bold">MSC (Comp.Sci)</Typography>
            </Grid>
            <Grid container>
              <Typography variant="p">Nowrojee Wadia college</Typography>
            </Grid>
            <Grid container>
              <Typography variant="p">Pune Uniersity</Typography>
            </Grid>
            <Grid container>
              <Typography variant="p">Master of Computer science</Typography>
            </Grid>
          </Grid>
          <Grid xs={4}>
            <Grid container>
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography variant="h6" fontWeight="bold" color="white">
                    Passed out 2016
                  </Typography>
                }
              />
            </Grid>
            <Grid container>
              <Typography fontWeight="bold">BSC (Comp.Sci)</Typography>
            </Grid>
            <Grid container>
              <Typography variant="p">Annasaheb Magar College</Typography>
            </Grid>
            <Grid container>
              <Typography variant="p">Pune Uniersity</Typography>
            </Grid>
            <Grid container>
              <Typography variant="p">Bachelor of Computer science</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider
          sx={{
            marginBottom: "0.5rem",
          }}
        />
        <Grid
          container
          sx={{
            height: 100,
          }}
          spacing={1}
        >
          <Grid
            container
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Skills
            </Typography>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid>
              <Grid container>
                <Chip
                  sx={{
                    backgroundColor: "orange",
                  }}
                  label={
                    <Typography variant="h6" fontWeight="bold" color="white">
                      React JS
                    </Typography>
                  }
                />
              </Grid>
              <Rating value={4} readOnly />
            </Grid>
            <Grid>
              <Grid container>
                <Chip
                  sx={{
                    backgroundColor: "orange",
                  }}
                  label={
                    <Typography variant="h6" fontWeight="bold" color="white">
                      Javascript
                    </Typography>
                  }
                />
              </Grid>
              <Rating value={4} readOnly />
            </Grid>
            <Grid>
              <Grid container>
                <Chip
                  sx={{
                    backgroundColor: "orange",
                  }}
                  label={
                    <Typography variant="h6" fontWeight="bold" color="white">
                      Node JS
                    </Typography>
                  }
                />
              </Grid>
              <Rating value={3} readOnly />
            </Grid>
            <Grid>
              <Grid container>
                <Chip
                  sx={{
                    backgroundColor: "orange",
                  }}
                  label={
                    <Typography variant="h6" fontWeight="bold" color="white">
                      HTML/CSS
                    </Typography>
                  }
                />
              </Grid>
              <Rating value={4} readOnly />
            </Grid>
            <Grid>
              <Grid container>
                <Chip
                  sx={{
                    backgroundColor: "orange",
                  }}
                  label={
                    <Typography variant="h6" fontWeight="bold" color="white">
                      Git
                    </Typography>
                  }
                />
              </Grid>
              <Rating value={4} readOnly />
            </Grid>
            <Grid>
              <Grid container>
                <Chip
                  sx={{
                    backgroundColor: "orange",
                  }}
                  label={
                    <Typography variant="h6" fontWeight="bold" color="white">
                      Jira
                    </Typography>
                  }
                />
              </Grid>
              <Rating value={4} readOnly />
            </Grid>
          </Grid>
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
          <Grid container alignItems="center">
            <Typography variant="h5" fontWeight="bold">
              Projects
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Grid container>
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography variant="h6" fontWeight="bold" color="white">
                    MINT
                  </Typography>
                }
              />
            </Grid>
            <Typography variant="p">
              Proident eu aliqua laboris sint reprehenderit irure fugiat est
              sunt velit dolore enim elit duis. Ad occaecat qui cillum fugiat
              excepteur.
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Grid container>
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography variant="h6" fontWeight="bold" color="white">
                    SAT(Security Assessment Training)
                  </Typography>
                }
              />
            </Grid>
            <Typography variant="p">
              SAT is a training platform that gives training to users against
              different phishing attacks.I am carrying out the responsibility of
              its migration that is converting the existing code base to its
              latest version from React 15.x to 16.x and the re-skinning that is
              giving new look and feel to it.
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Grid container>
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography variant="h6" fontWeight="bold" color="white">
                    Circles.life
                  </Typography>
                }
              />
            </Grid>
            <Typography variant="p">
              This is telecom company sells sim cards in various countries. I
              have built dashboard for it which includes showing data using
              various charts and tabular format.
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Grid container>
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography variant="h6" fontWeight="bold" color="white">
                    Loookit
                  </Typography>
                }
              />
            </Grid>
            <Typography variant="p">
              LoookIt is an immersive communications service that allows
              participants to share a whiteboard in the cloud in
              real-time.LoookIt can be used by Consumers, Educators, and
              Customer Support staff to provide rich interactions in a simple
              and easy-to-use manner
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Grid container>
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography variant="h6" fontWeight="bold" color="white">
                    Kristal.IO
                  </Typography>
                }
              />
            </Grid>
            <Typography variant="p">
              Kristal’s are digital portfolios of assets built using unique
              investment strategies. Renowned traders across the world have come
              together to create each Kristal with their in-depth financial
              intuition and decades of investment experience.
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Grid container>
              <Chip
                sx={{
                  backgroundColor: "orange",
                }}
                label={
                  <Typography variant="h6" fontWeight="bold" color="white">
                    BidWheelz
                  </Typography>
                }
              />
            </Grid>
            <Typography variant="p">
              This is the platform where users can sell and buy old cars. This
              platform provides the feature of live bidding where users can play
              bid for the cars. I was responsible for building new features and
              fixing the bugs
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

Resume.propTypes = {};

export default Resume;
