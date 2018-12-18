import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class Search extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                <span aria-label="search" role="img">
                  Location
                </span>
                <input
                  id="location"
                  onChange={context.handleLocationChange}
                  value={context.location}
                />
              </label>
              <label htmlFor="animal">
                <span aria-label="search" role="img">
                  Animal 🐶
                </span>
                <select
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                >
                  <option />
                  {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="breed">
                Breed
                <select
                  disabled={!context.breeds.length}
                  id="breed"
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <button>Submit</button>
              <button onClick={context.handleResetForm}>Reset</button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Search;
