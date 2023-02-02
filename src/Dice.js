import diceBlue01 from "./assets/dice-blue-1.svg";
import diceBlue02 from "./assets/dice-blue-2.svg";
import diceBlue03 from "./assets/dice-blue-3.svg";
import diceBlue04 from "./assets/dice-blue-4.svg";
import diceBlue05 from "./assets/dice-blue-5.svg";
import diceBlue06 from "./assets/dice-blue-6.svg";
import diceRedO1 from "./assets/dice-red-1.svg";
import diceRedO2 from "./assets/dice-red-2.svg";
import diceRedO3 from "./assets/dice-red-3.svg";
import diceRedO4 from "./assets/dice-red-4.svg";
import diceRedO5 from "./assets/dice-red-5.svg";
import diceRedO6 from "./assets/dice-red-6.svg";

const Dice_Images = {
  blue: [
    diceBlue01,
    diceBlue02,
    diceBlue03,
    diceBlue04,
    diceBlue05,
    diceBlue06,
  ],
  red: [diceRedO1, diceRedO2, diceRedO3, diceRedO4, diceRedO5, diceRedO6],
};

function Dice({ color = "blue", num = "1" }) {
  const src = Dice_Images[color][num - 1];
  const alt = `${color} ${num}`;
  return <img src={src} alt={alt} />;
}

export default Dice;
