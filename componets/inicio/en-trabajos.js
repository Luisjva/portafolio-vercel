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
          {locale === "es"
            ? "En mis trabajos siempre:"
            : "In my work you´ll find:"}
        </h2>
        <div className="en-trabajos__items">
          <div className="en-trabajos__item en-trabajos__item-1">
            <h3>
              {locale === "es" ? "Pagina de carga rapido" : "Quick load page"}
            </h3>
            <p>
              {locale === "es"
                ? "Hoy en día el 57% de los usuarios abandonan la web si tarda más de 3 segundos en cargar. Por esto su negocio necesita la pagina mas rapida posible."
                : "Today 57% of users leave the web if it takes more than 3 seconds to load. This is why your business needs the fastest page possible."}
            </p>
          </div>
          <div className="en-trabajos__item en-trabajos__item-2">
            <h3>
              {locale === "es"
                ? "Paginas adaptadas a cualquier dispositivo"
                : "Responsive design"}
            </h3>
            <p>
              {locale === "es"
                ? "Cuando un usuario entra a tu web, quieres que sin importar desde que dispositivo entre, la pagina se vea perfecta."
                : "When an user enters your website, you want the page to look perfect no matter what device they´re using."}
            </p>
          </div>
          <div className="en-trabajos__item en-trabajos__item-3">
            <h3>
              {locale === "es"
                ? "Uso sus colores corporativos para la creación de la página"
                : "Use your brand colors on your website"}
            </h3>
            <p>
              {locale === "es"
                ? "Estó hará que los usuarios al entrar en su pagina se identifiquen con los colores de su negocio."
                : "This will make users identify themselves with the colors of your business when using your website."}
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
          background: linear-gradient(
              ${colores.principal}aa,
              ${colores.principal}aa
            ),
            url("/header-index.jpg");
          background-position: center;
          background-size: cover;
        }

        .en-trabajos__item-2 {
          grid-area: respo;
          background: linear-gradient(
              ${colores.principal}aa,
              ${colores.principal}aa
            ),
            url("/responsive.jpg");
          background-position: center;
          background-size: cover;
        }

        .en-trabajos__item-3 {
          grid-area: color;
          background: linear-gradient(
              ${colores.principal}aa,
              ${colores.principal}aa
            ),
            url("/colores.jpg");
          background-position: center;
          background-size: cover;
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
