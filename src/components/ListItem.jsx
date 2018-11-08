import React from 'react';
import { Consumer} from './Context/indexContext.jsx';
import { ListGroupItem } from 'reactstrap';

const ListItem = ({ index }) => (
  <Consumer>
    {({categoriesName, actions}) => (
      <ListGroupItem className="sideMenu-category" tag="a" href="#" action onClick={() => { actions.updateActiveCategory(categoriesName[index].id, -1)}}>{categoriesName[index].category}</ListGroupItem>
    )}
  </Consumer>
  
);


export default ListItem;
