import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired
      }

  render() {
    const {title, instruction, image, id, ingredients, onDelete} = this.props;
    const ing = ingredients.map( (val, idx) => {
        return <li key={idx}> {val} </li>
    })
    return (
        <div className="recipe-card">
        <div className="recipe-img">
            <img src={image} alt={title} />
        </div>
        <div className="recipe-content">
            <h2 className="recipe-title">{title}</h2>
            <h3>Ingredients</h3>
            <ul className="recipe-ingredients">
                {ing}
            </ul>
            <h3>Instruction</h3>
            <p className="recipe-instruction">
                {instruction}
            </p>
            <button type="button" onClick={() => onDelete(id)}>DELETE</button>
        </div>
        </div>
    );
  }
}

export default Recipe;
