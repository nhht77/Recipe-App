import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
  render() {
    const {title, instruction, image, ingredients} = this.props;
    const ing = ingredients.map( (val, idx) => {
        return <li key={idx}> {val} </li>
    })
    return (
        <div className="recipe-card">
        <div className="recipe-img-desc">
            <img src={image} alt={title} className="recipe-img" />
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
        </div>
        </div>
    );
  }
}

export default Recipe;
