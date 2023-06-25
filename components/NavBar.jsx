import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import AnchorLink from './AnchorLink';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, Button } from '@mui/material';

import authUser from '../auth-users.json';

import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(6),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(2),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 5),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '140%',
    [theme.breakpoints.up('md')]: {
      width: '80ch'
    }
  }
}));

export default function NavBar() {
  const { user, isLoading } = useUser();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const isAdmin = !isLoading && user && authUser.includes(user.sub);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>{isAdmin ? 'Admin' : 'Profile'}</MenuItem>

      <MenuItem href="/api/auth/logout" onClick={handleMenuClose}>
        <AnchorLink href="/api/auth/logout" className="btn btn-link p-0" icon="power-off" testId="navbar-logout-mobile">
          Logout
        </AnchorLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Typography>
          <AnchorLink href="/profile" className="btn btn-link " icon="user" testId="navbar-logout-mobile">
            Profile
          </AnchorLink>
        </Typography>
      </MenuItem>
      {isAdmin && (
        <MenuItem onClick={handleMenuClose}>
          <Typography>
            <AnchorLink href="/add-theatre" className="btn btn-link " icon="user" testId="navbar-logout-mobile">
              Create Theatre
            </AnchorLink>
          </Typography>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <Typography>Profile</Typography>
      </MenuItem>
      <MenuItem href="/api/auth/logout" onClick={handleMenuClose}>
        <Typography>
          <AnchorLink href="/api/auth/logout" className="btn btn-link " icon="power-off" testId="navbar-logout-mobile">
            Logout
          </AnchorLink>
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Typography>
          <AnchorLink href="/profile" className="btn btn-link " icon="user" testId="navbar-logout-mobile">
            Profile
          </AnchorLink>
        </Typography>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        {' '}
        <Button>
          {' '}
          {!isLoading && !user && (
            <AnchorLink
              href="/api/auth/login"
              className="btn btn-primary btn-block"
              tabIndex={0}
              testId="navbar-login-mobile">
              Log in
            </AnchorLink>
          )}
        </Button>
      </MenuItem>
    </Menu>
  );

  function handleChange(searchTerm) {
    localStorage.setItem('searchTerm', searchTerm);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: '#333338', height: { lg: '6rem', sm: '5rem', md: '5rem' } }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <LocalMoviesIcon sx={{ color: '#C82333', width: '35px', height: '35px' }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block', flexGrow: '1' } }}>
            SHOWSTART
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search movies"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </Search>
          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit">
              {!isLoading && user && <Avatar alt={user.name} src={user.picture} />}
            </IconButton>
          </Box>{' '}
          {user && !isLoading && (
            <Box sx={{ display: { xs: 'flex', md: 'none', flexGrow: 2 } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                sx={{ margin: 'auto' }}>
                <MoreIcon />
              </IconButton>
            </Box>
          )}
          <Button>
            {' '}
            {!isLoading && !user && (
              <AnchorLink
                href="/api/auth/login"
                className="btn btn-block btn-danger"
                tabIndex={0}
                testId="navbar-login-mobile">
                Login
              </AnchorLink>
            )}
          </Button>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
