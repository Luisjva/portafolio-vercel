import { Component } from "react";

import AdminProyecto from "./administrador-proyectos";

class Proyectos extends Component {
  constructor(props) {
    super(props);
    this.siguiente = this.siguiente.bind(this);
    this.anterior = this.anterior.bind(this);
    this.vistaTlfn = this.vistaTlfn.bind(this);
    this.vistaPc = this.vistaPc.bind(this);
    this.state = {
      proyectos: [
        //El primer objeto tiene que estar en TRUE
        {
          actual: true,
          nombre: "proyecto6",
          link: "https://luisjva.github.io/weather-app/",
          github: "https://github.com/Luisjva/weather-app",
          tecnologias: ["React Js", "CSS", "API de weatherbit.io"],
          descripcion:
            "Una aplicación del clima que muestra información del tiempo actual en 5 ciudades. La aplicación fue creada con React y la ayuda de la API de weatherbit.io.",
        },
        {
          actual: false,
          nombre: "proyecto3",
          link: "https://luisjva.github.io/Maqueta1/",
          github: "https://github.com/Luisjva/Maqueta1",
          tecnologias: ["HTML", "CSS"],
          descripcion:
            "Esta maqueta de un sitio web simple fue creada con solo HTML y CSS.",
        },
        {
          actual: false,
          nombre: "proyecto2",
          link: "http://a2ndocean.herokuapp.com/",
          github: "https://github.com/Luisjva/2ndOcean",
          tecnologias: ["Node Js", "Express Js"],
          descripcion:
            "Es un blog donde se puede navegar entre varias publicaciones, creado con Express Js con el motor de plantilla Pug.",
        },
        {
          actual: false,
          nombre: "proyecto1",
          link: "https://luisjva.github.io/tren-en-linea/",
          github: "https://github.com/Luisjva/tren-en-linea",
          tecnologias: ["HTML", "CSS", "JavaScript"],
          descripcion:
            "Juego de tres en línea creado con HTML, CSS y JavaScript, con la finalidad de practicar lógica de programación en el front-end. ",
        },
        {
          actual: false,
          nombre: "proyecto4",
          link: "https://portafolio-kappa.vercel.app/portafolio",
          github: "https://github.com/Luisjva/portafolio-vercel",
          tecnologias: ["Next Js"],
          descripcion: "Mi portafolio (Esta página), fue creado con Next Js.",
        },
      ],
      proyectoActual: 0,
      //Si esta en TRUE es vista de tlfn y si esta en false es vista de PC
      vista: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.siguiente(), 10000);

    if (window.innerWidth >= 720) {
      this.setState({ vista: false });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  vistaTlfn() {
    clearInterval(this.timerID);

    this.setState({
      vista: true,
    });

    this.timerID = setInterval(() => this.siguiente(), 10000);
  }

  vistaPc() {
    clearInterval(this.timerID);

    this.setState({
      vista: false,
    });

    this.timerID = setInterval(() => this.siguiente(), 10000);
  }

  anterior() {
    clearInterval(this.timerID);
    let actual = this.state.proyectoActual - 1;
    let nuevo = [];

    if (actual < 0) {
      actual = this.state.proyectos.length - 1;
    }

    for (let i = 0; i < this.state.proyectos.length; i++) {
      if (i != actual) {
        let cambio = {
          actual: false,
          nombre: this.state.proyectos[i].nombre,
          link: this.state.proyectos[i].link,
          github: this.state.proyectos[i].github,
          tecnologias: this.state.proyectos[i].tecnologias,
          descripcion: this.state.proyectos[i].descripcion,
        };
        nuevo.push(cambio);
      } else {
        let cambio = {
          actual: true,
          nombre: this.state.proyectos[i].nombre,
          link: this.state.proyectos[i].link,
          github: this.state.proyectos[i].github,
          tecnologias: this.state.proyectos[i].tecnologias,
          descripcion: this.state.proyectos[i].descripcion,
        };
        nuevo.push(cambio);
      }
    }

    this.setState({
      proyectoActual: actual,
      proyectos: nuevo,
    });

    this.timerID = setInterval(() => this.siguiente(), 10000);
  }

  siguiente() {
    clearInterval(this.timerID);
    let actual = this.state.proyectoActual + 1;
    let nuevo = [];

    if (actual >= this.state.proyectos.length) {
      actual = 0;
    }

    for (let i = 0; i < this.state.proyectos.length; i++) {
      if (i != actual) {
        let cambio = {
          actual: false,
          nombre: this.state.proyectos[i].nombre,
          link: this.state.proyectos[i].link,
          github: this.state.proyectos[i].github,
          tecnologias: this.state.proyectos[i].tecnologias,
          descripcion: this.state.proyectos[i].descripcion,
        };
        nuevo.push(cambio);
      } else {
        let cambio = {
          actual: true,
          nombre: this.state.proyectos[i].nombre,
          link: this.state.proyectos[i].link,
          github: this.state.proyectos[i].github,
          tecnologias: this.state.proyectos[i].tecnologias,
          descripcion: this.state.proyectos[i].descripcion,
        };
        nuevo.push(cambio);
      }
    }

    this.setState({
      proyectoActual: actual,
      proyectos: nuevo,
    });

    this.timerID = setInterval(() => this.siguiente(), 10000);
  }

  render() {
    return (
      <div className="proyectos">
        <h2 className="h2">Proyectos</h2>

        <div className="vistas">
          <img
            className={
              this.state.vista ? "vistas__img" : "vistas__img vistas__img__pc"
            }
            src="/bola.svg"
          />
          <button onClick={this.vistaTlfn}>Telefono</button>
          <button onClick={this.vistaPc}>Computadora</button>
        </div>

        <p className="fder" onClick={this.anterior}>
          &#10094;
        </p>

        <div className="proy">
          <AdminProyecto
            vista={this.state.vista}
            proyectos={this.state.proyectos}
          />
        </div>
        <p className="fizq" onClick={this.siguiente}>
          &#10095;
        </p>

        <style jsx>{`
          .proyectos {
            grid-area: proyectos;
            background: #dfe0e0;

            display: grid;
            grid-template-columns: 10% 80% 10%;
            grid-template-rows: auto auto auto;
            grid-template-areas:
              "titu titu titu"
              "vist vist vist"
              "fder proy fizq";
            position: relative;
            padding: auto;
          }

          .fder {
            grid-area: fder;
          }

          .fizq {
            grid-area: fizq;
          }

          .proy {
            grid-area: proy;
          }

          .vistas {
            grid-area: vist;
            margin: 1rem auto;
            position: relative;
          }

          .vistas button {
            background: none;
            border: none;
            font-size: 1.5rem;
            font-family: "Yanone Kaffeesatz", sans-serif;
            color: #3b4358;
            transition: 0.3s;
            position: relative;
            z-index: 10;
            margin: 0 0.7rem;
          }

          .vistas button:hover {
            background: #97918485;
          }

          .vistas__img {
            position: absolute;
            width: 2.5rem;
            left: 1rem;
            z-index: 0;
            transition: 0.3s;
          }

          .vistas__img__pc {
            left: 8.8rem;
            transition: 0.3s;
          }

          .h2 {
            grid-area: titu;
            color: #3b4358;
            font-size: 1.8rem;
            text-align: center;

            padding-top: 0.83em;

            margin-block-start: 0;
            margin-block-end: 0;
          }

          p {
            font-size: 2.5rem;
            margin: auto;
            cursor: pointer;
          }

          @media screen and (min-width: 720px) {
            .proyectos {
              /* Si cambias este valor tambien cambia el mismo en portafolio.js */
              min-height: 95vh;
              display: grid;
              grid-template-rows: repeat(3, auto);
              grid-template-areas:
                "no   na   nu"
                "titu titu titu"
                "vist vist vist"
                "fder proy fizq";
              margin-right: 10vw;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Proyectos;
