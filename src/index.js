import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SelectedMovieContextProvider } from "./contexts/selectedMovie";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <SelectedMovieContextProvider selectedMovie={null}>
      <App />
    </SelectedMovieContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
