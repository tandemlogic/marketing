/** @jsx jsx */
import { jsx } from 'theme-ui';

import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => <header sx={{}}>{siteTitle}</header>;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
