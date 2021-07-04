import { Component } from "react";

class VistaTlfn extends Component {
  render() {
    return(
      <div className="proyecto"> 
        <img src="/proyecto6.jpg" className="img-proyecto"/>
        <div className="proyecto__der">
          <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual </p>
          <h3>Tecnologias usadas</h3>
          <ul>
            <li>Tecnologia 1</li>
            <li>Tecnologia 2</li>
            <li>Tecnologia 3</li>
          </ul>
          <h3>Visita el proyecto</h3>
          <div className="visita"> 
            <img src="/open.svg" alt="Abrir en otro pagina" title="Abrir en otro pagina" />
            <img src="/github.svg" alt="Abrir en otro pagina" title="Abrir en otro pagina" fill="#3B4358"/>
          </div>
          
        </div>

        <style jsx>{`
          .proyecto {
            display: grid;
            grid-template-columns: 45% auto;
            text-align: center;
          }

          .img-proyecto {
            width: 100%;
          }

          .proyecto__der {
            padding: .5rem;
          }

          h3 {
            font-size: 1.5rem;
            color: #3B4358;
          }

          ul {
            list-style-type: none;    
            padding-inline-start: 0px;
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

export default VistaTlfn;