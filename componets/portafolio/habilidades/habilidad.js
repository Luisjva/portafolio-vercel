import { Component } from "react";

class Habilidad extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <li>
        {this.props.habilidad.habilidad}
        <div>
          <span className="movimiento"></span>
        </div>

        <style jsx>{`
          div {
            width: 100%;
            height: 1.2rem;
            display: inline-block;
            background: #fff;
            border: 2px solid #979184;
          }

          div span {
            width: ${this.props.habilidad.nivel}%;
            height: 100%;
            background: #979184;
            display: block;            
          }

          li {
            font-family: "Yanone Kaffeesatz", sans-serif;
            font-size: 1.3rem;
            width: 100%;
            margin-bottom: .3rem;

            display: grid;
            grid-template-columns: 30% auto;
          }

          .movimiento {
            animation-name: movimiento;
            animation-duration: ${this.props.habilidad.tiempo}s;
            animation-iteration-count: infinite;
          }
          
          @keyframes movimiento{
            0% {width: ${this.props.habilidad.nivel}%}
            50% {width: 100%}
            100% {width: ${this.props.habilidad.nivel}%}
          }
        `}</style>
      </li>
    )
  }
}

export default Habilidad;