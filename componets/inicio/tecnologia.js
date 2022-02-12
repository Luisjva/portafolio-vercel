import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { colores, listProyectos } from "../../utilidades";

export default function Tecnologia({ habilidad }) {
  const [abierto, setAbierto] = useState(false);
  const [listaProyectos, setListaProyectos] = useState(undefined);

  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    let proyectosAqui = [];
    listProyectos.map((proyecto) => {
      if (habilidad.idProyectos.includes(proyecto.id)) {
        proyectosAqui.push(proyecto);
      }
    });
    setListaProyectos(proyectosAqui);
  }, []);

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
            ? "tecnologia__info"
            : "tecnologia__info tecnologia__info--cerrado"
        }
      >
        <p dangerouslySetInnerHTML={{ __html: habilidad.descripcion }}></p>
      </div>
      <div
        className={
          abierto
            ? "tecnologia__recursos"
            : "tecnologia__recursos tecnologia__recursos--cerrado"
        }
      >
        {listaProyectos &&
          listaProyectos.map((proyecto) => {
            return (
              <a
                key={proyecto.linkProyecto}
                href={proyecto.linkProyecto}
                target="_blank"
              >
                <div className="tecnologia__recurso">
                  <div className="tecnologia__recurso__img">
                    <div></div>
                    <Image
                      src={"/" + proyecto.img}
                      alt="Picture of the author"
                      width={600}
                      height={600 / 0.5625}
                    />
                  </div>
                  <h4>{locale === "es" ? proyecto.nombre : proyecto.name}</h4>
                  <span>
                    {locale === "es"
                      ? proyecto.descripcionCorta
                      : proyecto.shortDescription}
                  </span>
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

        .tecnologia__info {
          transition: 0.1s;
          padding-top: 1rem;
          padding: 0 1rem;
          margin: auto;
          max-width: 650px;
          text-align: center;
        }

        .tecnologia__info--cerrado {
          overflow: hidden;
          height: 0;
          padding: 0 1rem;
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
          border-radius: 15px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0.5rem 0;
          min-height: 70.61px;
          padding: 1rem;
          position: relative;
          transition: 0.3s;
          overflow: hidden;
          height: 90px;
        }

        .tecnologia__recurso__img {
          height: auto;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .tecnologia__recurso__img > div {
          background: linear-gradient(
            ${colores.principal}aa,
            ${colores.principal}aa
          );
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 50;
        }

        .tecnologia__recurso:hover {
          transform: scaleY(1.15) scaleX(1.04);
        }

        .tecnologia__recurso > h4 {
          font-size: 1.1rem;
          margin-block-start: 0;
          margin-block-end: 0;
          z-index: 100;
          position: relative;
        }

        .tecnologia__recurso > span {
          z-index: 100;
          position: relative;
          text-align: center;
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
