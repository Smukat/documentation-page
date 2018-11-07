import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
} from 'reactstrap';
import NavbarItem from './NavbarItem.jsx';

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    // Destructuring:
    const { title, categories } = this.props;
    const { isOpen } = this.state;

    // Create a navbar-item per each category that exists.
    const navbarItems = categories.map(category => (
      <NavbarItem category={category.category} key={category.id} />
    ));

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{title}</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navbarItems}
            </Nav>
          </Collapse> */}
        </Navbar>
      </div>
    );
  }
}
CustomNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
