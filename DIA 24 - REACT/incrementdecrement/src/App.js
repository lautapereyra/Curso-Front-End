/*import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const [x, setX] = useState(0);

  return (
    <div className="App">
      <p className="value">{x}</p>

      <div>
        <button onClick={() => setX(x + 1)}>Increment</button>
      </div>

      <div>
        <button onClick={() => setX(x - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;*/

import logo from './logo.svg';
import "./App.css";
import { useReducer, useState } from "react";


const incdecreducer = (state, action) => {

  if (action.payload) {
    return { x: state.x + action.payload };
  }

  if (action.type === 'increment') {
    return { x: state.x + 1 };
  }

  if (action.type === 'decrement') {
    return { x: state.x - 1 };
  }


  return state;
}

function App() {
  const [state, dispatch] = useReducer(incdecreducer, { x: 0 })

  return (
    <div className="App">
      <p className="value">{state.x}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>increment by 10</button>

    </div>
  );
}

export default App;