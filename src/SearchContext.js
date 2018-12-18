import React from "react";

const SearchContext = React.createContext({
  location: "San Jose, CA",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  handleResetForm() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
