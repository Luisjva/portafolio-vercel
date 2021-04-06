import React from "react"

class Proyectos extends React.Component {
  render() {
    return (
      <div className="proyectos">
        <h2>Proyectos</h2>
        <style jsx>{`
          .proyectos {
            grid-area: proyectos;
            background: linear-gradient(#394966, #4077d1);
            color:#fff;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, auto);
            grid-template-areas: 
              "tit"
              "proy1"
              "proy2";

          }

          .proyectos h2 {
            grid-area: tit;
            font-size: 2rem;
            text-align: center;
          } 

          @media screen and (min-width: 500px) {
            .proyectos {
              grid-area: proyectos;
              background: linear-gradient(#394966, #4077d1);
              height: 500px;
              grid-template-columns: 40px 1fr 2fr;
              grid-template-rows: auto;
              grid-template-areas: 
                "tit proy1 proy2";
              position: relative;
            }
          
            .proyectos h2 {
              position: absolute;
              transform: translate(-37%, 200%) rotate(-90deg);
              margin-block-start: 0;
              margin-block-end: 0;
              left: -100;
              top: 0;
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