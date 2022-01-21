import { colores, listHabilidades } from "../../utilidades";
import ContImg from "./cont-img";
import { listProyectos } from "../../utilidades";

import { createContext, useEffect, useState } from "react";
import Link from "next/link";

export const OrdenContext = createContext();
export const MedidasContext = createContext();

export default function Proyectos() {
  const [orden, setOrden] = useState([]);
  const [alturaInfo, setAlturaInfo] = useState(380);
  const [medidas, setMedidas] = useState({ height: 500, width: 300 });
  const [cargandoInfo, setCargandoInfo] = useState(false);
  const [info, setInfo] = useState(0);
  let timerId;

  useEffect(() => {
    let ordenInicial = [];
    listProyectos.map((proyecto) => {
      ordenInicial.push(proyecto.id);
    });
    setOrden(ordenInicial);

    if (timerId) clearTimeout(timerId);

    let contenedor = document.querySelector(".contenedor__proyectos");
    setMedidas({
      height: contenedor.clientHeight,
      width: contenedor.clientWidth,
    });
    window.addEventListener("resize", () => {
      setAlturaInfo(innerWidth * 0.6 * 1.77);

      let contenedor = document.querySelector(".contenedor__proyectos");
      setMedidas({
        height: contenedor.clientHeight,
        width: contenedor.clientWidth,
      });
    });

    timerId = setTimeout(() => {
      reOrdenar(orden[1]);
    });
  }, []);

  useEffect(() => {
    for (let i = 0; i < listProyectos.length; i++) {
      if (orden[0] === listProyectos[i].id) {
        if (i !== info) {
          if (timerId) clearTimeout(timerId);

          setCargandoInfo(true);
          setTimeout(() => {
            setInfo(i);
            setCargandoInfo(false);
          }, 300);
          timerId = setTimeout(() => {
            reOrdenar(orden[1]);
          }, 10000);
        }
      }
    }
  }, [orden]);

  const reOrdenar = (nuevoInicial) => {
    if (orden.indexOf(nuevoInicial) !== 0) {
      let posicion = orden.indexOf(nuevoInicial);
      let nuevoOrden = [];

      for (let i = 0; i < listProyectos.length; i++) {
        nuevoOrden.push(orden[posicion]);

        posicion++;
        if (posicion === listProyectos.length) posicion = 0;
      }

      console.log(nuevoOrden);

      setOrden(nuevoOrden);
    }
  };

  return (
    <div className="contenedor__proyectos">
      <div className="contenido__proyectos">
        <OrdenContext.Provider value={{ orden, setOrden, reOrdenar }}>
          <MedidasContext.Provider value={{ medidas }}>
            <ContImg />
          </MedidasContext.Provider>
        </OrdenContext.Provider>
        <div className={cargandoInfo ? "info info--cargando" : "info"}>
          <h3>{listProyectos[info].nombre}</h3>
          <ul className="info-tecnologias">
            {listProyectos[info].tecnologias.map((tecnologia) => {
              return <li key={tecnologia}>{tecnologia}</li>;
            })}
          </ul>
          <p>{listProyectos[info].descripcion}</p>
          <div className="info__link">
            {listProyectos[info].enProceso ? (
              <a className="no-tocar">En proceso</a>
            ) : (
              <>
                <Link href={listProyectos[info].github}>
                  <a>Ver código</a>
                </Link>
                <Link href={listProyectos[info].linkProyecto}>
                  <a>Ver proyecto</a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .contenedor__proyectos {
          background: linear-gradient(
            90deg,
            ${colores.principal},
            ${colores.secundario}
          );
          height: 90vh;
          max-height: 650px;
          overflow: hidden;
          width: 100%;
        }

        .contenido__proyectos {
          width: 100%;
          max-width: 700px;
          margin: auto;
          height: 100%;
          position: relative;
        }

        /*info*/
        .info {
          padding: 0 10px;
          color: #fff;
          position: absolute;
          top: ${medidas.height * 0.67}px;
          max-height: ${medidas.height * 0.328}px;
          width: 100%;
          overflow: auto;
          opacity: 1;
          transition: 0.3s;
        }

        .info--cargando {
          opacity: 0;
        }

        .info > h3 {
          font-size: 1.3rem;
          margin-block-start: 1rem;
          margin-block-end: 0;
        }

        .info > p {
          margin-block-start: 0;
          margin-block-end: 0.2rem;
        }

        .info > ul {
          display: flex;
          list-style-type: none;
          padding-inline-start: 0;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .info > ul > li {
          background: #fff3;
          padding: 0.3rem 0.5rem;
          margin: 0.3rem 0.6rem 0.3rem 0;
          border-radius: 5px;
        }

        .info__link {
          align-items: center;
          display: flex;
          justify-content: space-around;
          margin-top: 0.5rem;
        }

        .info__link > a {
          text-decoration: none;
          background: #fff4;
          border-radius: 10px;
          color: #fff;
          padding: 0.5rem 0.7rem;
        }

        /* responsive */
        @media screen and (min-width: 650px) {
          .contenedor__proyectos {
            height: 450px;
            max-height: 100vh;
          }

          .info {
            top: 45px;
            width: 50%;
            left: ${medidas.height / 1.7 + 15}px;
            max-height: none;
            padding: 0;
          }

          .info > h3 {
            font-size: 1.3rem;
            margin-block-start: 0;
            margin-block-end: 0;
          }
        }
      `}</style>
    </div>
  );
}
