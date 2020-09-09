import { useState } from "react";

const useSelectedMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return {
    selectedMovie,
    setSelectedMovie,
  };
};

export default useSelectedMovie;
