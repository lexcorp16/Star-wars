import { useQuery } from "react-query";
import axios from "axios";

import { BASE_URL } from "../config";

const getMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/films`);
  return data;
};

const useMovies = () => {
  return useQuery("movies", getMovies);
};

export default useMovies;
