/* Gör en egen typ för State så att den är statisk och endast kan innehålla progress som är ett nummer */
type State = {
    progress:number,
};

/* Gör en egen typ för Action med en unionType, vilket innebär att Action kan vara antingen det ena eller det andra*/
type Action = 
    |{type: typeof ACTIONS.ADD; payload:number}
    |{type: typeof ACTIONS.REMOVE; payload:number};

//Skapar upp alla olika val jag vill kunna använda som action i switch-satsen
const ACTIONS = {
    ADD: "add",
    REMOVE:"remove",
};

/* När jag kallar på dispatch (som är progressBarReducer-funktionen) skall följande ske.
En reducer tar alltid emot två properties, state (det nuvarande statet) samt en action (vad som skall hända) */
export const progressBarReducer = (state:State, action: Action) => {
    switch (action.type) {
        case ACTIONS.ADD:
           return {state: state.progress + action.payload};
        case ACTIONS.REMOVE:
            return {state: state.progress - action.payload};
        default:
            return state;
    }
};