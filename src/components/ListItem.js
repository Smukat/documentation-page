import React from 'react';
import { 
    ListGroupItem,
    ListGroup, } from 'reactstrap';

const ListItem = (props) => {
    return (
        <div>
            <ListGroupItem className="sideMenu-category"tag="a" href="#" action>{props.category}</ListGroupItem>
        
        </div>
       
    );
}

export default ListItem;