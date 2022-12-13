import React from "react";
import pokemon from "./defaultDex"
import Pokedex from "./Pokedex"
import './App.css'

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
