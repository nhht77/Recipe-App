import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeList.css';

import Recipe from './Recipe';

class RecipeList extends Component {
  
  static PropTypes = {
    recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func
  }

  render() {
    const recipes = this.props.recipes.map((r,index) => (
      <Recipe onDelete={this.props.onDelete} key={r.id} {...r} />
    ));
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
}

export default RecipeList;
