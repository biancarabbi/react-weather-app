import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="São Paulo" />
        <hr />
        <footer>
          this project was coded by Bianca Rabbi for{" "}
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            SheCodes
          </a>{" "}
          and hosted on{" "}
          <a href="https://fluffy-kitten-13b7a8.netlify.app/">Netlify</a>
          <p>
            open the repository{" "}
            <a
              href="https://github.com/biancarabbi"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
