import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info-container">
      <h1>Run JavaScript<br />Everywhere</h1>

      <p>
        Node.js® is a free, open-source, cross-platform JavaScript runtime
        environment that lets developers create servers, web apps, command line
        tools and scripts.
      </p>

      <div className="info-buttons">
        <button className="btn-green">Get Node.js®</button>
        <button className="btn-gray">Get security support for EOL Node.js versions</button>
      </div>

      <div className="info-icons">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />

      </div>
    </div>
  );
}

export default Info;

