import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
} from 'reactstrap';

const Subcategory = ({ name, id, category_id, onClick }) => (
  <ListGroupItem tag="a" href="#" action onClick={() => {onClick(category_id, id)}}>{name}</ListGroupItem>
);

Subcategory.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Subcategory;