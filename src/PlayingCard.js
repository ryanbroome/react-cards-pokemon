import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [faceUp, setFaceUp] = useFlip();

  return (
    <img
      src={faceUp ? front : back}
      alt='playing card'
      onClick={setFaceUp}
      className='PlayingCard Card'
    />
  );
}

export default PlayingCard;
