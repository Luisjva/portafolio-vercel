import { Component } from "react";

import AdminProyecto from "./administrador-proyectos";

class Proyectos extends Component {
  constructor(props){
    super(props);
    this.siguiente = this.siguiente.bind(this);
    this.anterior = this.anterior.bind(this);
    this.state = {
      proyectos: [
        {
          actual: true,
          nombre: "proyecto6",
          link: "https://luisjva.github.io/weather-app/",
          github: "https://github.com/Luisjva/weather-app",
          tecnologias: [
            "React Js",
            "CSS"
          ],
          descripcion: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual"
        },
        {
          actual: false,
          nombre: "proyecto5",
          link: "https://wind-flame.vercel.app/",
          github: "https://github.com/Luisjva/Wind",
          tecnologias: [
            "Next Js",
            "CSS"
          ],
          descripcion: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual"
        },
        {
          actual: false,
          nombre: "proyecto3",
          link: "https://luisjva.github.io/Maqueta1/",
          github: "https://github.com/Luisjva/Maqueta1",
          tecnologias: [
            "HTML",
            "CSS"
          ],
          descripcion: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual"
        }
      ],
      proyectoActual: 0,
      //Si esta en TRUE es vista de tlfn y si esta en false es vista de PC
      vista: true
    };
  }

  componentDidMount() {

    this.timerID = setInterval(
      () => this.siguiente(),
      10000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  anterior() {
    clearInterval(this.timerID);
    let actual = this.state.proyectoActual - 1;
    let nuevo = []

    if (actual < 0) {
      actual = this.state.proyectos.length - 1;
    } 

    for(let i = 0; i < this.state.proyectos.length; i++) {
      if(i != actual){
        let cambio = {
          actual: false,
          nombre: this.state.proyectos[i].nombre,
          link: this.state.proyectos[i].link,
          github: this.state.proyectos[i].github,
          tecnologias: this.state.proyectos[i].tecnologias,
          descripcion: this.state.proyectos[i].descripcion
        }
        nuevo.push(cambio)
      }else{
        let cambio = {
          actual: true,
          nombre: this.state.proyectos[i].nombre,
          link: this.state.proyectos[i].link,
          github: this.state.proyectos[i].github,
          tecnologias: this.state.proyectos[i].tecnologias,
          descripcion: this.state.proyectos[i].descripcion
        }
        nuevo.push(cambio)
      }
    }

    this.setState({
      proyectoActual: actual,
      proyectos: nuevo
    })

    this.timerID = setInterval(
      () => this.siguiente(),
      10000
    );
  }
  
  siguiente() {
    clearInterval(this.timerID);
    let actual = this.state.proyectoActual + 1;
    let nuevo = []

    if (actual >= this.state.proyectos.length) {
      actual = 0
    } 

    for(let i = 0; i < this.state.proyectos.length; i++) {
      if(i != actual){
        let cambio = {
          actual: false,
          nombre: this.state.proyectos[i].nombre,
          link: this.state.proyectos[i].link,
          github: this.state.proyectos[i].github,
          tecnologias: this.state.proyectos[i].tecnologias,
          descripcion: this.state.proyectos[i].descripcion
        }
        nuevo.push(cambio)
      }else{
        let cambio = {
          actual: true,
          nombre: this.state.proyectos[i].nombre,
          link: this.state.proyectos[i].link,
          github: this.state.proyectos[i].github,
          tecnologias: this.state.proyectos[i].tecnologias,
          descripcion: this.state.proyectos[i].descripcion
        }
        nuevo.push(cambio)
      }
    }

    this.setState({
      proyectoActual: actual,
      proyectos: nuevo
    })

    this.timerID = setInterval(
      () => this.siguiente(),
      10000
    );
  }

  render() {
    return(
      <div className="proyectos">
        <h2>Proyectos</h2>

        <p onClick={this.anterior}>&#10094;</p>
        <AdminProyecto proyectos={this.state.proyectos}/>
        <p onClick={this.siguiente}>&#10095;</p>

        <style jsx>{`
          .proyectos {
            background: #DFE0E0;

            display: grid;
            grid-template-columns: 10% auto 10%;
            grid-template-rows: auto auto;
            grid-template-areas: 
              "titu titu titu"
              "fder proy fizq";
            position: relative;
          }

          h2 {
            grid-area: titu;
            color: #3B4358;
            font-size: 1.8rem;
            text-align: center;

            padding-top: 0.83em;
            
            margin-block-start: 0;
            margin-block-end: 0;
          }

          p {
            font-size: 2.5rem;
            margin: auto;
          }
        `}</style>
      </div>
    )
  }
}

export default Proyectos;