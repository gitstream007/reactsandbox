import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

  state = {
    consoles: [
      {id: 1, nom: "Master System"},
      {id: 2, nom: "Megadrive"},
      {id: 3, nom: "Snes"},
      {id: 4, nom: "Arcade"}
    ]
  }

  render() {
    const title= "Liste de consoles";
    const element = <li>Test variable</li>
    return (
    <div>
      <h1>{title}</h1>
    <ul> 
      {element}
      <li> Master System <button>X</button></li>
      <li> Megadrive <button>X</button></li>
      <li> Snes <button>X</button></li>
      <li> Arcade <button>X</button></li>
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
