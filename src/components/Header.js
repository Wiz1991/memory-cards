function Header({ score, highScore }) {
  return (
    <div className="header">
      <div className="title">Memory cards</div>
      <div className="scoreboard">
        <span className="score">Score: {score}</span>
        <span className="highscore">Highscore: {highScore}</span>
      </div>
    </div>
  );
}
export default Header;
