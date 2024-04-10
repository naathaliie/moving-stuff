/* Gör en radio button med en animerad hover-effekt. 
Lägg till en till animation när man klickar på den och 
ytterligare ett utseende när den är iklickad. 
Med så mkt CSS som möjligt. */

import "./RadioButton.scss";

import { useState } from "react";

const RadioButton = () => {
  const [clickedRadioBtn, setClickedRadioBtn] = useState<string>("");
  const handleOnClick = () => {
    console.log("klick");
  };

  return (
    <div className="RadioButton">
      <form action="">
        <legend>Välj en dryck:</legend>

        <div>
          <input
            id="val1"
            type="radio"
            name="radioButton"
            className="input"
            onClick={handleOnClick}
          />
          <label htmlFor="val1">Kaffe</label>
        </div>
        <div>
          <input
            id="val2"
            type="radio"
            name="radioButton"
            className="input"
            onClick={handleOnClick}
          />
          <label htmlFor="val2">Te</label>
        </div>
        <div>
          <input
            id="val3"
            type="radio"
            name="radioButton"
            className="input"
            onClick={handleOnClick}
          />
          <label className="input" htmlFor="val3">
            Vatten
          </label>
        </div>
      </form>
    </div>
  );
};

export default RadioButton;
