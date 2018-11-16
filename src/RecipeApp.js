import React, { Component } from 'react';
import './RecipeApp.css';

import NavBar from './Components/NavBar';
import RecipeList from './Components/RecipeList';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe:[
        {
          id: 0,
          title : "Spaghetti",
          ingredients : ["Pasta", "8 cups of water", "1 box of spaghetti"],
          instruction : "Boil the pasta in the simmer and combine the pasta with sauce.",
          image : "img-1.jpg"
        },
        {
          id: 1,
          title: "Milkshake",
          instruction: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          image: "img-2.jpg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instruction: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          image: "img-3.jpg"
        }
      ],
      nextRecipeId: 3,
    }
  }
  render() {
    
    return (
      <div className="App">
        <NavBar/>
        <RecipeList recipes={this.state.recipe}/>
      </div>
    );
  }
}

export default RecipeApp;
