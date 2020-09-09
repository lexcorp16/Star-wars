import React, { useContext } from "react";
import styled from "styled-components";

import { SelectedMovieContext } from "./contexts/selectedMovie";

const Crawl = styled.div`
  max-width: 60%;
  margin-bottom: 30px;
`;

const OpeningCrawl = () => {
  const [selectedMovie] = useContext(SelectedMovieContext);

  return (
    <Crawl>
      <span>{selectedMovie.opening_crawl}</span>
    </Crawl>
  );
};

export default OpeningCrawl;
