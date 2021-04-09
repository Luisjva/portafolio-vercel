import React from "react"
import Proyecto1 from "./index/proyecto1"
import Proyecto2 from "./index/proyecto2"
import Proyecto3 from "./index/proyecto3"
import Proyecto4 from "./index/proyecto4"

class Proyectos extends React.Component {
  render() {
    return (
      <div className="proyectos">
        <h2>Proyectos</h2>
        <p>Si desea ver alguno de las proyectos completos, solo haga click</p>
        <Proyecto1/>
        <Proyecto2/>
        <Proyecto3/>
        <Proyecto4/>

        <style jsx>{`
          .proyectos {
            grid-area: proyectos;
            background: linear-gradient(#394966, #4077d1);
            height: 700px;
            display: grid;
            grid-template-columns: 40px 1fr 1fr;
            grid-template-rows: 1.4rem repeat(4, auto);
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
            color: #fff;
            text-align: center;
            grid-area: indic;
            margin-block-start: 0;
            margin-block-end: 0;
          }
        
          .proyectos h2 {
            position: absolute;
            transform: translate(-30%, 240%) rotate(-90deg);
            margin-block-start: 0;
            margin-block-end: 0;
            left: -100;
            top: 0;
            color: #fff;
            font-size: 2rem;
          }

          .proyecto1 {
            grid-area: proy1;
          }

          @media screen and (min-width: 500px) {
            .proyectos {
              grid-template-columns: 40px 2fr 1.5fr 1.5fr;
              grid-template-rows: 1.4rem auto auto;
              grid-template-areas: 
                "tit indic indic indic"
                "tit proy1 proy2 proy2"
                "tit proy1 proy3 proy4";
              height: 500px;
            }
          }

          @media screen and (min-width: 750px) {
            .proyectos {
              height: 600px;
            }

          }

          @media screen and (min-width: 900px) {
            .proyectos {
              grid-template-columns: 5% 2fr 1.5fr 1.5fr;
            }
          }

          @media screen and (min-width: 950px) {
            .proyectos {
              height: 650px;
            }
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