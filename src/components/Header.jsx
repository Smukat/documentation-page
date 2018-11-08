import React from 'react';
import PropTypes from 'prop-types';
import SkipMain from './SkipMain.jsx';
import CustomNavbar from './CustomNavbar.jsx';

const Header = ({ title }) => (

  <div>
    <SkipMain />
    <CustomNavbar title={title} />
  </div>);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'JS Documentation',
};

export default Header;
