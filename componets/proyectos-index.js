import React from "react"
import Slider from "./index/slider"

let proyectos ={
  proyecto1: {
    link: "https://luisjva.github.io/tren-en-linea/",
    nombre: "proyecto1"
  },
  proyecto2: {
    link: "http://a2ndocean.herokuapp.com/",
    nombre: "proyecto2"
  },
  proyecto3: {
    link: "https://luisjva.github.io/Maqueta1/",
    nombre: "proyecto3"
  },
  proyecto4: {
    link: "https://portafolio-kappa.vercel.app/",
    nombre: "proyecto4"
  },
  proyecto5: {
    link: "https://wind-flame.vercel.app",
    nombre: "proyecto5"
  },
  proyecto6: {
    link: "https://luisjva.github.io/weather-app/",
    nombre: "proyecto6"
  }
}

class Proyectos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slider1: {
        tipo: "telefono",
        posicion: "proy1",
        proyActual: proyectos.proyecto6
      },
      slider2: {
        tipo: "pc",
        posicion: "proy2",
        proyActual: proyectos.proyecto2
      },
      slider3: {
        tipo: "telefono",
        posicion: "proy3",
        proyActual: proyectos.proyecto5
      },
      slider4: {
        tipo: "telefono",
        posicion: "proy4",
        proyActual: proyectos.proyecto3
      },
    }
  }
  render() {
    return (
      <div className="proyectos">
        <h2>Proyectos</h2>
        <p>Si desea ver alguno de las proyectos completo, solo haga click</p>
        <Slider
          tipo={this.state.slider1.tipo}
          posicion={this.state.slider1.posicion}
          proyActual={this.state.slider1.proyActual}
        />
        <Slider
          tipo={this.state.slider2.tipo}
          posicion={this.state.slider2.posicion}
          proyActual={this.state.slider2.proyActual}
        />
        <Slider
          tipo={this.state.slider3.tipo}
          posicion={this.state.slider3.posicion}
          proyActual={this.state.slider3.proyActual}
        />
        <Slider
          tipo={this.state.slider4.tipo}
          posicion={this.state.slider4.posicion}
          proyActual={this.state.slider4.proyActual}
        />

        <style jsx>{`
          .proyectos {
            grid-area: proyectos;
            height: 700px;
            display: grid;
            grid-template-columns: 40px 1fr 1fr;
            grid-template-rows: 2.4rem repeat(4, auto);
            grid-template-areas: 
              "tit indic indic"
              "tit proy1 proy3"
              "tit proy1 proy4"
              "tit proy2 proy2"
              "tit proy2 proy2";
            position: relative;
            padding-top: 2rem;
          }

          .proyectos p {
            text-align: center;
            grid-area: indic;
            margin-block-start: 0;
            margin-block-end: 0;
          }
        
          .proyectos h2 {
            position: absolute;
            transform: translate(-22%, 290%) rotate(-90deg);
            margin-block-start: 0;
            margin-block-end: 0;
            left: -1.5%;
            top: 0;
            font-size: 2rem;
          }

          .proyecto1 {
            grid-area: proy1;
          }

          @media screen and (min-width: 500px) {
            .proyectos {
              grid-template-columns: 40px 2fr 1.5fr 1.5fr;
              grid-template-rows: 4% 48% 48%;
              grid-template-areas: 
                "tit indic indic indic"
                "tit proy1 proy2 proy2"
                "tit proy1 proy3 proy4";
              height: 500px;
            }

            .proyectos h2 {
              transform: translate(-20%, 265%) rotate(-90deg);
            }
          }

          @media screen and (min-width: 750px) {
            .proyectos {
              height: 700px;
            }

          }

          @media screen and (min-width: 900px) {
            .proyectos {
              grid-template-columns: 5% 2fr 1.5fr 1.5fr;
            }

            .proyectos h2 {
            transform: translate(-5%, 290%) rotate(-90deg);
          }

          @media screen and (min-width: 1200px) {
            .proyectos {
              width: 1200px;
              margin: auto;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Proyectos;