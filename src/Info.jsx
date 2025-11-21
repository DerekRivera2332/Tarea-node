import React from "react";
function Info() {
  return (
    <section className="intro">
      <h1>Run JavaScript Everywhere</h1>
      <p>
        Node.js® is a free, open-source, 
        cross-platform JavaScript runtime environment that lets developers create servers, 
        web apps, command line tools and scripts.
      </p>
      <div className="buttons">
        <button className="primary">Download</button>
        <button className="secondary">Documentation</button>
      </div>
    </section>
  );
}

export default Info;
