import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import data from './data/data.json';
import Header from './components/Header.jsx';
import SideMenu from './components/SideMenu.jsx';
import Main from './components/Main.jsx';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  render() {
    const { data } = this.state;
    // Create an array with the category thay will show in the navbar and the sidemenu.
    const categories = Object.values(data).map(object => (
      { id: object.id, category: object.category }));

    // Create an array of articles to show in the main component.
    let articles = Object.values(data).map(object => (
      object.articles
    ));
    articles = articles[0];

    return (
      <div>
        <Header categories={categories} />
        <div className="main-wrapper">
          <SideMenu categories={categories} />
          <Main articles={articles} />
        </div>
        
      </div>
    );
  }
}
export default App;
