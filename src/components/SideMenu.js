import React from 'react';
import ListItem from './ListItem';
import { 
    ListGroup, } from 'reactstrap';

const SideMenu = ({categories, articles}) => {

    const list_categories = categories.map(category =>  
        <ListItem 
        category={category.category}
        key={category.id} />
        );

        
    return (
        <div>
        <ListGroup>
          { list_categories }
        </ListGroup>
        <p />
    </div>
    );
}
export default SideMenu;