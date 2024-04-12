/* Gör en egen typ för State så att den är statisk och endast kan innehålla progress som är ett nummer */
 export type State = {
    progress:number,
};

/* Gör en egen typ för Action med en unionType, vilket innebär att Action kan vara antingen det ena eller det andra*/
export type Action = 
    |{type: typeof ACTIONS.ADD; payload:number}
    |{type: typeof ACTIONS.REMOVE; payload:number}
    |{type: typeof ACTIONS.RESET; payload:number};

//Skapar upp alla olika val jag vill kunna använda som action i switch-satsen
export const ACTIONS = {
    ADD: "add",
    REMOVE:"remove",
    RESET: "reset",
};

/* När jag kallar på dispatch (som är progressBarReducer-funktionen) skall följande ske.
En reducer tar alltid emot två properties, state (det nuvarande statet) samt en action (vad som skall hända) */
export const progressBarReducer = (state:State, action: Action) => {
    switch (action.type) {
        case ACTIONS.ADD:
           return {progress: state.progress + action.payload};
        case ACTIONS.REMOVE:
            return {progress: state.progress - action.payload};
        case ACTIONS.RESET:
            return {progress: state.progress - state.progress};
        default:
            return state;
    }
};