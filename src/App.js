import React, { useContext } from "react";
import { ReactQueryDevtools } from "react-query-devtools";

import { SelectedMovieContext } from "./contexts/selectedMovie";
import SelectMovie from "./SelectMovie";
import OpeningCrawl from "./OpeningCrawl";
import CharacterList from './Characters';
import "./App.css";

function App() {
  const [selectedMovie] = useContext(SelectedMovieContext);

  return (
    <React.Fragment>
      <div className="App">
        <div className="App-header">
          <SelectMovie />
          {selectedMovie && <OpeningCrawl />}
          {selectedMovie && <CharacterList />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </React.Fragment>
  );
}

export default App;
