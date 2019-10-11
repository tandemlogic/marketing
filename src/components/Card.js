/** @jsx jsx */
import { jsx } from 'theme-ui';

import PropTypes from 'prop-types';

const Card = ({ children }) => (
  <div
    sx={{
      width: '60%',
      minWidth: '400px',
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.string,
};

export default Card;
