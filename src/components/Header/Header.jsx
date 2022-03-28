import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
} from '@mui/material';

import { Menu as MenuIcon } from '@mui/icons-material';

import MobileMenu from './MobileMenu';

import logo from '../../assets/images/signolabs-logo.png';

import * as styles from './Header.module.css';

function Header({ pathname }) {
  const links = [
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
    { title: 'Services', link: '/services' },
    { title: 'Portfolio', link: '/portfolio' },
  ];
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  return (
    <AppBar position="fixed" elevation={0} sx={{ height: '54px', backgroundColor: 'white' }}>
      <Toolbar>
        <Container maxWidth="xl" disableGutters className={styles.headerContainer}>
          <div className="block md:hidden">
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
            <MobileMenu open={isMenuOpen} handleClose={() => setMenuOpen(false)} links={links} />
          </div>
          <Typography variant="h5" color={pathname === '/' ? 'primary' : 'black'} className="mr-auto font-bold">
            <Link to="/">
              <img src={logo} alt="logo" className="inline-block mr-1.5 w-9" />
              SignoLabs
            </Link>
          </Typography>
          {
            links.map((item) => (
              <div key={item.link} className="hidden md:block">
                <Typography className="text-base">
                  <Link to={item.link} getProps={({ isPartiallyCurrent }) => ({ className: isPartiallyCurrent && 'text-primary' })}>
                    {item.title}
                  </Link>
                </Typography>
              </div>
            ))
          }
        </Container>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
