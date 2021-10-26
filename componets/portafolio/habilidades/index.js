import { listHabilidades } from "../../../utilidades";
import Habilidad from "./habilidad";

export default function Habilidades() {
  return (
    <div>
      <h2>Habilidades y cursos realizados</h2>
      {listHabilidades.map((habilidad) => {
        return (
          <Habilidad
            key={habilidad.tecnologia}
            tecnologia={habilidad.tecnologia}
            recursos={habilidad.recursos}
          />
        );
      })}
      <style jsx>{`
        h2 {
          color: #979184;
          font-size: 1.8rem;
          text-align: center;
        }

        @media screen and (min-width: 720px) {
          div {
            margin-left: 5vw;
          }
        }

        @media screen and (min-width: 950px) {
          div {
            margin-left: 8vw;
          }
        }
      `}</style>
    </div>
  );
}
