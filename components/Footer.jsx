import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <hr />
    <div className="logo" data-testid="footer-logo" />
    <IconButton sx={{ color: '#C82333' }} href="https://m.facebook.com/mhtkrag">
      <FacebookIcon sx={{ height: '50px', width: '50px' }} />
    </IconButton>
    <IconButton sx={{ color: '#C82333' }} href="https://twitter.com/Mohit55443393?t=TueM04ooyjwU2Wf-Ws5v8Q&s=08">
      <TwitterIcon sx={{ height: '50px', width: '50px' }} />
    </IconButton>
    <IconButton sx={{ color: '#C82333' }} href="https://www.linkedin.com/mwlite/in/mohit-agrawal-02183b23a">
      <LinkedInIcon sx={{ height: '50px', width: '50px' }} />
    </IconButton>

    <IconButton sx={{ color: '#C82333' }} href="https://www.instagram.com/mohitkumaragrawal1/">
      <InstagramIcon sx={{ height: '50px', width: '50px' }} />
    </IconButton>

    <p data-testid="footer-text"></p>
  </footer>
);

export default Footer;
