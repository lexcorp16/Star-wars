import React, { useContext } from "react";
import styled from "styled-components";

import useCharacter from "./hooks/useCharacter";
import { SelectedMovieContext } from "./contexts/selectedMovie";

const Table = styled.table`
  border-collapse: collapse;
  td,
  th {
    border: 3px solid #ffe300;
    padding: 1rem;
    min-width: 200px;
    text-align: left;
  }
`;

const Characters = () => {
  const [selectedMovie] = useContext(SelectedMovieContext);

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        {selectedMovie.characters.map((characterUrl) => {
          return (
            <tr key={characterUrl}>
              <Character characterUrl={characterUrl} />
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const Character = ({ characterUrl }) => {
  const { data: character, isLoading } = useCharacter(characterUrl);
  if (isLoading) {
    return (
      <React.Fragment>
        <td>loading...</td>
        <td>loading...</td>
        <td>loading...</td>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <td>{character.name}</td>
      <td>{character.gender}</td>
      <td>{character.height}</td>
    </React.Fragment>
  );
};

export default Characters;
