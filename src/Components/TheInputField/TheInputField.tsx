/* Gör en komponent med ett inputfält, knapp och punktlista. Knappen är disabled när 
inputfältet är tomt. När man skriver i inputfältet blir knappen aktiverad och detta synliggörs 
med en animation. Knappen har animationer vid hover och klick när den inte är disabled. 
När man klickar på knappen läggs det som står i inputfältet till som en punkt i listan. 
Varje punkt ska stylas som en box med ram. Ingen punkt (alltså själva punkten ⚫) från punktlistan 
utan bara en ruta med texten. När rutan läggs till ska den ha en animation. */

import { useState } from "react";
import "./TheInputField.scss";

const TheInputField = () => {
  //För att samla in vad som skrivs i inpitfältet
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="TheInputField">
      <div className="input-box">
        <input
          type="text"
          placeholder="Skriv något"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
          }}
        />
      </div>

      <div className="btn-box">
        <button className={`btn `} disabled={inputValue === ""}>
          klicka mig
        </button>
      </div>

      <div className="li-box">
        <ul>
          <li>en punkt</li>
        </ul>
      </div>
    </div>
  );
};

export default TheInputField;
