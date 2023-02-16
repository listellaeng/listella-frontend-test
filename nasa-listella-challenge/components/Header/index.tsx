import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { MainNavigation, SecondaryNavigation } from "../Navigation";
import Image from "next/image";
import Earth from "/public/icons/earth.svg";

const TitleBanner = () => (
  <Box
    sx={{
      pt: 6,
      pb: 3,
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
    }}
  >
    <Earth />
    <Typography variant="h1" component="h1" sx={{ minWidth: 242, pl:3 }}>
      NASA
    </Typography>
  </Box>
);

const Header = () => {
  return (
    <>
      <TitleBanner />
      <MainNavigation />
      <SecondaryNavigation />
    </>
  );
};

export default Header;