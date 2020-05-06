import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import MapChart from "./MapChart";
import ApexChart from "./radar.tsx"

function App() {
  return (
    <div>
      <ApexChart/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
