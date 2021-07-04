import { Component } from "react";

import VistaTlfn from "./vista-tlfn";
import VistaPc from "./vista-pc";

class AdminProyecto extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let proyectos = this.props.proyectos.map((proyecto) => 
      <VistaTlfn key={proyecto.nombre} proyecto={proyecto} />
    )

    return(
      <div>
        {proyectos}

        <style jsx>{`
          div {
            height: 475px
          }
        `}</style>
      </div>
    )
  }
}

export default AdminProyecto;