import React from "react";

export default function Formulario() {
    return (
      <div className="contacto">
        <h2 id="contacta">Contacto</h2>
        <div className="contenedor-gmail">
           <h3 className="gmail">Luisjva16@gmail.com</h3>
        </div>
        <style jsx>{`
          .contacto {
            grid-area: contacto;
            margin-top: .5rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .contenedor-gmail {
            background: linear-gradient(to right, #373b44, #4286f4);
            padding-bottom: 4px;
            border-radius: 4px;
          }

          h3 {
            margin-block-start: 0;
            margin-block-end: 0;
            padding: 0 4px;
            background-color: #fff;
          }
        `} </style>
      </div>
    )
}

