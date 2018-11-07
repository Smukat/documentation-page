import React from 'react';
import { ListGroup } from 'reactstrap';
import ListItem from './ListItem.jsx';
import Subcategory from './Subcategory';
import Article from './Article.jsx';

const SideMenu = ({ categories, onChange }) => {
  console.log(categories);

  //Create a <ListItem> component for each {category}
  const list_categories = categories.map((category) => {
    return (
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
  );
});

  return (
    <aside>
      <ListGroup>{list_categories}</ListGroup>
    </aside>
  );
};

export default SideMenu;
