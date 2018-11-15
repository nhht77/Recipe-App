import React, { Component } from 'react';
import './RecipeApp.css';

import NavBar from './Components/NavBar';
import Recipe from './Components/Recipe';

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
        <Recipe  
        title = "Spaghetti"
        ingredients = {["Pasta", "8 cups of water", "1 box of spaghetti"]}
        instruction = "Boil the pasta in the simmer and combine the pasta with sauce."
        image = "img-1.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
