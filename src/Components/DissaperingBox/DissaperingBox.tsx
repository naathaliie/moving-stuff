/* Gör en komponent som är en ruta med kryss uppe i högra hörnet. 
När man klickar på krysset ska rutan försvinna med en animation.
 */
import { useState } from "react";
import "./DissaperingBox.scss";

const DissaperingBox = () => {
  const [hide, setHide] = useState(false);

  const handleOnClick = () => {
    setHide(true);
    console.log(hide);
  };

  return (
    <div className={`DissaperingBox ${hide && "hide"}`}>
      <div className="close-btn" onClick={handleOnClick}>
        X
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus enim
          ab hic! Ipsam earum, placeat ex recusandae, adipisci, doloribus
          provident delectus a fuga inventore quis. Voluptas et fugit illo
          dolorem?
        </p>
      </div>
    </div>
  );
};

export default DissaperingBox;
