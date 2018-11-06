import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ListItem from './ListItem.jsx';

const SideMenu = ({ categories, onChange }) => {
  console.log(categories);
  const list_categories = categories.map(category => (
    <ListItem
      category={category.category}
      id={category.id}
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
