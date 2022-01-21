import { colores, listHabilidades } from "../../utilidades";
import Tecnologia from "./tecnologia";

export default function Tecnologias() {
  return (
    <div className="tecnologias">
      <h2>Tecnologias</h2>

      <ul>
        {listHabilidades.map((habilidad) => {
          return <Tecnologia habilidad={habilidad} />;
        })}
      </ul>
      <style jsx>{`
        .tecnologias {
          display: grid;
          margin-top: 1.5rem;
          margin-bottom: 0;
        }

        h2 {
          font-size: 2rem;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0.5rem;
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
