import React from 'react';
import { Helmet } from 'react-helmet';

import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignoLabs</title>
      </Helmet>
      {children}
    </>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
