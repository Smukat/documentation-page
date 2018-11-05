import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import data from './data/data.json';
import Header from './components/Header';
import './App.css';
import SideMenu from './components/SideMenu';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      data: data,
    };
  }
  render() {
    const categories = Object.values(this.state.data).map(object => {
      return {id: object.id, category: object.category}
    });

    
    return (
      <div>
        <Header categories={ categories }/>
        <SideMenu categories={ categories } />
      </div>
    );
  }
}

export default App;
