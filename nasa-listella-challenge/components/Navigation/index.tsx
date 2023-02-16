import React from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Close from "/public/icons/close.svg";
import MenuIcon from "/public/icons/menu.svg";
import SearchIcon from "/public/icons/search.svg";
import ShareIcon from "/public/icons/share.svg";

import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";


const menuItems = [
  "Missions",
  "Galleries",
  "NASA Audiences",
  "Downloads",
  "NASA TV",
  "About",
];

const secondaryMenuItems = [
  "Humans in Space",
  "Moon to Mars",
  "Earth",
  "Space Tech",
  "Solar System & Beyond",
  "STEM Engagement",
  "History",
  "Benefits to You"
];



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const MainNavDivider = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  borderRadius: 5,
  backgroundColor: "#F0F0F0",
  display: "flex",
  height: 4
}));

export const MainNavigation = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {menuItems.map((item, i) => (
          <ButtonBase key={`mainMenu_${i}`} onClick={handleClick} className="main-nav">
            {item}
          </ButtonBase>
        ))}
      </Box>
      <MainNavDivider />
    </>
  );
};

export const SecondaryNavigation = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        alignItems: "right",
        textAlign: "right",
        justifyContent: "right",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase inputProps={{ "aria-label": "search" }} />
      </Search>

      <IconButton
        size="large"
        color="inherit"
        aria-label="share"
        sx={{ mr: 2 }}
      >
        <ShareIcon />
      </IconButton>

      <IconButton
        size="large"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
       {open ? <Close /> : <MenuIcon /> }
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {secondaryMenuItems.map((item, i) => (
            <MenuItem key={`secondaryMenu_${i}`} onClick={handleClose} divider={(i < secondaryMenuItems.length -1)}>
              {item}
            </MenuItem>
            
        ))}
      </Menu>
    </Box>
  );
};
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "1ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
