import { useRouter } from "next/router";
import Image from "next/image";

import { colores } from "../../utilidades";

export default function EnTrabajos() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="en-trabajos">
      <div className="responsive">
        <h2>
          {locale === "es" ? "En mis trabajos siempre:" : "In my jobs always:"}
        </h2>
        <div className="en-trabajos__items">
          <div className="en-trabajos__item en-trabajos__item-1">
            <div>
              <div></div>
              <Image
                src="/header-index.jpg"
                alt="foto del autor"
                width={1000}
                height={1000 / 1.5}
              />
            </div>
            <h3>
              {locale === "es" ? "Carga de pagina rapida" : "fast page load"}
            </h3>
            <p>
              {locale === "es"
                ? "Hoy en día el 57% de los usuarios abandonan la web si tarda más de 3 segundos en cargar. Por esto su negocio necesita la pagina mas rapida posible."
                : "Today 57% of users leave the web if it takes more than 3 seconds to load. This is why your business needs the fastest page possible."}
            </p>
          </div>
          <div className="en-trabajos__item en-trabajos__item-2">
            <div>
              <div></div>
              <Image
                src="/responsive.jpg"
                alt="foto del autor"
                width={650}
                height={650 / 1.5}
              />
            </div>
            <h3>
              {locale === "es" ? "Responsive design" : "Responsive design"}
            </h3>
            <p>
              {locale === "es"
                ? "Cuando un usuario entra a tu web, quieres que no importa desde que dispositivo entre, la pagina se vea perfecta."
                : "When a user enters your website, you want the page to look perfect no matter what device they enter from."}
            </p>
          </div>
          <div className="en-trabajos__item en-trabajos__item-3">
            <div>
              <div></div>
              <Image
                src="/colores.jpg"
                alt="foto del autor"
                width={650}
                height={650 / 1.5}
              />
            </div>
            <h3>
              {locale === "es"
                ? "Uso sus colores corporativos para la creación de la página"
                : "Use your corporate colors to create the page"}
            </h3>
            <p>
              {locale === "es"
                ? "Estó hará que los usuarios al entrar en su pagina se identifiquen con los colores de su negocio."
                : "This will make users identify themselves with the colors of your business when entering your page."}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .en-trabajos {
          background: linear-gradient(
            90deg,
            ${colores.principal},
            ${colores.secundario}
          );
          color: #fff;
          padding: 1rem;
          width: 100vw;
        }

        .en-trabajos > div > h2 {
          font-size: 2rem;
          grid-area: titu;
          text-align: center;
          margin-block-start: 1rem;
          margin-block-end: 0;
        }

        .en-trabajos__items {
          margin: 1rem 0.5rem;
        }

        .en-trabajos__item {
          border-radius: 15px;
          text-align: center;
          padding: 0.5rem 0.7rem;
          margin: 0.5rem;
          overflow: hidden;
          position: relative;
        }

        .en-trabajos__item > div {
          height: auto;
          position: absolute;
          width: 100%;
          left: 0;
          top: 50%;
          transform: translatey(-50%);
        }

        .en-trabajos__item > div > div {
          background: linear-gradient(
            ${colores.principal}aa,
            ${colores.principal}aa
          );
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          z-index: 50;
        }

        .en-trabajos__item > h3 {
          font-size: 1.3rem;
          position: relative;
          z-index: 100;
        }

        .en-trabajos__item > p {
          position: relative;
          z-index: 100;
        }

        .en-trabajos__item-1 {
          grid-area: carga;
        }

        .en-trabajos__item-2 {
          grid-area: respo;
        }

        .en-trabajos__item-3 {
          grid-area: color;
        }

        @media screen and (min-width: 500px) {
          .en-trabajos__item {
            padding: 0.5rem 15%;
          }
        }

        @media screen and (min-width: 600px) {
          .en-trabajos__items {
            display: grid;
            grid-template-areas:
              "carga carga"
              "respo color";
            grid-template-columns: 1fr 1fr;
          }

          .en-trabajos__item {
            text-align: center;
            padding: 0.5rem 0.7rem;
            margin: 0.25rem;
          }
        }

        @media screen and (min-width: 700px) {
          .en-trabajos__item-1 {
            padding: 0.5rem 20%;
          }

          .en-trabajos__item-2,
          .en-trabajos__item-3 {
            padding: 0.5rem 15%;
          }
        }
      `}</style>
    </div>
  );
}
