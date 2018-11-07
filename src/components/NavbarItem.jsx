import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

const NavbarItem = ({ category, onChange, id }) => (
  <NavItem>
    <NavLink href="#" onClick={() => { onChange(id, -1); }}>{category}</NavLink>
  </NavItem>
);

NavbarItem.propTypes = {
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default NavbarItem;
