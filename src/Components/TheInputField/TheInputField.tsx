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
        />
      </div>

      <div className="btn-box">
        <button className={`btn `} disabled={inputValue === ""}>
          {btnText}
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
