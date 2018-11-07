import React from 'react';
import PropTypes from 'prop-types';
import SkipMain from './SkipMain';
import CustomNavbar from './CustomNavbar.jsx';

const Header = ({ title, categories, onChange }) => (

  <div>
    <SkipMain />
    <CustomNavbar title={title} categories={categories} onChange={onChange} />
  </div>);

Header.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

Header.defaultProps = {
  title: 'JS Documentation',
};

export default Header;
