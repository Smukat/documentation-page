import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

const NavbarItem = ({ category }) => (
  <NavItem>
    <NavLink href="#">{category}</NavLink>
  </NavItem>
);

NavbarItem.propTypes = {
  category: PropTypes.string.isRequired,
};
export default NavbarItem;
