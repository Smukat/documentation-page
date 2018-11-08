import React from 'react';
import { ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import ListItem from './ListItem.jsx';
import Subcategory from './Subcategory';


const SideMenu = ({ categories }) => {
  
  // Create a <ListItem> component for each {category}
  const list_categories = categories.map((category, index) => (
      <div key={category.id}>
        <ListItem index={index} />

        {category.articles.map((article, index) => (
          <Subcategory name={article.title} key={article.id} categoryId={category.id} articleId={article.id} index={index} />
        ))}
      </div>
  ));

  return (
    <aside className="sideMenu">
      <ListGroup>{list_categories}</ListGroup>
    </aside>
  );
};

SideMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SideMenu;
