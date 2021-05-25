export default function ProyectosTelefono(props) {
  return (
    <div className="pag-telefono fade none">
      <img src={`/${props.nombre}.jpg`} />
      <a href={props.link} target="_blank">
        <div className="espesificaciones">
          <div className="espesificaciones-der">
            {props.tecnologias.map((tecnologia) => (
              <span>{tecnologia}</span>
            ))}
          </div>
          <div className="espesificaciones-izq">
            <p>{props.titulo}</p>
          </div>
        </div>
      </a>
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
          background: linear-gradient(to bottom, transparent 70%, #333);
          z-index: 100;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .espesificaciones-der {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 1.5rem;
        }

        .espesificaciones-der span {
          color: #fff;
          background: #373b44;
          background: linear-gradient(to right, #373b44, #3c619d);
          margin-top: .25rem;
          padding: .2rem;
          border-radius: 3px;
        }

        .espesificaciones-izq {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 1.5rem;
        }

        .espesificaciones-izq p {
          color: #fff;
          font-size: 1.7em;
          font-family: 'Yanone Kaffeesatz', sans-serif;
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