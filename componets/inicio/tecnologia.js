import { colores } from "../../utilidades";

import Link from "next/link";
import { useState } from "react";

export default function Tecnologia({ habilidad }) {
  const [abierto, setAbierto] = useState(false);

  const abrir = () => {
    setAbierto(abierto ? false : true);
  };

  return (
    <li>
      <div className="tecnologia__header" onClick={() => abrir()}>
        <h3>{habilidad.tecnologia}</h3>
        <span
          className={
            abierto
              ? "tecnologia__header__span tecnologia__header__span--abierto"
              : "tecnologia__header__span"
          }
        >
          &#709;
        </span>
      </div>
      <div
        className={
          abierto
            ? "tecnologia__recursos"
            : "tecnologia__recursos tecnologia__recursos--cerrado"
        }
      >
        {habilidad.recursos.map((recurso) => {
          return (
            <a href={recurso.link} target="_blank">
              <div
                className="tecnologia__recurso"
                style={{
                  background: `linear-gradient(${colores.principal}77,${colores.principal}77), url(${recurso.img});`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h4>{recurso.nombre}</h4>
                {recurso.fuente && <span>{recurso.fuente}</span>}
              </div>
            </a>
          );
        })}
      </div>
      <style jsx>{`
        li {
          background: ${colores.principal}11;
          border-radius: 10px;
          margin: 0.5rem;
          transform: 0.3s;
        }

        li:hover {
          background: ${colores.principal}33;
        }

        li h3 {
          font-size: 1.3rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        a {
          text-decoration: none;
        }

        .tecnologia__header {
          padding: 0.5rem 1rem;
          align-items: center;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
        }

        .tecnologia__header__span {
          font-size: 1.2rem;
          transition: 0.3s;
        }

        .tecnologia__header__span--abierto {
          transform: rotate(180deg);
        }

        .tecnologia__recursos {
          transition: 0.1s;
          padding-top: 1rem;
          padding: 1rem;
        }

        .tecnologia__recursos--cerrado {
          overflow: hidden;
          height: 0;
          padding: 0 1rem;
        }

        .tecnologia__recurso {
          align-items: center;
          background: linear-gradient(
            ${colores.principal}77,
            ${colores.principal}77
          );
          border-radius: 15px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0.5rem 0;
          min-height: 70.61px;
          padding: 1rem;
          transition: 0.3s;
        }

        .tecnologia__recurso--abierto {
        }

        .tecnologia__recurso:hover {
          transform: scaleY(1.15) scaleX(1.04);
        }

        .tecnologia__recurso > h4 {
          font-size: 1.1rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        @media screen and (min-width: 600px) {
          .tecnologia__recursos {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .tecnologia__recurso {
            margin: 0.3rem;
          }
        }
      `}</style>
    </li>
  );
}
