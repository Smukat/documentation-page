import React from 'react';
import { ListGroup } from 'reactstrap';
import PropTypes from 'prop-types';
import ListItem from './ListItem.jsx';
import Subcategory from './Subcategory';

const SideMenu = ({ categories, onChange }) => {

  // Create a <ListItem> component for each {category}
  const list_categories = categories.map(category => (
      <div key={category.id}>
        <ListItem
          category={category.category}
          id={category.id}
          onClick={onChange}
        />
        {category.articles.map(article => (
          <Subcategory name={article.title} key={article.id} category_id={category.id} id={article.id} onClick={onChange} />
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
  onChange: PropTypes.func.isRequired,

};
export default SideMenu;
