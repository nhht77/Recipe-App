import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeList.css';

import Recipe from './Recipe';

class RecipeList extends Component {
  static defaultProps = {
      recipes:[
          {
            title : "Spaghetti",
            ingredients : ["Pasta", "8 cups of water", "1 box of spaghetti"],
            instruction : "Boil the pasta in the simmer and combine the pasta with sauce.",
            image : "img-1.jpg"
          },
          {
            title: "Milkshake",
            instruction: "Combine ice cream and milk.  Blend until creamy",
            ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
            image: "img-2.jpg"
          },
          {
            title: "Avocado Toast",
            instruction: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
            ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            image: "img-3.jpg"
          }
      ]
  }

  static propTypes = {
    recipe: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {recipes} = this.props;
    const rep = recipes.map( (r, idx) => {
        return <Recipe  key={idx} 
                        title={r.title} 
                        ingredients={r.ingredients} 
                        instruction={r.instruction} 
                        image={r.image} 
                />
    })
    return (
      <div className="recipe-list">
        {rep}
      </div>
    );
  }
}

export default RecipeList;
