// import React, { useState } from 'react';
// import {
//   Collapse,
//   Container,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from 'reactstrap';
// import { useUser } from '@auth0/nextjs-auth0/client';

// import PageLink from './PageLink';
// import AnchorLink from './AnchorLink';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, isLoading } = useUser();
//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div className="nav-container" data-testid="navbar">
//       <Navbar color="#fffff" light expand="lg">
//         <Container>
//           {/* <NavbarBrand className="logo" /> */}
//           <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
//           <Collapse isOpen={isOpen} navbar>
//             <Nav className="mr-auto" navbar data-testid="navbar-items">
//               <NavItem>
//                 <PageLink href="/" className="nav-link" testId="navbar-home">
//                   Home
//                 </PageLink>
//               </NavItem>
//               {user && (
//                 <>
//                   <NavItem>
//                     <PageLink href="/csr" className="nav-link" testId="navbar-csr">
//                       Client-side rendered page
//                     </PageLink>
//                   </NavItem>
//                   <NavItem>
//                     <PageLink href="/ssr" className="nav-link" testId="navbar-ssr">
//                       Server-side rendered page
//                     </PageLink>
//                   </NavItem>
//                   <NavItem>
//                     <PageLink href="/external" className="nav-link" testId="navbar-external">
//                       External API
//                     </PageLink>
//                   </NavItem>
//                 </>
//               )}
//             </Nav>
//             <Nav className="d-none d-md-block" navbar>
//               {!isLoading && !user && (
//                 <NavItem id="qsLoginBtn">
//                   <AnchorLink
//                     href="/api/auth/login"
//                     className="btn  btn-margin"
//                     tabIndex={0}
//                     testId="navbar-login-desktop">
//                     Log in
//                   </AnchorLink>
//                 </NavItem>
//               )}
//               {user && (
//                 <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
//                   <DropdownToggle nav caret id="profileDropDown">
//                     <img
//                       src={user.picture}
//                       alt="Profile"
//                       className="nav-user-profile rounded-circle"
//                       width="50"
//                       height="50"
//                       decode="async"
//                       data-testid="navbar-picture-desktop"
//                     />
//                   </DropdownToggle>
//                   <DropdownMenu>
//                     <DropdownItem header data-testid="navbar-user-desktop">
//                       {user.name}
//                     </DropdownItem>
//                     <DropdownItem className="dropdown-profile" tag="span">
//                       <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
//                         Profile
//                       </PageLink>
//                     </DropdownItem>
//                     <DropdownItem id="qsLogoutBtn">
//                       <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
//                         Log out
//                       </AnchorLink>
//                     </DropdownItem>
//                   </DropdownMenu>
//                 </UncontrolledDropdown>
//               )}
//             </Nav>
//             {!isLoading && !user && (
//               <Nav className="d-md-none" navbar>
//                 <AnchorLink
//                   href="/api/auth/login"
//                   className="btn btn-primary btn-block"
//                   tabIndex={0}
//                   testId="navbar-login-mobile">
//                   Log in
//                 </AnchorLink>
//               </Nav>
//             )}
//             {user && (
//               <Nav
//                 id="nav-mobile"
//                 className="d-md-none justify-content-between"
//                 navbar
//                 data-testid="navbar-menu-mobile">
//                 <NavItem>
//                   <span className="user-info">
//                     <img
//                       src={user.picture}
//                       alt="Profile"
//                       className="nav-user-profile d-inline-block rounded-circle mr-3"
//                       width="50"
//                       height="50"
//                       decode="async"
//                       data-testid="navbar-picture-mobile"
//                     />
//                     <h6 className="d-inline-block" data-testid="navbar-user-mobile">
//                       {user.name}
//                     </h6>
//                   </span>
//                 </NavItem>
//                 <NavItem>
//                   <PageLink href="/profile" icon="user" testId="navbar-profile-mobile">
//                     Profile
//                   </PageLink>
//                 </NavItem>
//                 <NavItem id="qsLogoutBtn">
//                   <AnchorLink
//                     href="/api/auth/logout"
//                     className="btn btn-link p-0"
//                     icon="power-off"
//                     testId="navbar-logout-mobile">
//                     Log out
//                   </AnchorLink>
//                 </NavItem>
//               </Nav>
//             )}
//           </Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default NavBar;

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
// import MenuButton from '@mui/material/Me/uButton';
import Menu from '@mui/material/Menu';
import { Nav } from 'reactstrap';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import AnchorLink from './AnchorLink';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Avatar, Button } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>

      <MenuItem href="/api/auth/logout" onClick={handleMenuClose}>
        <AnchorLink href="/api/auth/logout" className="btn btn-link p-0" icon="power-off" testId="navbar-logout-mobile">
          Log out
        </AnchorLink>
      </MenuItem>
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
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: '#434343', height: '5rem' }}>
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block', flexGrow: '1' } }}>
            SHOWSTART
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search movies" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
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
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
          <Button>
            {' '}
            {!isLoading && !user && (
              <AnchorLink
                href="/api/auth/login"
                className="btn btn-primary btn-block"
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
