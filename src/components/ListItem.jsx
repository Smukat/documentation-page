import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
} from 'reactstrap';

const ListItem = ({ category, id, onClick }) => (
  <ListGroupItem className="sideMenu-category" tag="a" href="#" action onClick={() => { onClick(id)}}>{category}</ListGroupItem>
);

ListItem.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
