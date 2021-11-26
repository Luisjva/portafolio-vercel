import { useContext, useEffect, useState } from "react";

import Proyecto from "./proyecto";
import { MedidasContext } from "../../../pages/_app";
import { listProyectos } from "../../../utilidades";

let contenedor;

export default function Proyectos() {
  const { width } = useContext(MedidasContext);
  const [widthAqui, setWidthAqui] = useState(null);
  const [nSliderActual, setNSliderActual] = useState(0);

  const flecha = (e) => {
    contenedor = document.querySelector(".proyectos-s");
    let widthA = contenedor.clientWidth;

    if (e.target.innerText == "❯") {
      let nuevoSliderActual = nSliderActual + 1;
      if (nSliderActual < listProyectos.length - 1) {
        contenedor.scroll(widthA * nuevoSliderActual, 0);
        setNSliderActual(nuevoSliderActual);
      } else {
        contenedor.scroll(widthA * (nuevoSliderActual - 0.5), 0);
        setTimeout(() => {
          contenedor.scroll(widthA * nSliderActual, 0);
        }, 400);
      }
    } else if (e.target.innerText == "❮") {
      if (nSliderActual > 0) {
        let nuevoSliderActual = nSliderActual - 1;
        contenedor.scroll(widthA * nuevoSliderActual, 0);
        setNSliderActual(nuevoSliderActual);
      }
    }
  };

  useEffect(() => {
    setWidthAqui(null);
    contenedor = document.querySelector(".proyectos-s");
    let titulo = document.querySelector(".titulo");
    setTimeout(() => {
      setWidthAqui(titulo.clientWidth);
      contenedor.scroll(nSliderActual * contenedor.clientWidth, 0);
    }, 200);
  }, [width]);

  return (
    <div className="proyectos__contenedor">
      <h2 className="titulo">Proyectos</h2>
      {nSliderActual !== 0 && (
        <div className="flecha-iz">
          <p onClick={(e) => flecha(e)}>&#10094;</p>
        </div>
      )}
      <div
        className="proyectos-s"
        /*onTouchEnd={(e) => touch(e)}
        onTouchStart={(e) => touch(e)}*/
      >
        {widthAqui != null &&
          listProyectos.map((proyecto) => {
            return (
              <Proyecto
                key={proyecto.id}
                width={widthAqui * 0.95}
                nombre={proyecto.nombre}
                tecnologias={proyecto.tecnologias}
                descripcion={proyecto.descripcion}
                github={proyecto.github}
                linkProyecto={proyecto.linkProyecto}
                img={proyecto.img}
                enProceso={proyecto.enProceso}
              />
            );
          })}
        <div style={{ width: widthAqui, height: "50px" }}></div>
      </div>
      {nSliderActual !== listProyectos.length - 1 && (
        <div className="flecha-de">
          <p onClick={(e) => flecha(e)}>&#10095;</p>
        </div>
      )}
      <style jsx>{`
        .proyectos__contenedor {
          background: linear-gradient(#373b44, #4077d1);
          border-radius: 10px;
          display: grid;
          grid-template-areas:
            "flecha-iz titulo    flecha-de"
            "flecha-iz proyectos flecha-de";
          grid-template-columns: 6% auto 6%;
          margin: 0.5rem;
          padding: 1rem;
        }

        h2 {
          color: #fff;
          font-size: 1.8rem;
          grid-area: titulo;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .proyectos-s {
          display: grid;
          grid-area: proyectos;
          grid-auto-flow: column;
          overflow-x: hidden;
          overflow-y: hidden;
          scroll-behavior: smooth;
          width: ${widthAqui * 0.95}px;
          margin: auto;
        }

        .proyectos-s::-webkit-scrollbar {
          display: none;
        }

        .flecha-iz {
          animation-duration: 0.5s;
          animation-name: fade;
          color: #fff;
          font-size: 2.7rem;
          grid-area: flecha-iz;
          margin: auto;
          margin-block-end: 0;
          margin-block-start: 0;
          position: relative;
          text-align: center;
          cursor: pointer;
        }

        .flecha-de {
          animation-duration: 0.5s;
          animation-name: fade;
          color: #fff;
          font-size: 2.7rem;
          grid-area: flecha-de;
          margin: auto;
          margin-block-end: 0;
          margin-block-start: 0;
          position: relative;
          text-align: center;
          cursor: pointer;
        }

        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .flecha-iz > p,
        .flecha-de > p {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
        }

        @media screen and (min-width: 450px) {
          .proyectos__contenedor {
            grid-template-columns: 6% auto 6%;
          }
        }

        @media screen and (min-width: 720px) {
          .proyectos__contenedor {
            margin-right: 5vw;
          }
        }

        @media screen and (min-width: 950px) {
          .proyectos__contenedor {
            margin-right: 10vw;
          }
        }
      `}</style>
    </div>
  );
}
