/* Gör en komponent med en progress bar och några checkboxar. 
När man klickar i en checkbox animerar vi att progressbaren 
går upp ett steg. När alla checkboxar är iklickade så är baren full. 
Klickar man ur animerar vi att baren krymper ner ett steg. */

import { useState } from "react";
import "./ProgressBar.scss";

const ProgressBar = () => {
  const [width, setWidth] = useState<string>("0%");

  return (
    <div className="ProgressBar">
      <h1>ProgressBar</h1>
      <div className={`theProgressbar-Box`}>
        <div className="theProgress" style={{ width: width }}></div>
      </div>
      <div className="checkbox-Box">
        <div className="Done25">
          <label htmlFor="Done25">
            <input
              type="checkbox"
              id="Done25"
              onClick={() => {
                setWidth("25%");
              }}
            />
            25% avklarat
          </label>
        </div>
        <div className="Done50">
          <label htmlFor="Done50">
            <input type="checkbox" id="Done50" />
            50% avklarat
          </label>
        </div>
        <div className="Done75">
          <label htmlFor="Done75">
            <input type="checkbox" id="Done75" />
            75% avklarat
          </label>
        </div>
        <div className="Done100">
          <label htmlFor="Done100">
            <input type="checkbox" id="Done100" />
            100% avklarat
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
