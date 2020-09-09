import React, { createContext, useState } from "react";

export const SelectedMovieContext = createContext();

export const SelectedMovieContextProvider = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(props.selectedMovie);
  const selectedMovieContext = [selectedMovie, setSelectedMovie];

  return (
    <SelectedMovieContext.Provider value={selectedMovieContext}>
      {props.children}
    </SelectedMovieContext.Provider>
  );
};

export const { Consumer: SelectedMovieContextConsumer } = SelectedMovieContext;
