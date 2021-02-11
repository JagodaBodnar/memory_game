import React, { useState } from "react";
import { cards } from "./cards";
import {
  StyledCard,
  StyledEndGameContainer,
  StyledGameContainer,
  StyledMovesNumber,
  StyledStartButton,
} from "./styles/MemoryGameStyles";

const MemoryGame = () => {
  const [deck, setDeck] = useState([...cards]);
  const [firstCard, setFirstCard] = useState([]);
  const [secondCard, setSecondCard] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [allCards] = useState([]);
  const [click, setClick] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showImg, setShowImg] = useState(false);
  const [matched, setMatched] = useState(0);

  const checkIfOneArrayIncludesOther = (arr, target) =>
    target.every((item) => arr.includes(item));

  const start = () => {
    setClick(false);
    setMoves(0);
    allCards.forEach((card) => {
      card.style.visibility = "visible";
      card.style.backgroundImage = ``;
    });
    setMatched(0);
    setShowImg(true);
    const sortTheDeck = deck.sort(() => Math.random() - 0.5);
    setDeck(sortTheDeck);
    setTimeout(() => {
      setClick(true);
      setShowImg(false);
    }, 5000);
  };

  const checkIfMatch = (e) => {
    if (click) {
      if (firstCard.length === 0) {
        firstCard.push(e.target.name);
        pickedCards.push(e.target);
        deck.map((card) => {
          if (card.name === e.target.name) {
            e.target.style.backgroundImage = `url(${card.image})`;
            e.target.setAttribute("disabled", "disabled");
          }
        });
      } else if (firstCard.length === 1 && secondCard.length === 0) {
        secondCard.push(e.target.name);
        pickedCards.push(e.target);
        allCards.push(...pickedCards);

        deck.map((card) => {
          if (card.name === e.target.name) {
            e.target.style.backgroundImage = `url(${card.image})`;
            e.target.setAttribute("disabled", "disabled");
          }
        });

        if (firstCard.length === 1 && secondCard.length === 1) {
          setClick(false);
          if (checkIfOneArrayIncludesOther(firstCard, secondCard)) {
            setTimeout(
              () =>
                pickedCards.forEach((item) => {
                  item.style.visibility = "hidden";
                  const increseMatched = matched + 1;
                  setMatched(increseMatched);
                  setClick(true);
                  item.removeAttribute("disabled");
                }),
              500
            );
          } else {
            setTimeout(
              () =>
                pickedCards.forEach((item) => {
                  item.style.backgroundImage = "";
                  setClick(true);
                  item.removeAttribute("disabled");
                }),
              500
            );
          }
          setPickedCards([]);
          setFirstCard([]);
          setSecondCard([]);
          const increaseMoves = moves + 1;
          setMoves(increaseMoves);
        }
      }
    }
  };

  return (
    <>
      <StyledMovesNumber>{moves}</StyledMovesNumber>
      {matched === 6 ? (
        <StyledEndGameContainer>
          <p>Congratulations!</p> <p>You solved it in {moves} moves.</p>
        </StyledEndGameContainer>
      ) : (
        <StyledGameContainer>
          {deck.map((card) => {
            return (
              <StyledCard
                name={card.name}
                key={card.id}
                item={card.image}
                showImg={showImg}
                style={{ backgroundImage: `url${card.image}` }}
                onClick={(e) => {
                  checkIfMatch(e);
                }}
              ></StyledCard>
            );
          })}
        </StyledGameContainer>
      )}
      <StyledStartButton onClick={start}>
        <span>Start</span>
      </StyledStartButton>
    </>
  );
};

export default MemoryGame;
