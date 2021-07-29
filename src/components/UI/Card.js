import "./Card.css";
const Card = (props) => {
  //console.log(props);
  //Ova varijabla radi tako da već imamo clasu card
  //i zatim zbrajamo clasu card i dobivenu klasu iz komponente koju mjenjamo props.className
  //
  const classes = "card " + props.className; //ovdje je card + razmak
  return <div className={classes}>{props.children}</div>;
};

export default Card;
