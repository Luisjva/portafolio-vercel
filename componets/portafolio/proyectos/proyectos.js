import { Component } from "react";

import AdminProyecto from "./administrador-proyectos";

class Proyectos extends Component {
  render() {
    return(
      <div className="proyectos">
        <h2>Proyectos</h2>

        <AdminProyecto/>

        <style jsx>{`
          .proyectos {
            background: #DFE0E0
          }

          h2,
          h3 {
            color: #3B4358;
            font-size: 1.8rem;
            text-align: center;

            padding-top: 0.83em;
            
            margin-block-start: 0;
            margin-block-end: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Proyectos;