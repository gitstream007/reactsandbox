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

  handleClick = () => {
    console.log(this.state);
  }

  render() {
    const title = "Liste de consoles";
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleClick} >Click to say hello</button>
        <ul>
          {this.state.consoles.map(console => (
            <li>{console.nom}<button>suppr</button></li>))}
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
