import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    // Update that fish
    // Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateFish(this.props.index, updatedFish)
  };
  render() {
    return <div className="fish-edit">
      <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name}/>
      <input name="price" type="text" onChange={this.handleChange} value={this.props.fish.price}/>
      <select name="status" type="text" onChange={this.handleChange} value={this.props.fish.status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" type="text" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
      <input name="image" type="text" onChange={this.handleChange} value={this.props.fish.image}/>
    </div>
  }
}

export default EditFishForm;
