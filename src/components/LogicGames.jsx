import React, { useState, useEffect } from "react";
const LogicGames = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const cardValues = ["🍎", "🍌", "🍇", "🍓", "🍍", "🍒", "🥝", "🍉"];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({ id: index, value, flipped: false }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || flippedCards.includes(card.id)) return;

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      const [firstCard, secondCard] = newFlippedCards.map((id) =>
        cards.find((c) => c.id === id)
      );

      if (firstCard.value === secondCard.value) {
        setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const isCardFlipped = (card) =>
    flippedCards.includes(card.id) || matchedCards.includes(card.id);

  return (
    <div className="logic-games-page bg-black min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mt-5 mb-6">Memory Match Game</h1>
      <p className="text-xl text-gray-600  text-center">
        Flip the cards to find matching pairs. Improve your memory and focus!{" "}
        <br /> This game helps improve memory, concentration, and cognitive
        skills by challenging players to find matching pairs.
      </p>
      <div className="flex">
        <div className="absolute top-90 left-15">
          <p className="text-lg">Moves: {moves}</p>
          <button
            onClick={initializeGame}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Restart Game
          </button>
        </div>
        <div className="game-board grid grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${
                isCardFlipped(card) ? "flipped" : ""
              } !w-45 !h-22 bg-white border border-gray-300 rounded-lg flex items-center justify-center cursor-pointer text-3xl`}
              onClick={() => handleCardClick(card)}
            >
              {isCardFlipped(card) ? (
                <span>{card.value}</span>
              ) : (
                <span>❔</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogicGames;
