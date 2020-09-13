import React, { useContext } from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import styled from "styled-components";

import { SelectedMovieContext } from "./contexts/selectedMovie";
import SelectMovie from "./SelectMovie";
import OpeningCrawl from "./OpeningCrawl";
import CharacterList from "./Characters";
import logo from "./assets/star-wars-logo.png";
import "./App.css";

const Logo = styled.img`
  width: 500px;
  height: 250px;
  margin-top: 50px;
`;

function App() {
  const [selectedMovie] = useContext(SelectedMovieContext);

  return (
    <React.Fragment>
      <div className="App">
        <div className="App-header">
          <SelectMovie />
          {selectedMovie ? (
            <React.Fragment>
              <OpeningCrawl />
              <CharacterList />
            </React.Fragment>
          ) : (
            <Logo src={logo} alt="Star wars logo" />
          )}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </React.Fragment>
  );
}

export default App;
