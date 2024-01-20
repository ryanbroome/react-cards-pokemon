import React, { useState } from "react";

const useFlip = () => {
  const [state, setState] = useState(true);

  const flip = () => {
    setState((up) => !up);
  };

  return [state, flip];
};

export default useFlip;
