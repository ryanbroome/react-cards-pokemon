import React from "react";

import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className='PlayingCardList'>
      <h3>Pick a card, any card!</h3>
      <div>
        {/* addCard => setData  :  onClick below */}
        <button onClick={setCards}>Add a playing card!</button>
      </div>
      <div className='PlayingCardList-card-area'>
        {cards.map((cardData) => (
          <PlayingCard
            key={cardData.id}
            front={cardData.cards[0].image}
          />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
