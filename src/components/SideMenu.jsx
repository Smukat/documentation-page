import React from 'react';
import { ListGroup } from 'reactstrap';
import ListItem from './ListItem';

const SideMenu = ({ categories }) => {
  const list_categories = categories.map(category => (
    <ListItem category={category.category} key={category.id} />
  ));

  return (
    <aside>
      <ListGroup>{list_categories}</ListGroup>
      <p />
    </aside>
  );
};
export default SideMenu;
