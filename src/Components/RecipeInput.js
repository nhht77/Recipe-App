import React, { Component } from 'react';
import './RecipeInput.css';


class RecipeInput extends Component {
    static defaultProps = {
        onSave() {}
        }

    constructor(props){
        super(props);
        this.state={
            title:"",
            instruction:"",
            ingredients:[""],
            image:""
        }

      this.handleChange = this.handleChange.bind(this);
      this.handleChangeIng = this.handleChangeIng.bind(this);
      this.handleNewIngredient = this.handleNewIngredient.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
      this.setState({[e.target.name]: e.target.value});
  }

  handleChangeIng(e){
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({ingredients});
  }

  handleNewIngredient(e) {
    const {ingredients} = this.state;
    this.setState({ingredients: [...ingredients, '']});
  }

  handleSubmit(e){
      e.preventDefault();
      this.props.onSave({...this.state});
      this.setState({
          title:'',
          instruction:'',
          ingredients:[''],
          img:''
      })
  }

  render() {
      const {title, instruction, image, ingredients} = this.state;
      let input = ingredients.map( (ing, i ) => {
          return (
           <div>
            <label>
            {i+1 }.  
            </label>
            <input 
            type="text"
            name={`ingredient-${i}`}
            value={ing} 
            onChange={this.handleChangeIng} />
           </div>
          );
      })
      return (
        <div className="recipe-form-container">   
        <form className="recipe-form" onSubmit={this.handleSubmit}>
            <button
                type="button"
                className="close-button">
                X
            </button>

            <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" onChange={this.handleChange} value={title} />
            </div>
            
            <div className="form-group">
            <label>Image:</label>
            <input type="text" name="image" onChange={this.handleChange} value={image} />
            </div>
            
            <div className="form-group">
            <label>Instruction:</label>
            <textarea type="text" name="instruction" onChange={this.handleChange} value={instruction} />
            </div>
            
            <div className="form-group">
            <label>Ingredients:</label>
            {input}
            </div>

            <div className="form-group">
            <button
            type="button"
            onClick={this.handleNewIngredient}
            className="buttons">
            +
            </button>
            </div>

            <div className="form-group">
                <input className="buttons" type="submit" value="Submit" />
            </div>
        </form>
        </div>   
      );
  }
}

export default RecipeInput;
