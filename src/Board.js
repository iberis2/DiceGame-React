import { Fragment } from "react";
import Dice from "./Dice";

function Board({ name, color, num, sum, gameHistory }) {
  return (
    <Fragment>
      <h2>{name}</h2>
      <Dice color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <p>{gameHistory.join(", ")}</p>
    </Fragment>
  );
}

export default Board;
