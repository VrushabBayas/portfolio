import React from "react";
import resumeFile from "../../../Assets/Images/resumeVrushabhBayas.pdf";
import { Button, Grid } from "@mui/material";

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "VrushabhBayasResume.pdf";
    link.click();
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Button color="primary" size="lg" onClick={handleDownload}>
        Download CV
      </Button>
    </Grid>
  );
};

export default DownloadCV;
