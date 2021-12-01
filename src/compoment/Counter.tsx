import React, { useReducer } from "react";
type CounterState = {
  count: number;
};
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
// 'Maimai99linhlinhllkka' : 'metoru',
// 'Maimai99linklinkllakas' :  'metoru',
// 'Maimai88linklinkllakas': 'metoru'
// 'Vdmanhh9' : tech
// '18011999' : agri
type CounterAction = UpdateAction | ResetAction;
const intialState = { count: 1 };
function Reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + action.payload };
    }
    case "decrement": {
      return { count: state.count - action.payload };
    }
    case "reset": {
      return intialState;
    }
    default :
    return state
  }
}
const Counter = () => {
    const [state,dispatch] = useReducer(Reducer,intialState)
  return <div>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type:'decrement',payload:20})}>ClickManh</button>
  </div>;
};

export default Counter;
