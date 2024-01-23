import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);

  const getSetData = async () => {
    const response = await axios.get(url);
    setData([...data, { ...response.data, id: uuid() }]);
  };

  const clearData = () => {
    setData([]);
  };

  return [data, getSetData, clearData];
};

export default useAxios;
