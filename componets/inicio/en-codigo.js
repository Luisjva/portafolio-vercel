import Image from "next/image"

const habilidades = [
  {
    habilidad: "Diseños responsive",
    descripcion: "Cuando un usuario entra a tu web, quieres que sin importar desde que dispositivo entre, la pagina se vea perfecta.",
    img: "/mt-responsive.svg"
  },
  {
    habilidad: "Sitio web optimizados",
    descripcion: "Hoy en día el 57% de los usuarios abandonan la web si tarda más de 3 segundos en cargar. Por esto su negocio necesita la pagina mas rapida posible.",
    img: "/mt-optimizado.svg"
  },
  {
    habilidad: "Buenas prácticas",
    descripcion: "Al escribir código, siempre debemos pensar en que este puede ser cambiado en un futuro, por ellos escribir código con buenas practicas, ahora tiempo y trabajo a futuro.",
    img: "/mt-practicas.svg"
  },
  {
    habilidad: "Interfaz Amigable",
    descripcion: "Al tener una interfaz amigable ayudamos al cliente a encontrar la información que buscan de una manera fácil y rápida en el menor tiempo posible.",
    img: "/mt-amigable.svg"
  },
]

export default function EnCodigo() {
  return (
    <div className="en-codigo">
      <div className="responsive">
        <h2>En mi código siempre</h2>

        <div className="en-codigo__habilidades">
          {habilidades.map(({habilidad, descripcion, img}, index)=> {
            return (
              <div key={habilidad} className={`en-codigo__habilidad en-codigo__habilidad--${index}`}>
                <Image alt={habilidad} src={img} width={80} height={80} />
                <div>
                  <h3>{habilidad}</h3>
                  <p>{descripcion}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .en-codigo {
          background: linear-gradient(90deg,#373b44,#4077d1);
          color: #fff;
          padding: 1rem;
          padding-bottom: 2rem;
          width: 100vw;
        }

        .en-codigo h2 {
          font-size: 2rem;
          grid-area: titu;
          text-align: center;
        }

        .en-codigo__habilidad {
          align-items: center;
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin: 0 5%;
          padding: 7% 0;
        }

        .en-codigo__habilidad > div > h3,
        .en-codigo__habilidad > div > p {
          margin-block-start: .25rem;
          margin-block-end: .25rem;
        }

        .en-codigo__habilidad--0 {
          border-bottom: 1.5px solid #fff7;
        }
        .en-codigo__habilidad--1,
        .en-codigo__habilidad--2 {
          border-bottom: 1.5px solid #fff7;
          border-top: 1.5px solid #fff7;
        }
        .en-codigo__habilidad--3 {
          border-top: 1.5px solid #fff7;
        }

        @media screen and (min-width: 650px) {
          .en-codigo__habilidades {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
          }

          .en-codigo__habilidad {
            margin: 0;
            padding: 0;
          }

          .en-codigo__habilidad--0 {
            border-bottom: 1.5px solid #fff7;
            border-right: 1.5px solid #fff7;
            padding: 0 7% 7% 0;
          }.en-codigo__habilidad--1 {
            border-bottom: 1.5px solid #fff7;
            border-left: 1.5px solid #fff7;
            border-top: 0;
            padding: 0 0 7% 7%;
          }.en-codigo__habilidad--2 {
            border-bottom: 0;
            border-right: 1.5px solid #fff7;
            border-top: 1.5px solid #fff7;

            padding: 7% 7% 0 0;
          }.en-codigo__habilidad--3 {
            border-bottom: 0;
            border-left: 1.5px solid #fff7;
            border-top: 1.5px solid #fff7;

            padding: 7% 0 0 7%;
          }
        }
      `}</style>
    </div>
  )
}