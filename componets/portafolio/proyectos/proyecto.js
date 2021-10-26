import Img from "./proyecto-img";

export default function Proyecto({
  width,
  nombre,
  tecnologias,
  descripcion,
  github,
  linkProyecto,
  img,
}) {
  return (
    <div className="proyecto__contenedor">
      <Img width={width} img={img} />
      <div className="proyecto__info">
        <h3>{nombre}</h3>
        <p className="tecnologias">
          {tecnologias.map((tecnologia) => {
            return <span key={tecnologia}>{tecnologia}</span>;
          })}
        </p>
        <p>{descripcion}</p>

        <a href={github} target="_blank">
          Ver código
        </a>
        <a href={linkProyecto} target="_blank">
          Ver proyecto
        </a>
      </div>

      <style jsx>{`
        .proyecto__contenedor {
          width: ${width}px;
        }

        .proyecto__info {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h3 {
          color: #fff;
          font-size: 1.4rem;
          text-align: center;
          margin-block-start: 0.5rem;
          margin-block-end: 0.5rem;
        }

        p {
          color: #fff;
          text-align: center;
        }

        .tecnologias {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .tecnologias > span,
        a {
          background: #fff3;
          border: none;
          border-radius: 5px;
          color: #fff;
          margin: 0.2rem;
          padding: 0.3rem;
          transition: 0.3s;
          text-align: center;
          text-decoration: none;
          display: inline-block;
        }

        a {
          width: 150px;
          cursor: pointer;
        }

        a:hover {
          background: #fff5;
        }
      `}</style>
    </div>
  );
}
