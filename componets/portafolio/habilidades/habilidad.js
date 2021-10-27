let ul, flecha;

export default function Habilidad({ tecnologia, recursos }) {
  const desplazar = () => {
    ul = document.querySelector(`.habilidad__ul__${tecnologia}`);
    flecha = document.querySelector(`.habilidad__flecha__${tecnologia}`);

    ul.classList.toggle("habilidad__ul__abierto");
    flecha.classList.toggle("habilidad__flecha__abierto");
  };

  return (
    <div className="habilidad__contenedor">
      <div onClick={() => desplazar()}>
        <h3>{tecnologia}</h3>
        <p className={`habilidad__flecha__${tecnologia}`}>&#709;</p>
      </div>
      <ul className={`habilidad__ul__${tecnologia}`}>
        {recursos.map((recurso) => {
          return (
            <li key={recurso.nombre}>
              <a target="_blank" href={recurso.link}>
                {recurso.nombre}
              </a>
            </li>
          );
        })}
      </ul>
      <hr />
      <style jsx>{`
        .habilidad__contenedor {
          margin: 0.5rem;
          padding: 0 0.5rem;
        }

        .habilidad__contenedor > div {
          align-items: center;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 0 1rem;
        }

        .habilidad__flecha__${tecnologia} {
          color: #979184;
          font-size: 1.5rem;
          margin-block-start: 0;
          margin-block-end: 0;
          transition: 0.3s;
        }

        .habilidad__flecha__abierto {
          transform: rotate(180deg);
        }

        h3 {
          color: #979184;
          font-size: 1.5rem;
          margin-block-start: 0.2rem;
          margin-block-end: 0.2rem;
        }

        .habilidad__ul__${tecnologia} {
          height: 0;
          list-style-type: none;
          margin-block-end: 0;
          margin-block-start: 0;
          overflow-y: auto;
          padding-inline-start: 1.7rem;
          transition: 0.3s;
        }

        .habilidad__ul__abierto {
          height: ${53 * recursos.length}px;
        }

        li {
          border-radius: 10px;
          font-size: 1rem;
          padding: 0.5rem;
          transition: 0.3s;
        }

        li:hover {
          background: #0002;
        }

        a {
          color: #000;
          text-decoration: none;
        }

        hr {
          border-bottom: 1px solid #979184;
        }
      `}</style>
    </div>
  );
}
