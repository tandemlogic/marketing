/** @jsx jsx */
import { jsx } from 'theme-ui';

// basic usage
import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';

import theme from './src/gatsby-plugin-theme-ui';

const GlobalStyles = () => (
  <Global
    styles={() => ({
      body: {
        fontFamily: theme.fonts.body,
        backgroundColor: theme.colors.background,
      },
    })}
  />
);

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <React.Fragment>
    <GlobalStyles />
    {element}
  </React.Fragment>
);

wrapRootElement.propTypes = {
  element: PropTypes.node,
};
