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
    this.state = {
      data,
      active_category_id: -1,
    };
    this.updateActiveCategory = this.updateActiveCategory.bind(this);
  }

  getAllArticles() {
    const articles = Object.values(this.state.data).map(object => (
      object.articles
    ));
    return articles.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
  }

  updateActiveCategory(category_id) {
    this.setState({
      active_category_id: category_id,
    });
  }

  render() {
    const { data, active_category_id } = this.state;
    // Create an array with the category thay will show in the navbar and the sidemenu.
    const categories = Object.values(data).map(object => (
      { id: object.id, category: object.category }));

    // Create an array of articles to show in the main component.
    console.log('ID:' + active_category_id);
    const articles = (active_category_id === -1) ? this.getAllArticles() : data[active_category_id].articles;
    console.log(articles);
    return (
      <div>
        <Header categories={categories} />
        <div className="main-wrapper">
          <SideMenu categories={categories} onChange={this.updateActiveCategory} />
          <Main articles={articles} categories={categories} />
        </div>
      </div>
    );
  }
}
export default App;
