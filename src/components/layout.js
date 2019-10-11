/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import PropTypes from 'prop-types';

import './normalize.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <div
      sx={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <footer>© Tandem Logic {new Date().getFullYear()}</footer>
    </div>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
