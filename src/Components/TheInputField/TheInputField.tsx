/* Gör en komponent med ett inputfält, knapp och punktlista. Knappen är disabled när 
inputfältet är tomt. När man skriver i inputfältet blir knappen aktiverad och detta synliggörs 
med en animation. Knappen har animationer vid hover och klick när den inte är disabled. 
När man klickar på knappen läggs det som står i inputfältet till som en punkt i listan. 
Varje punkt ska stylas som en box med ram. Ingen punkt (alltså själva punkten ⚫) från punktlistan 
utan bara en ruta med texten. När rutan läggs till ska den ha en animation. */

import { useState } from "react";
import "./TheInputField.scss";

const TheInputField = () => {
  //För att samla in vad som skrivs i inputfältet
  const [inputValue, setInputValue] = useState<string>("");
  //Ändra texten på knappen om den är aktiv eller inte
  const [btnText, setBtnText] = useState<string>("Inaktiv");
  const [collectedInputs, setCollectedinputs] = useState<string[]>([]);

  const handleClick = () => {
    setCollectedinputs([...collectedInputs, inputValue]);
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick(); // Anropa handleClick när Enter trycks
    }
  };

  return (
    <div className="TheInputField">
      <div className="input-box">
        <input
          type="text"
          placeholder="Skriv något"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setInputValue(value);
            setBtnText(value !== "" ? "Aktiv" : "Inaktiv");
          }}
          onKeyDown={handleKeyDown} // Lägg till onKeyDown-händelsen
        />
      </div>

      <div className="btn-box">
        <button
          className={`btn `}
          disabled={inputValue === ""}
          onClick={handleClick}
        >
          {btnText}
        </button>
      </div>

      <div className="li-box">
        <ul>
          {collectedInputs.map((input, i) => {
            return <li key={i}>{input}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TheInputField;
