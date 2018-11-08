import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Consumer } from './Context/indexContext.jsx'

const NavbarItem = ({ index }) => (
  <Consumer>
		{({categoriesName, actions}) => (
			<NavItem>
				<NavLink href="#" onClick={() => { actions.updateActiveCategory(categoriesName[index].id, -1); }}>{categoriesName[index].category}</NavLink>
			</NavItem>
		)}
  </Consumer>
);

export default NavbarItem;
