import { Component } from "react";

import Habilidad from "./habilidad";

class Habilidades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habilidades: [
        {
          habilidad: "HTML",
          // tiene que ser un numero entre el 0 y 100
          nivel: 93,
          tiempo: 3,
        },
        {
          habilidad: "CSS",
          nivel: 96,
          tiempo: 3,
        },
        {
          habilidad: "JavaScript",
          nivel: 90,
          tiempo: 3,
        },
        {
          habilidad: "React Js",
          nivel: 86,
          tiempo: 3,
        },
        {
          habilidad: "Next Js",
          nivel: 93,
          tiempo: 3,
        },
        {
          habilidad: "Git",
          nivel: 90,
          tiempo: 3,
        },
        {
          habilidad: "Angular",
          nivel: 80,
          tiempo: 3,
        },
        {
          habilidad: "Node Js",
          nivel: 84,
          tiempo: 3,
        },
        {
          habilidad: "PHP",
          nivel: 80,
          tiempo: 3,
        },
      ],
    };
  }

  componentDidMount() {
    let nuevoArray = [];
    for (let i = 0; i < this.state.habilidades.length; i++) {
      let seg = Math.floor(Math.random() * 5) + 5;

      nuevoArray.push({
        habilidad: this.state.habilidades[i].habilidad,
        nivel: this.state.habilidades[i].nivel,
        tiempo: seg,
      });
    }
    this.setState({ habilidades: nuevoArray });
  }

  render() {
    let habilidades = this.state.habilidades.map((habilidad) => (
      <Habilidad key={habilidad.habilidad} habilidad={habilidad} />
    ));

    return (
      <div>
        <h2>Habilidades</h2>
        <ul>{habilidades}</ul>
        <style jsx>{`
          div {
            text-align: center;
            position: relative;
            z-index: 200;
            width: 95%;
            margin: auto;
          }

          h2 {
            color: #979184;
            font-size: 1.8rem;
          }

          ul {
            list-style-type: none;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;
          }

          @media screen and (min-width: 720px) {
            div {
              margin-left: 10vw;
              margin-right: 1rem;
              width: auto;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Habilidades;
