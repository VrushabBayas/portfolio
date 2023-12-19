import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

import backgroundImage from "../../Assets/Images/smalldp.png";

import { orange } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

import "./style.css";
export default function ActionAreaCard() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={backgroundImage}
          alt="back ground image"
          sx={{
            backgroundColor: "#f0f0ed",
          }}
          style={{
            height: "250px",
            width: "252px",
          }}
        />
        <CardContent
          sx={{
            backgroundColor: orange,
            padding: 0,
          }}
        >
          <Box className="sidebar-container">
            <ul className="list-group">
              <div className="verticle-bar-dot" />
              <div className="verticle-bar" />
              <li className="list-item zoom-effect">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav-link pending"
                      : isActive
                      ? "nav-link active"
                      : ""
                  }
                >
                  <Typography variant="h5" marginBottom="15px" fontWeight={600}>
                    Home
                  </Typography>
                </NavLink>
              </li>
              <div className="verticle-bar" />
              <li className="list-item zoom-effect">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <Typography variant="h5" marginBottom="15px" fontWeight={600}>
                    About
                  </Typography>
                </NavLink>
              </li>
              <div className="verticle-bar" />
              <li className="list-item zoom-effect">
                <NavLink
                  to="/resume"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <Typography variant="h5" marginBottom="15px" fontWeight={600}>
                    Resume
                  </Typography>
                </NavLink>
              </li>

              <div className="verticle-bar" />
              <li className="list-item zoom-effect">
                <NavLink
                  to="/projects"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <Typography variant="h5" marginBottom="15px" fontWeight={600}>
                    Projects
                  </Typography>
                </NavLink>
              </li>
              <div className="verticle-bar" />
              <li className="list-item zoom-effect">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <Typography variant="h5" marginBottom="15px" fontWeight={600}>
                    Blogs
                  </Typography>
                </NavLink>
              </li>
              <div className="verticle-bar" />
              <li className="list-item zoom-effect">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  <Typography variant="h5" marginBottom="15px" fontWeight={600}>
                    Contact
                  </Typography>
                </NavLink>
              </li>
              <div className="verticle-bar" />
              <div className="verticle-bar-dot" />
            </ul>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
