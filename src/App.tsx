import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ReactComponent as Pattern1 } from "./patterns/pattern-1.svg";
import { ReactComponent as Pattern2 } from "./patterns/pattern-2.svg";
import { Pattern } from "./patterns/Pattern";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Pattern PatternSource={Pattern1} colors={["red", "green", "blue"]} />
      <Pattern PatternSource={Pattern2} colors={["cornflowerblue"]} />
    </div>
  );
}

export default App;
