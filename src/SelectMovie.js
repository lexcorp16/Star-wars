import React, { useContext } from "react";
import styled from "styled-components";

import useMovies from "./hooks/useMovies";
import { SelectedMovieContext } from "./contexts/selectedMovie";

const Select = styled.select`
  color: #ffe300;
  background: transparent;
  border: 2px solid #ffe300;
  border-radius: 5px;
  font-size: 14px;
  padding: 8px 5px;
  margin-bottom: 20px;

  &:active,
  &:focus {
    outline: none;
  }
`;

const SelectMovie = () => {
  const { data: movies, isLoading } = useMovies();
  const [, setSelectedMovie] = useContext(SelectedMovieContext);

  const handleChange = (event) => {
    const movie = movies.results.find(
      (movie) => movie.title === event.target.value
    );
    setSelectedMovie(movie);
  };

  return (
    <Select onChange={handleChange}>
      <option value="">
        {isLoading ? "Loading movies..." : "Select Movie"}
      </option>
      {!isLoading &&
        movies.results.map((movie) => {
          return (
            <option value={movie.title} key={movie.title}>
              {movie.title}
            </option>
          );
        })}
    </Select>
  );
};

export default SelectMovie;
