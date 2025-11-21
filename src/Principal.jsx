import React from "react";
import Info from "./Info";
import Ejemplo from "./Ejemplo";
import "./Principal.css";
function Main() {
  return (
    <main>
      <div className="card intro">
        <Info />
      </div>

      <div className="card example">
        <Ejemplo />
      </div>
    </main>
  );
}

export default Main;
