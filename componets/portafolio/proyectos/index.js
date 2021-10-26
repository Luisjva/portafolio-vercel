import { useContext, useEffect, useState } from "react";

import Proyecto from "./proyecto";
import { MedidasContext } from "../../../pages/_app";
import { listProyectos } from "../../../utilidades";

let contenedor;

export default function Proyectos() {
  const { width } = useContext(MedidasContext);
  const [maxScroll, setMaxScroll] = useState(0);
  const [touchInicio, setTouchInicio] = useState(undefined);
  const [scroll, setscroll] = useState(0);
  const [widthAqui, setWidthAqui] = useState(null);

  const touch = (e) => {
    if (e._reactName == "onTouchStart") {
      setTouchInicio(e.changedTouches[0].clientX);
    } else {
      //contenedor.scroll(maxScroll, 0);
      setTimeout(() => {
        cambiar(e.changedTouches[0].clientX);
      }, 200);
    }
  };

  const flecha = (e) => {
    if (
      e.target.innerHTML == "❯" &&
      scroll + widthAqui < maxScroll - widthAqui * 0.3
    ) {
      if (scroll + widthAqui * 0.5 < maxScroll) {
        let nuevoScroll = scroll + widthAqui * 0.95;

        setTimeout(() => {
          contenedor.scroll(nuevoScroll, 0);
        }, 200);

        setscroll(nuevoScroll);
      }
    } else {
      let nuevoScroll;
      if (scroll - widthAqui * 0.95 > 0) {
        nuevoScroll = scroll - widthAqui * 0.95;
      } else {
        nuevoScroll = 0;
      }
      setTimeout(() => {
        contenedor.scroll(nuevoScroll, 0);
      }, 200);

      setscroll(nuevoScroll);
      //Si no se hace suficiente scroll
    }
  };

  const cambiar = (fin) => {
    //Scroll para la derecha
    if (
      touchInicio > fin &&
      touchInicio - fin > widthAqui * 0.2 &&
      scroll + widthAqui /** 0.95*/ < maxScroll
    ) {
      let nuevoScroll = scroll + widthAqui * 0.95;

      setTimeout(() => {
        contenedor.scroll(nuevoScroll, 0);
      }, 200);

      setscroll(nuevoScroll);
      //Scroll para la izquierda
    } else if (touchInicio < fin && fin - touchInicio > widthAqui * 0.22) {
      let nuevoScroll;
      if (scroll - widthAqui * 0.95 > 0) {
        nuevoScroll = scroll - widthAqui * 0.95;
      } else {
        nuevoScroll = 0;
      }
      setTimeout(() => {
        contenedor.scroll(nuevoScroll, 0);
      }, 200);

      setscroll(nuevoScroll);
      //Si no se hace suficiente scroll
    } else {
      setTimeout(() => {
        contenedor.scroll(scroll, 0);
      }, 200);
    }
  };

  useEffect(() => {
    setWidthAqui(null);

    let titulo = document.querySelector(".titulo");
    contenedor = document.querySelector(".proyectos-s");

    let widthA = contenedor.clientWidth;

    setTimeout(() => {
      setWidthAqui(titulo.clientWidth);
      setMaxScroll(contenedor.scrollWidth - widthA);
    }, 100);
  }, []);

  useEffect(() => {
    setWidthAqui(null);

    let titulo = document.querySelector(".titulo");
    contenedor = document.querySelector(".proyectos-s");

    let widthA = contenedor.clientWidth;

    contenedor.scroll(0, 0);

    setTimeout(() => {
      setWidthAqui(titulo.clientWidth);
      setscroll(0);
      setMaxScroll(contenedor.scrollWidth - widthA);
    }, 100);
  }, [width]);

  return (
    <div className="proyectos__contenedor">
      <h2 className="titulo">Proyectos</h2>
      <div className="flecha-iz">
        <p onClick={(e) => flecha(e)} value="der">
          &#10094;
        </p>
      </div>
      <div
        className="proyectos-s"
        onTouchEnd={(e) => touch(e)}
        onTouchStart={(e) => touch(e)}
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
              />
            );
          })}
        <div style={{ width: widthAqui * 0.5 }}></div>
      </div>
      <div className="flecha-de">
        <p onClick={(e) => flecha(e)} value="izq">
          &#10095;
        </p>
      </div>
      <style jsx>{`
        .proyectos__contenedor {
          background: linear-gradient(#373b44, #4077d1);
          border-radius: 10px;
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
          overflow-x: scroll;
          overflow-y: hidden;
          scroll-behavior: smooth;
          width: ${widthAqui * 0.95}px;
          margin: auto;
        }

        .proyectos-s::-webkit-scrollbar {
          display: none;
        }

        .flecha-iz {
          color: #fff;
          display: none;
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
          color: #fff;
          display: none;
          font-size: 2.7rem;
          grid-area: flecha-de;
          margin: auto;
          margin-block-end: 0;
          margin-block-start: 0;
          position: relative;
          text-align: center;
          cursor: pointer;
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
            display: grid;
            grid-template-areas:
              "flecha-iz titulo    flecha-de"
              "flecha-iz proyectos flecha-de";
            grid-template-columns: 6% auto 6%;
          }

          .flecha-iz {
            display: block;
          }

          .flecha-de {
            display: block;
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
