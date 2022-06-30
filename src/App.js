import React from "react";
import {useSelector} from 'react-redux';
function App() {
  const counter = useSelector(state => state.counter);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Counter {counter} </h2>
    </div>
  );
}

export default App;
