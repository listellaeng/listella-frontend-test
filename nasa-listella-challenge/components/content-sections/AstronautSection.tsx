import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Image from "next/image";

import Link from "@mui/material/Link";
import ImageSlider from "./ImageSlider";

import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

type Props = {
  data?: [];
};

const AstronautSection = ({ data }: Props) => {
  return (
    <Container sx={{ p: 4 }} maxWidth={false}>
      <Grid
        container
        spacing={2}
        sx={{ height: "100%", alignItems: "stretch" }}
      >
        <Grid item xs={4}>
          <Typography
            display="inline"
            sx={{ fontWeight: 500, color: "#6B6B6B" }}
          >
            Galleries
          </Typography>
          <Typography display="inline" sx={{ fontWeight: 600 }} p={1}>
            &middot;
          </Typography>
          <Typography display="inline" sx={{ fontWeight: 700 }}>
            Space Database
          </Typography>
          <Card sx={{ borderRadius: "30px" }}>
            <CardMedia
               sx={{ width: 516, height: 671}}
              image="/img/astronaut.jpg"
              title="Astronaut"
            />
          </Card>
        </Grid>
        <Grid item xs={8} p={2}>
          <Paper sx={{ p: 4, display: "flex", alignItems: 'stretch' , flexDirection: "column", ml: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              mb={2}
            >
              <Image
                src="/icons/planet.svg"
                alt="planet"
                width={108}
                height={108}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: 4,
                }}
              >
                <Typography variant="h3" component="h3">
                  NASA's Space Database
                </Typography>
                <Typography variant="subtitle1" component="h4">
                  Our Public Gallery for Outer Space
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                backgroundColor: "rgba(151, 71, 255, 0.3)",
                height: 4,
                borderRadius: 4,
              }}
            />
            <Typography variant="body1" component="div" sx={{ pt: 2 }}>
              We want to see space through your eyes! Take photos and upload
              them to our public library. Our goal is to provide the largest
              database of quality images. Space is amazing! Let's capture it
              together!
            </Typography>
            <Box sx={{ pt:4 }}>
              <Typography variant="h3" component="h4">
                Featured Images
              </Typography>
              <Typography variant="subtitle1" component="p">
                Scroll to see more
              </Typography>

              <Grid container >
                <ImageSlider data={data} />
              </Grid>
              <Box textAlign="right">
                <Link underline="none" sx={{fontWeight:700, color:"#000"}}>View Gallery<Image src="/icons/right.svg" alt="right" width={8} height={15}  /></Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AstronautSection;
