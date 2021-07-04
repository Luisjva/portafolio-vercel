import { Component } from "react";

import VistaTlfn from "./vista-tlfn";
import VistaPc from "./vista-pc";

class AdminProyecto extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let proyectosTlfn = this.props.proyectos.map((proyecto) => 
      <VistaTlfn key={proyecto.nombre} proyecto={proyecto} />
    )
    let proyectosPc = this.props.proyectos.map((proyecto) =>
      <VistaPc key={proyecto.nombre} proyecto={proyecto} />
    )

    return(
      <div className={this.props.vista?"div":"div div__pc" }>
        <div className={this.props.vista ? "fade" : "fade none"}>
          {proyectosTlfn}
        </div>
       
        <div className={!this.props.vista ? "fade":"fade none"}>
          {proyectosPc}
        </div>

        <style jsx>{`
          .div {
            height: 475px;
            transition: .3s;
          }

          .div__pc {
            height: 575px;
          }

          .div div {
            transition: .3s;
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

export default AdminProyecto;