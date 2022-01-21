import Img from "./img";
import { listProyectos } from "../../utilidades";

export default function ContImg({ orden }) {
  return (
    <div className="contenedor-imgs">
      {listProyectos.map((proyecto, index) => {
        return <Img key={proyecto.id} proyecto={proyecto} />;
      })}
      <style jsx>{`
        .contenedor-imgs {
          position: relative;
        }
      `}</style>
    </div>
  );
}
