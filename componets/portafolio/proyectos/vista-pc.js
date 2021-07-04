import { Component } from "react";

class VistaPc extends Component {
  render() {
    return(
      <div className="proyecto">
        <img className="img-proyecto" src="/proyecto6-pc.jpg" alt="Poryecto de la vista de pc"/>
        
        <div className="texto">


          <div>
            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual </p>
          </div>

          <div>
            <h3>Tecnologias usadas</h3>
            <ul>
              <li>Tecnologia 1</li>
              <li>Tecnologia 2</li>
              <li>Tecnologia 3</li>
            </ul>
          </div>

          <div className="visita-div">
            <h3>Visita el proyecto</h3>
            <div className="visita"> 
              <img src="/open.svg" alt="Abrir en otro pagina" title="Abrir en otro pagina" />
              <img src="/github.svg" alt="Abrir en otro pagina" title="Abrir en otro pagina" fill="#3B4358"/>
            </div>
          </div>


        </div>
        <style jsx>{`
          .proyecto {
            text-align: center;
          }

          h3 {
            font-size: 1.5rem;
            color: #3B4358;
            margin-block-start: 0;
            margin-block-end: 0;
          }

          .img-proyecto {
            grid-area: img;
            width: 100%;
          }

          .texto {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
              "des tec"
              "vis vis";
            padding: .5rem;
          }

          p {
            margin-block-start: 0;
            margin-block-end: 0;
          }

          ul {
            list-style-type: none;    
            padding-inline-start: 0px;
          }

          .visita-div{
            grid-area: vis;
          }

          .visita {
            display: contents;
            align-items: center;
          }

          .visita img {
            margin: 0 1rem;
            width: 2.7rem;
          }

        `}</style>
      </div>
    )
  }
}

export default VistaPc;