import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeList.css';

import Recipe from './Recipe';



class RecipeList extends Component {
  
  static PropTypes = {
    recipe: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const recipe = this.props.recipes.map( (r, idx) => {
        return <Recipe key={r.id} {...r}/>
    })
    return (
      <div className="recipe-list">
        {recipe}
      </div>
    );
  }
}

export default RecipeList;
