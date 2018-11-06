import React from 'react';
import { ListGroup } from 'reactstrap';
import ListItem from './ListItem';

const SideMenu = ({ categories, onChange }) => {
  const list_categories = categories.map(category => (
    <ListItem
      category={category.category}
      key={category.id}
      onClick={onChange}
    />
  ));

  return (
    <aside>
      <ListGroup>{list_categories}</ListGroup>
      <p />
    </aside>
  );
};
export default SideMenu;
