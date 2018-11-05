import React from 'react';
import PropTypes from 'prop-types';
import SkipMain from './SkipMain';
import CustomNavbar from './CustomNavbar.jsx';

const Header = ({ title, categories }) => (
  <div>
    <SkipMain />
    <CustomNavbar title={title} categories={categories} />
  </div>);

Header.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Header.defaultProps = {
  title: 'JS Documentation',
};

export default Header;
