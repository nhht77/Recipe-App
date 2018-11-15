import React, { Component } from 'react';
import './RecipeApp.css';

import NavBar from './Components/NavBar';
import RecipeList from './Components/RecipeList';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state={
      recipe:[]
    }
  }
  render() {

    return (
      <div className="App">
        <NavBar/>
        <RecipeList/>
      </div>
    );
  }
}

export default RecipeApp;
