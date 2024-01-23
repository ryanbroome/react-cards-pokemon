import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = () => {
  const [data, setData] = useState([]);
  const [urls, setUrls] = useState({
    cards: "https://deckofcardsapi.com/api/deck/new/draw/",
    pokemon: "https://pokeapi.co/api/v2/pokemon/",
  });

  const addPokemon = async (item = null) => {
    const response = await axios.get(urls["pokemon"] + item + "/");
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };

  const addCard = async () => {
    const response = await axios.get(urls["cards"]);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };

  const clearData = async () => {
    setData([]);
  };
  return [data, addPokemon, addCard, clearData];
};
export default useAxios;
