import { Component } from "react";

class VistaPc extends Component {
  render() {
    let tecnologias = this.props.proyecto.tecnologias.map((tecnologia) => <li>{tecnologia}</li>)
    return(
      <div className={this.props.proyecto.actual ? " proyecto fade" : " proyecto fade none"}>
        <img className="img-proyecto" src={`/${this.props.proyecto.nombre}-pc.jpg`} alt="Poryecto de la vista de pc"/>
        
        <div className="texto">


          <div>
            <p>{this.props.proyecto.descripcion}</p>
          </div>

          <div>
            <h3>Tecnologias usadas</h3>
            <ul>
              {tecnologias}
            </ul>
          </div>

          <div className="visita-div">
            <h3>Visita el proyecto</h3>
            <div className="visita"> 

              <a href={this.props.proyecto.link}>
                <img src="/open.svg" alt="Abrir en otro pagina" title="Abrir en otro pagina" />
              </a>
              
              <a href={this.props.proyecto.github}>
                <img src="/github.svg" alt="Abrir en otro pagina" title="Abrir en otro pagina" fill="#3B4358"/>
              </a>
            </div>
          </div>


        </div>
        <style jsx>{`
          .proyecto {
            text-align: center;
            z-index: 100;
            position: absolute;
            transition: .3s;
            width: 80%;
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

          .fade {
            animation-name: fade;
            animation-duration: .5s;
          }

          .none {
            opacity: 0;
            z-index: 0;
          }
          
          @keyframes fade{
            from {opacity: .4}
            to {opacity: .1}
          }
        `}</style>
      </div>
    )
  }
}

export default VistaPc;