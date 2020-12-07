import React, { Component } from "react";
import axios from "axios";

// ****** Note from Joshua Lovins: modified this (PlantList.js) extensively
// for my execution of the filter stretch goal.
// My PlantList component has a dropdown that filters
// plants in PlantList based on difficulty 
// ('easy' or 'medium' or 'none'; defaults to 'none'). ******

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  state = {
    masterPlants: [],
    plants: [],
    filter: ""
  }

  componentDidMount(){
    axios.get("http://localhost:3333/plants")
      .then((resp) => {
        console.log(resp.data.plantsData);
        this.setState({
          masterPlants: resp.data.plantsData,
          plants: resp.data.plantsData
        });
      })
      .catch(err => console.log(err));
  }

  handleChange(event) {
    const filterVar =  event.target.value !== undefined ? event.target.value : "";
    console.log(filterVar);
    this.setState({
      filter: filterVar
    });
  }

  handleSubmit(event) {
    if (this.state.filter === "none" || this.state.filter === ""){
      this.setState({
        plants: this.state.masterPlants
      })
    } else {
      this.setState({
        plants: this.state.masterPlants.filter(plant => {
          return plant.difficulty === this.state.filter
        })
      });
    }
    event.preventDefault();
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  // ****** Note from Joshua Lovins: I changed stuff in render for my filter
  // functionality (for the stretch goal). Namely, I added a form above <main>
  // that filters plants based on difficulty ('easy' or 'medium' or 'none'; defaults
  // to 'none'). ******
  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>

      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Difficulty filter:
          <select value={this.state.value} onChange={this.handleChange.bind(this)}>
            <option value="none">none</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>

      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" data-testid="plant-card" key={plant.id}>            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
      </>
    );
  }
}
