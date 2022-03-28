import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import {
  Drawer,
  List,
  ListItem,
  // Button,
  Typography,
  IconButton,
} from '@mui/material';

import { Close as CloseIcon } from '@mui/icons-material';

export default function MobileMenu({
  links, open, handleClose, pathname,
}) {
  return (
    <Drawer
      open={open}
      onClose={() => handleClose()}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      PaperProps={{
        className: 'w-60',
      }}
      variant="temporary"
    >
      <div className="flex items-center w-full p-3">
        <Typography variant="h6" color={pathname === '/' ? 'primary' : 'black'} className="font-bold">
          <Link to="/">
            SignoLabs
          </Link>
        </Typography>
        <IconButton className="ml-auto" onClick={() => handleClose()}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {
          links.map((item) => (
            <ListItem key={item.link}>
              <Link to={item.link}>
                <Typography variant="h6" color={item.link === pathname ? 'primary' : 'black'}>
                  {item.title}
                </Typography>
              </Link>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
}

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  pathname: PropTypes.string.isRequired,
};
