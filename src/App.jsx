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
    };
  }

  render() {
    const categories = Object.values(this.state.data).map(object => (
      { id: object.id, category: object.category }));

    return (
      <div>
        <Header categories={categories} />
        <SideMenu categories={categories} />
        <Main />
      </div>
    );
  }
}

export default App;
