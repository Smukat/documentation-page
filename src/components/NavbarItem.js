import React from 'react';
import   {
    NavItem,
    NavLink, } from 'reactstrap';

const NavbarItem = (props) => {


    return (
        <NavItem>
            <NavLink href="#">{ props.category }</NavLink>
        </NavItem>
    );

};

export default NavbarItem;