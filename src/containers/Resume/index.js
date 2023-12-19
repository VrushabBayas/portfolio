import React from "react";
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
            height: 180,
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
            height: 110,
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
              Work Experience
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid>
                <Chip
                  sx={{
                    backgroundColor: "orange",
                  }}
                  label={
                    <Typography variant="h6" fontWeight="bold" color="white">
                      Josh Software Private Limited.
                    </Typography>
                  }
                />
              </Grid>
              <Grid>
                <Typography variant="p" fontWeight="bold">
                  Feb-2020 - Present
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid>
                <Chip
                  sx={{
                    backgroundColor: "orange",
                  }}
                  label={
                    <Typography variant="h6" fontWeight="bold" color="white">
                      Spring Computing Technologies Priovate Limited
                    </Typography>
                  }
                />
              </Grid>
              <Grid>
                <Typography variant="p" fontWeight="bold">
                  Jan-18 - Feb 2020
                </Typography>
              </Grid>
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
            height: 110,
          }}
          spacing={1}
        >
          <Grid container alignItems="center">
            <Typography variant="h5" fontWeight="bold">
              Roles and Responsibilities
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="p">
                Carried responsibilities of requirement understanding, software
                design, designing project structure and development of UI
                features in ReactJS, UI improvements, integration of web
                services, implementing reusable UI components and unit testing.
                Maintenance and support for of existing projects.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Resume;
