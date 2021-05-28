{/* {props.tecnologias.map((tecnologia) => (
      <span>{tecnologia}</span>
    ))} 
*/}

export default function ProyectosTelefono(props) {
  return (
    <div className="pag-telefono fade none">
      <img src={`/${props.nombre}.jpg`} />
      <div className="espesificaciones">
        <div className="espesificaciones-izq">
          <h3>{props.titulo}</h3>
          {props.tecnologias.map((tecnologia) => (
            <span>{tecnologia}</span>
          ))}
        </div>
        <div className="espesificaciones-der">
          <a href={props.link} target="_blank">
            <img src="/open.svg" alt="Logo de Github" />
          </a>
          <a href={props.github} target="_blank">
            <img src="/github.svg" alt="Logo de Github" />
          </a>
        </div>
      </div>
      <style jsx>{`
        .pag-telefono {
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 10;
          opacity: 1;
          transition: .3s;
        }  

        .pag-telefono img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .espesificaciones {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(to bottom, transparent 60%, #333);
          z-index: 100;
          padding-top: 160%;
          padding-bottom: 2rem;
          display: flex;
          align-items: center;
        }

        .espesificaciones-izq,
        .espesificaciones-der {
          width: 50%;
        }

        .espesificaciones-izq {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;
        }

        .espesificaciones-izq h3 {
          text-align: center;
          color: #fff;
          font-size: 1.5rem;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .espesificaciones-izq span {
          text-align: center;
          background: #fff;
          margin-block-start: .5rem;
          margin-block-end: .3rem;
          padding: .25rem;
          border-radius: 5px;
          font-weight: 900;
        }

        .espesificaciones-der {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .espesificaciones-der img {
          height: 2.6rem;
          width: 2.6rem;
          padding: .4rem;
          margin: .3rem;
        }

        .fade {
          animation-name: fade;
          animation-duration: .5s;
        }

        .none {
          opacity: 0;
          z-index: 0;
        }

        @keyframes fade{
          from {opacity: .4}
          to {opacity: .1}
        }
      `}</style>
    </div>
  )
}