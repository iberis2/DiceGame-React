import { Fragment } from "react";
import Dice from "./Dice";
import Button from "./Button";

function App() {
  return (
    <Fragment>
      <div>
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={5} />
    </Fragment>
  );
}

export default App;
