import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeList.css';

import Recipe from './Recipe';

class RecipeList extends Component {
  
  static PropTypes = {
    recipe: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe key={r.id} {...r} />
    ));
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
