import React from "react";
import "./Ejemplo.css";

function Ejemplo() {
  return (
    <div className="example-card">
      
      <div className="example-tabs">
        <button>Create an HTTP Server</button>
        <button>Write Tests</button>
        <button>Read and Hash a File</button>
        <button>Streams Pipeline</button>
        <button>Work with Threads</button>
      </div>

      <pre>
{`// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with \`node server.mjs\``}
      </pre>

      <div className="example-footer">
        <span>JavaScript</span>
        <button className="copy-btn">Copiar</button>
      </div>
    </div>
  );
}

export default Ejemplo;
