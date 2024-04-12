/* Gör en komponent som är en ruta med kryss uppe i högra hörnet. 
När man klickar på krysset ska rutan försvinna med en animation.

UTMANING: tänk Modal. Lägg rutan mitt på skärmen. 
Mörka ner allt utanför modalen och gör så att om man klickar 
utanför modalen (på det mörka) så stängs modalen.
 */
import { useEffect, useState } from "react";
import "./DissaperingBox.scss";

const DissaperingBox = () => {
  const [boxClassName, setboxClassName] = useState<string>("");
  //används för att starta useEffect vid klick
  const [removed, setRemove] = useState(false);

  useEffect(() => {
    if (removed === true) {
      setboxClassName("hide");

      setTimeout(() => {
        setboxClassName("deleted");
      }, 1000);
    }
  }, [removed]);

  const handleOnClick = () => {
    setRemove(true);
  };

  return (
    <div className={`DissaperingBox ${boxClassName}`}>
      <div className="close-btn" onClick={handleOnClick}>
        X
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur iiii adipisicing elit. Ducimus
          enim ab hic! Ipsam earum, placeat ex recusandae, adipisci, doloribus
          provident delectus a fuga inventore quis. Voluptas et fugit illo
          dolorem?
        </p>
      </div>
    </div>
  );
};

export default DissaperingBox;
