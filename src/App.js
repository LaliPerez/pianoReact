import React, { useState } from "react";
import "./App.css";
import Key from "./Key";

const notes = [
  {
    nombre: "DO",
    link: require("./notes/do.wav"),
    tieneSostenido: true
  },
  {
    nombre: "RE",
    link: require("./notes/re.wav"),
    tieneSostenido: true
  },
  {
    nombre: "MI",
    link: require("./notes/mi.wav")
  },
  {
    nombre: "FA",
    link: require("./notes/fa.wav"),
    tieneSostenido: true
  },
  {
    nombre: "SOL",
    link: require("./notes/sol.wav"),
    tieneSostenido: true
  },
  {
    nombre: "LA",
    link: require("./notes/la.wav"),
    tieneSostenido: true
  },
  {
    nombre: "SI",
    link: require("./notes/si.wav")
  }
];

function App() {
  const [estaSonando, setEstaSonando] = useState(null);

  const handleClick = (nota) => {
    setEstaSonando(nota.nombre);
    const sonido = new Audio(nota.link);
    sonido.play();
    setTimeout(() => {
      setEstaSonando(null);
    }, 150);
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>
          Hecho con <span role="img">❤️</span> por Lau
        </h2>
        <div className="esta-sonando">{estaSonando && `suena ${estaSonando}`}</div>
      </div>
      <div className="contenedor">
        {notes.map((nota, i) => (
          <Key
            key={i}
            estaSonando={estaSonando}
            nota={nota}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
