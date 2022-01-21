import { useEffect, useState } from "react";
import Image from "next/image";

export default function SobreMi() {
  const [width, setWidth] = useState(300);

  useEffect(() => {
    setWidth(innerWidth);

    window.addEventListener("resize", () => {
      setWidth(innerWidth);
    });
  }, []);

  return (
    <div className="sobre-mi">
      <h2>Sobre mi</h2>
      <div className="sobre-mi__img">
        <Image
          src={`/yo.png`}
          alt="Picture of the author"
          width={width < 500 ? 150 / 1.255 : 250 / 1.255}
          height={width < 500 ? 150 : 250}
        />
      </div>
      <div className="sobre-mi__text">
        <p>
          Mi nombre es Luis Villegas, soy Diseñador y Programador de páginas
          web.
          <br />
          <br />
          Mi misión es ayudar a EMPRENDEDORES AUTÓNOMOS y PEQUEÑAS EMPRESAS a
          tener una web moderna y fresca para mejorar su imagen y sus ventas.
          <br />
          <br />
          ¡Entonces, qué!...¿Hablamos?
        </p>
      </div>
      <style jsx>{`
        .sobre-mi {
          display: grid;
          grid-template-areas:
            "titu"
            "img"
            "text";
          grid-template-columns: 1fr;
          margin-top: 1.5rem;
        }

        .sobre-mi > h2 {
          font-size: 2rem;
          grid-area: titu;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .sobre-mi__img {
          align-items: center;
          display: flex;
          grid-area: img;
          justify-content: center;
        }

        .sobre-mi__text {
          align-items: center;
          display: flex;
          justify-content: center;
          grid-area: text;
          padding: 1rem;
          text-align: center;
        }

        .sobre-mi__text > p {
          margin-block-start: 0;
        }

        @media screen and (min-width: 500px) {
          .sobre-mi {
            grid-template-areas:
              "titu titu"
              "img  text";
            grid-template-columns: 1fr 1.7fr;
          }

          .sobre-mi__text > p {
            margin-block-start: 1em;
          }
        }
      `}</style>
    </div>
  );
}
