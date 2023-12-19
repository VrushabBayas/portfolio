import * as React from "react";

import { Card, CardContent, Typography, Chip, Grid } from "@mui/material";
import WebDevelopment from "../../../Assets/Images/webdevlogo.png";
import Youtube from "../../../Assets/Images/youtube.png";
import GAMING from "../../../Assets/Images/gaming.png";

export default function InteractiveCard() {
  return (
    <>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 500,
          margin: "0.2rem",
          backgroundColor: "#e9f5f9",
          border: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={1} xs={12}>
            <Grid xs={3}>
              <img
                className="zoom-effect"
                src={WebDevelopment}
                alt="web-card"
                style={{
                  width: 70,
                }}
              />
            </Grid>
            <Grid xs={8}>
              <Typography level="title-lg" fontWeight="bold">
                Web Development
              </Typography>
              <Typography variant="p">
                Web development turns ideas into immersive online experiences,
                shaping the digital landscape one line of code at a time.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 500,
          margin: "0.2rem",
          backgroundColor: "#e9f5f9",
          border: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={1} xs={12}>
            <Grid xs={3}>
              <img
                className="zoom-effect"
                src={Youtube}
                alt="web-card"
                style={{
                  width: 70,
                }}
              />
            </Grid>
            <Grid xs={8}>
              <Typography level="title-lg" fontWeight="bold">
                Youtuber
              </Typography>
              <Typography variant="p">
                Explore, Engage, and Elevate – Your Journey Unleashed on
                YouTube!
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 500,
          margin: "0.2rem",
          backgroundColor: "#e9f5f9",
          border: "none",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={1} xs={12}>
            <Grid xs={3}>
              <img
                className="zoom-effect"
                src={GAMING}
                alt="web-card"
                style={{
                  width: 70,
                  background: "transperent",
                }}
              />
            </Grid>
            <Grid xs={8}>
              <Typography level="title-lg" fontWeight="bold">
                Gaming
              </Typography>
              <Typography variant="p">
                Level Up Your Entertainment: Where Gaming Dreams Come to Life!
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
