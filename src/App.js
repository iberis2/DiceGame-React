import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);

    setMyHistory([...myHistory, nextNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <FontAwesomeIcon icon={faDice} id="logo" />
      <h2>주사위 게임</h2>
      <div className="Button-container">
        <Button className="App-button" color="blue" onClick={handleRollClick}>
          던지기
        </Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>

      <div id="board">
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대방" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
