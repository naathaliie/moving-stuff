/* Gör en komponent som ser ut som en knapp men den 
fungerar mer som en checkbox. När man klickar i den 
får den en ny ram (eller något annat nytt utseende). 
En animation vid hover och en när man klickar. */
import { useState } from "react";
import "./DivButton.scss";

const DivButton = () => {
  const [clicked, setClicked] = useState(false);
  const [divText, setDivText] = useState("Klicka mig");
  return (
    <div className="DivButton">
      <div
        className={`fake-btn ${clicked && "clicked"}`}
        onClick={() => {
          setClicked(!clicked);
          if (divText === "Klicka mig") {
            setDivText("✔️");
          } else {
            setDivText("Klicka mig");
          }
        }}
      >
        {divText}
      </div>
    </div>
  );
};

export default DivButton;
