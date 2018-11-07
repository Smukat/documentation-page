// Import Section
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import data from './data/data.json';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Main from './components/Main';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    // {data} is the json object that will give all the information to the app.
    // {active_category_id} will identify the section the user is visiting based on the key of the {data} given.
    // Objects in the json file start at "1". -1 in active category means there is no active category.
    this.state = {
      data,
      active_category_id: -1,
      active_article_id: -1
    };
    this.updateActiveCategory = this.updateActiveCategory.bind(this);
  }
  // It returns an array of all the articles found in {data} json.
  getAllArticles() {
    const articles = Object.values(this.state.data).map(object => (
      object.articles
    ));
    return articles.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
  }
  //Using the SideMenu or the Navbar buttons, update the {active_category_id}
  updateActiveCategory(category_id, article_id) {
    this.setState({
      active_category_id: category_id,
      active_article_id: article_id
    });
  }

  render() {
    // Destructuring
    const { data, active_category_id, active_article_id } = this.state;

    // Create an array of the {categories} thay will show in the <Navbar> and the <Sidemenu>.
    const categoriesName = Object.values(data).map(object => (
      { id: object.id, category: object.category, articles: object.articles}));

    // Based on the category that has been selected in the menus, render a {sectionTitle} in <MainHeader>.
    const sectionTitle = (active_category_id > 0) ? data[active_category_id].category : "Articles";

    // Create an array of {articles} to show in the main component based on the active state of the category..
    const articles = (active_category_id === -1) ? this.getAllArticles() :
      (active_article_id === -1) ? data[active_category_id].articles : data[active_category_id].articles.filter(article => article.id === active_article_id);

    return (
      <div>
        <Header categories={categoriesName} />
        <div className="main-wrapper">
          <SideMenu categories={categoriesName} onChange={this.updateActiveCategory} />
          <Main articles={articles} section={sectionTitle} />
        </div>
      </div>
    );
  }
}
export default App;
