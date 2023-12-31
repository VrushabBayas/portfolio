import React from "react";
import Layout from "../Layout";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import DownloadCV from "../../components/common/Download";

import Reactjs from "../../Assets/Images/react.webp";
import js from "../../Assets/Images/js.png";
import ts from "../../Assets/Images/typescript.png";
import htmllogo from "../../Assets/Images/htmlcss.png";
import nextJs from "../../Assets/Images/nexrtjs.png";
import nodelogo from "../../Assets/Images/nodejs.webp";
import jira from "../../Assets/Images/jira.png";
import bs from "../../Assets/Images/bs.png";
import git from "../../Assets/Images/git.png";
import "./style.css";
function Resume() {
  return (
    <Layout title="RESUME">
      <DownloadCV />
      <Grid
        sx={{
          margin: "auto",
          padding: "0.5rem",
        }}
      >
        <Grid container>
          <Grid
            container
            sx={{
              display: "flex",
            }}
            xs={12}
            lg={6}
            // spacing={1}
          >
            <Grid container alignItems="center">
              <Typography variant="h5" fontWeight="bold">
                Education
              </Typography>
            </Grid>
            <Grid
              xs={12}
              lg={6}
              sm={6}
              md={6}
              sx={{
                padding: "0.5rem",
              }}
            >
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
            <Grid
              xs={12}
              lg={6}
              sm={6}
              md={6}
              sx={{
                padding: "1rem",
              }}
            >
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
                <Typography variant="p">
                  Bachelor of Computer science
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
            }}
            xs={12}
            lg={6}
            p={1}
          >
            <Grid container alignItems="center">
              <Typography variant="h5" fontWeight="bold">
                Roles and Responsibilities
              </Typography>
            </Grid>
            <Grid xs={12} lg={12}>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="p">
                  Carried responsibilities of requirement understanding,
                  software design, designing project structure and development
                  of UI features in ReactJS, UI improvements, integration of web
                  services, implementing reusable UI components and unit
                  testing. Maintenance and support for of existing projects.
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
          sx={{
            margin: "auto",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
            }}
            spacing={1}
          >
            <Grid container p={1}>
              <Typography variant="h5" fontWeight="bold">
                Skills
              </Typography>
            </Grid>
            <Grid lg={8}>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Grid xs={12} lg={4} sm={4} md={4} pb={1}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={Reactjs}
                          alt="React js logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            ReactJS
                          </Typography>

                          <Rating value={4} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
                <Grid xs={12} lg={4} sm={4} md={4} pb={1}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={js}
                          alt="js logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Javascrip
                          </Typography>

                          <Rating value={4} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
                <Grid xs={12} lg={4} sm={4} md={4} pb={1}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={ts}
                          alt="js logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Typescript
                          </Typography>

                          <Rating value={3} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Grid xs={12} lg={4} sm={4} md={4} pb={1}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={nextJs}
                          alt="js logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            NextJS
                          </Typography>

                          <Rating value={3} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
                <Grid xs={12} lg={4} sm={4} md={4} pb={1}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={nodelogo}
                          alt="Node logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            NodeJS
                          </Typography>

                          <Rating value={3} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
                <Grid xs={12} lg={4} sm={4} md={4} pb={1}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={htmllogo}
                          alt="html logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            HTML/CSS
                          </Typography>

                          <Rating value={4} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Grid xs={12} lg={4} sm={4} md={4}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={bs}
                          alt="html logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Bootstrap
                          </Typography>

                          <Rating value={4} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
                <Grid xs={12} lg={4} sm={4} md={4} pb={1}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={jira}
                          alt="html logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Jira
                          </Typography>

                          <Rating value={4} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
                <Grid xs={12} lg={4} sm={4} md={4} pb={1}>
                  <Grid container justifyContent="center">
                    <Card sx={{ maxWidth: 250 }}>
                      <CardActionArea className="skill-action-area">
                        <CardMedia
                          className="skill-card-img"
                          component="img"
                          image={git}
                          alt="html logo"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Git
                          </Typography>

                          <Rating value={4} readOnly />
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid lg={4}>
              <Grid
                container
                sx={{
                  display: "flex",
                  margin: "auto",
                }}
                p={1}
              >
                <Grid container alignItems="center">
                  <Typography variant="h5" fontWeight="bold">
                    Work Experience
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sx={{
                    padding: "0.5rem",
                  }}
                >
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
                          flexWrap: "wrap",
                        }}
                        label={
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="white"
                          >
                            Josh Software Pvt. Ltd.
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
                <Grid
                  xs={12}
                  sx={{
                    padding: "0.5rem",
                  }}
                >
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
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="white"
                          >
                            Spring CT. Pvt. Ltd.
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Resume;
