import { useQuery } from "react-query";
import axios from "axios";

const getCharacter = async (_, characterUrl) => {
  const { data } = await axios.get(characterUrl);
  return data;
};

const useCharacter = (characterUrl) => {
  return useQuery(['character', characterUrl], getCharacter);
};

export default useCharacter;
