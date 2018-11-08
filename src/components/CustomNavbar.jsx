import React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
} from 'reactstrap';
import { Consumer } from './Context/indexContext.jsx';
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
    const { title} = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="https://smukat.github.io/documentation-page/">{title}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Consumer>
                { ({ categoriesName }) => (
                  categoriesName.map((category, index) => (
                    <NavbarItem key={category.id} index={index} />
                  ))
                )}
              </Consumer>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
CustomNavbar.propTypes = {
  title: PropTypes.string.isRequired,
};

