
function Card(props) {
  return (
    <div className="card">
      <img
        className="card-image"
        onClick={props.onClick}
        src={props.src}
        id={props.id}
        alt={props.name}></img>
    </div>
  );
}
export default Card;
