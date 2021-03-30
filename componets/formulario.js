import React from "react";

export default function Formulario  {

  render() {
    return (
      <div className="contacto">
        <h2 id="contacta">Contacto</h2>
        <style jsx>{`
          h2 {
            text-align: center;
          }

          .contacto {
            grid-area: contacto;
            margin-top: .5rem;
          }
        `} </style>
      </div>
    )
  }
}

