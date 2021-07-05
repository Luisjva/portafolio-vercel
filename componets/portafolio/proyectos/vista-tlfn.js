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


        <p className="p">{this.props.proyecto.descripcion}</p>

        <div className="tecnologias">
          <h3>Tecnologias</h3>
          <ul>
            {tecnologias}
          </ul>
        </div>
        
        <div className="visita"> 
          <h3>Visitar</h3>

          <a href={this.props.proyecto.github} target="_blank">
            <img src="/github.svg" alt="Abrir en otro pagina" title="Ver repositorio del proyecto en github" fill="#3B4358"/>
          </a>

          <a href={this.props.proyecto.link} target="_blank">
            <img src="/open.svg" alt="Abrir en otro pagina" title="Abrir proyecto en otra pagina" />
          </a>
        </div>
          

        <style jsx>{`
          .proyecto {
            display: grid;
            grid-template-columns: 45% auto;
            grid-template-rows: auto auto;
            grid-template-areas:
              "img txt"
              "vis tec";
            text-align: center;
            position: absolute;
            width: 80%;
            transition: .3s;
            z-index: 100;
          }

          .img-proyecto {
            grid-area: img;
            width: 100%;
          }
          
          .tecnologias {
            grid-area: tec;
          }

          .p {
            grid-area: txt;
            margin-left: .5rem;
          }

          h3 {
            font-size: 1.5rem;
            color: #3B4358;
            margin-block-start: .2rem;
            margin-block-end: .2rem;
          }

          ul {
            list-style-type: none;    
            padding-inline-start: 0px;
          }

          .visita {
            grid-area: vis;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
              "titu titu"
              "img1 img2";
          }

          .visita h3 {
            grid-area: titu;
          }

          .visita img {
            margin: 0 1rem;
            width: 2.2rem;
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

          @media screen and (min-width: 315px) {
            .proyecto {
              grid-template-rows: auto auto auto;
              grid-template-areas:
                "img txt"
                "img tec"
                "vis vis";
            }
          }

          @media screen and (min-width: 400px) {
            .proyecto {
              grid-template-rows: auto auto auto;
              grid-template-areas:
                "img txt"
                "img tec"
                "img vis";
            }
          }

          @media screen and (min-width: 600px) {
            .proyecto {
              grid-template-rows: repeat(5, auto);
              grid-template-areas:
                "img na1"
                "img txt"
                "img tec"
                "img vis"
                "img na2";
            }
          }
        `}</style>
      </div>
    )
  }
}

export default VistaTlfn;