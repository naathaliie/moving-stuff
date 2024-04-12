/* Gör en komponent med en progress bar och några checkboxar. 
När man klickar i en checkbox animerar vi att progressbaren 
går upp ett steg. När alla checkboxar är iklickade så är baren full. 
Klickar man ur animerar vi att baren krymper ner ett steg. */

import { useReducer, useState } from "react";
import "./ProgressBar.scss";
import { ACTIONS, progressBarReducer } from "./progressBarReducer";

const ProgressBar = () => {
  const [state, dispatch] = useReducer(progressBarReducer, { progress: 0 });

  //Kontrollerar om en checkbox blivit klickad/urklickad
  const [checked_A, setchecked_A] = useState(false);
  const [checked_B, setchecked_B] = useState(false);
  const [checked_C, setChecked_C] = useState(false);
  const [checked_D, setChecked_D] = useState(false);

  return (
    <div className="ProgressBar">
      <h1>ProgressBar</h1>
      <div className={`theProgressbar-Box`}>
        <div
          className="theProgress"
          style={{ width: `${state.progress}%` }}
        ></div>
      </div>
      <div className="checkbox-Box">
        <div className="Done25">
          <label htmlFor="Done25">
            <input
              type="checkbox"
              id="Done25"
              checked={checked_A}
              onClick={() => {
                setchecked_A(!checked_A);
                if (checked_A === false) {
                  dispatch({ type: ACTIONS.ADD, payload: 25 });
                } else {
                  dispatch({ type: ACTIONS.REMOVE, payload: 25 });
                }
              }}
            />
            A
          </label>
        </div>
        <div className="Done50">
          <label htmlFor="Done50">
            <input
              type="checkbox"
              id="Done50"
              checked={checked_B}
              onClick={() => {
                setchecked_B(!checked_B);
                if (checked_B === false) {
                  dispatch({ type: ACTIONS.ADD, payload: 25 });
                } else {
                  dispatch({ type: ACTIONS.REMOVE, payload: 25 });
                }
              }}
            />
            B
          </label>
        </div>
        <div className="Done75">
          <label htmlFor="Done75">
            <input
              type="checkbox"
              id="Done75"
              onClick={() => {
                setChecked_C(!checked_C);
                if (checked_C === false) {
                  dispatch({ type: ACTIONS.ADD, payload: 25 });
                } else {
                  dispatch({ type: ACTIONS.REMOVE, payload: 25 });
                }
              }}
            />
            C
          </label>
        </div>
        <div className="Done100">
          <label htmlFor="Done100">
            <input
              type="checkbox"
              id="Done100"
              onClick={() => {
                setChecked_D(!checked_D);
                if (checked_D === false) {
                  dispatch({ type: ACTIONS.ADD, payload: 25 });
                } else {
                  dispatch({ type: ACTIONS.REMOVE, payload: 25 });
                }
              }}
            />
            D
          </label>
        </div>
      </div>

      <button
        className="reset-btn"
        onClick={() => {
          dispatch({ type: ACTIONS.RESET, payload: 0 });
          setchecked_A(false);
          setchecked_B(false);
          setChecked_C(false);
          setChecked_D(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ProgressBar;
