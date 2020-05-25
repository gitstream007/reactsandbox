import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

  state = {
    consoles: [
      { id: 1, nom: "Master System" },
      { id: 2, nom: "Megadrive" },
      { id: 3, nom: "Snes" },
      { id: 4, nom: "Arcade" }
    ]
  }

  render() {
    const title = "Liste de consoles";
    const element = <li>Test variable</li>
    /* 
     const elements = [
         <li>first variable</li>,
         <li>second variable</li>,
         <li>third variable</li>
     ] 
     */
    const elements = this.state.consoles.map((console) =>
      <li>{console.nom}<button>X</button></li>
    )
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {elements}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter une console" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
