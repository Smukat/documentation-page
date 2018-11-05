import React from 'react';
import NavbarItem from './NavbarItem';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, } from 'reactstrap';


export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {
      title,
      categories,
    } = this.props;

    const navbar_items = categories.map(category => 
      <NavbarItem 
      category={category.category}
      key={category.id} />
      );


    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{ title }</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {navbar_items}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}