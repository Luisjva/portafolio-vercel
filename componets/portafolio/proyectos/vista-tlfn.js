import { Component } from "react";

class VistaTlfn extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const tecnologias = this.props.proyecto.tecnologias.map((tecnologia) =>
     <li key={tecnologia} >{tecnologia}</li>
    );

    return(
      <div className={this.props.proyecto.actual ? "proyecto fade" : "proyecto fade none"}> 
        <img src={`/${this.props.proyecto.nombre}.jpg`} className="img-proyecto"/>
        <div className="proyecto__der">
          <p>{this.props.proyecto.descripcion}</p>
          <h3>Tecnologias</h3>
          <ul>
            {tecnologias}
          </ul>
          <h3>Visita el proyecto</h3>
          <div className="visita"> 
            
            <a href={this.props.proyecto.link}>
              <img src="/open.svg" alt="Abrir en otro pagina" title="Abrir proyecto en otra pagina" />
            </a>
            
            <a href={this.props.proyecto.github}>
              <img src="/github.svg" alt="Abrir en otro pagina" title="Ver repositorio del proyecto en github" fill="#3B4358"/>
            </a>
          </div>
          
        </div>

        <style jsx>{`
          .proyecto {
            display: grid;
            grid-template-columns: 45% auto;
            text-align: center;
            position: absolute;
            width: 80%;
            transition: .3s;
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

export default VistaTlfn;