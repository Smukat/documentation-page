import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import { Consumer } from './Context/indexContext.jsx';

const Subcategory = ({ name, articleId, categoryId }) => (
  <Consumer>
    {({actions}) => (
      <ListGroupItem tag="a" href="#" action onClick={() => {actions.updateActiveCategory(categoryId, articleId)}}>{name}</ListGroupItem>
    )}
  </Consumer>
  
);

Subcategory.propTypes = {
  name: PropTypes.string.isRequired,
  articleId: PropTypes.number,
  categoryId: PropTypes.number,
};

export default Subcategory;