import React, { useEffect, useState } from 'react';
import Card from './Card';
import images from '../images';
import Header from './Header'
function Game() {
  const [cards, setCards] = useState(images);
  const [status, setStatus] = useState("playing");
  const [score, setScore] = useState(1);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (score === cards.length) {
      setStatus('won');
      return;
    }
    if (score > highScore) setHighScore(score);

    let arr = [...cards];
    let shuffled = shuffle(arr);
    setCards(shuffled);
  }, [score]);

  function handleClick(e) {
    const clickedCard = images.find(
      (card) => card.id === Number.parseInt(e.target.id)
    );

    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      setScore(score + 1);
    } else {
      setStatus("lost")
    }
  }
  function resetCards() {
    images.forEach((card) => {
      card.clicked = false;
    });
  }
  function playAgain() {
    setStatus("playing")
    resetCards();
    setCards(images);
    setScore(1);
  }

  return (
    <div>
      <Header score={score} highScore={highScore}/>
      <div className="cards-container">
        <div className="card-grid">
          {cards.map((card) => {
            return (
              <Card
                onClick={handleClick}
                src={card.src}
                id={card.id}
                alt={card.name}
                key={card.id}
              />
            );
          })}
        </div>
      </div>

      {status != "playing"  && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => {
                playAgain();
              }}>
              &times;
            </span>
            <h1>You {status}! Close to play again.</h1>
          </div>
        </div>
      )}
    </div>
  );
}
export default Game;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
