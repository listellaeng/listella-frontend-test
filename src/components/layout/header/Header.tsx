import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import EarthIcon from '../../../assets/earth.svg';
import MenuIcon from '../../../assets/menu.svg';
import SearchIcon from '../../../assets/search.svg';
import ShareIcon from '../../../assets/share.svg';

const pages = [
  'Missions',
  'Galleries',
  'NASA Audiences',
  'Downloads',
  'NASA TV',
  'About',
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: '#ffffff', color: '#000000' }}
    >
      <Toolbar disableGutters sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            pt: 4,
            pb: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              src={EarthIcon.src}
              alt='Earth Icon'
              sx={{
                width: 68,
                height: 68,
                mr: 4,
              }}
            />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                fontWeight: 300,
                fontSize: '64px',
                lineHeight: '87px',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NASA
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              px: 2,
              py: 1,
            }}
          >
            <ButtonGroup
              size='large'
              sx={{
                borderRadius: '5px',
                borderBottom: '4px solid #F0F0F0',
                pb: 1,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: '#000000',
                    display: 'block',
                    border: 'none',
                    '&:hover': { border: 'none' },
                    textTransform: 'none',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '32.69px',
                  }}
                >
                  {page}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
              py: 0.5,
              px: 3,
              gap: 7,
              color: '#000000',
            }}
          >
            <IconButton size='small' color='inherit'>
              <Box
                component='img'
                src={SearchIcon.src}
                alt='Search'
                sx={{ widht: 24, height: 24 }}
              ></Box>
            </IconButton>
            <IconButton size='small' color='inherit'>
              <Box
                component='img'
                src={ShareIcon.src}
                alt='Share'
                sx={{ widht: 24, height: 24 }}
              ></Box>
            </IconButton>
            <IconButton
              size='small'
              color='inherit'
              onClick={handleOpenNavMenu}
            >
              <Box
                component='img'
                src={MenuIcon.src}
                alt='Menu'
                sx={{ widht: 24, height: 24 }}
              ></Box>
            </IconButton>
          </Box>
        </Box>

        <Menu
          anchorEl={anchorElNav}
          disableScrollLock
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign='center'>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
