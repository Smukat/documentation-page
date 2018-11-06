import React from 'react';
import {
  ListGroupItem,
  ListGroup, } from 'reactstrap';

const ListItem = (props) => {
  return (
    <ListGroupItem className="sideMenu-category" tag="a" href="#" action onClick={() => {props.onClick(props.key)}}>{props.category}</ListGroupItem>
  );
}

export default ListItem;
