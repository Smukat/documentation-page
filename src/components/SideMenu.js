import React from 'react';
import { ListGroup } from 'reactstrap';
import ListItem from './ListItem';

const SideMenu = ({ categories }) => {
  const list_categories = categories.map(category => (
    <ListItem category={category.category} key={category.id} />
  ));

  return (
    <div>
      <ListGroup>{list_categories}</ListGroup>
      <p />
    </div>
  );
};
export default SideMenu;
