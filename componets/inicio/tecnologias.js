import { useRouter } from "next/router";

import { colores, listHabilidades } from "../../utilidades";
import Tecnologia from "./tecnologia";

export default function Tecnologias() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="tecnologias">
      <h2>
        {locale === "es"
          ? "Tecnologias: Para que son y proyectos con cada una"
          : "Technologies"}
      </h2>

      <ul>
        {listHabilidades.map((habilidad) => {
          return (
            <Tecnologia key={habilidad.tecnologia} habilidad={habilidad} />
          );
        })}
      </ul>
      <style jsx>{`
        .tecnologias {
          display: grid;
          margin-top: 1.5rem;
          margin-bottom: 0;
          width: 100vw;
          max-width: 900px;
        }

        h2 {
          font-size: 2rem;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0.5rem;
          margin-left: 10%;
          margin-right: 10%;
        }

        .tecnologias > ul {
          list-style-type: none;
          padding-inline-start: 0;
          margin-block-start: 0;
          margin-block-end: 0;
          margin: 0 1rem;
        }

        .tecnologias > ul > li {
          background: ${colores.principal}11;
          border-radius: 10px;
          padding: 0.5rem 1rem;
          margin: 0.5rem;
          transform: 0.3s;
        }

        .tecnologias > ul > li > h3 {
          font-size: 1.3rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }
      `}</style>
    </div>
  );
}
