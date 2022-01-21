import { colores } from "../../utilidades";

export default function EnTrabajos() {
  return (
    <div className="en-trabajos">
      <div className="responsive">
        <h2>En mis trabajos siempre:</h2>
        <div className="en-trabajos__items">
          <div className="en-trabajos__item en-trabajos__item-1">
            <h3>Carga de pagina rapida</h3>
            <p>
              Hoy en día el 57% de los usuarios abandonan la web si tarda más de
              3 segundos en cargar. Por esto su negocio necesita la pagina mas
              rapida posible.
            </p>
          </div>
          <div className="en-trabajos__item en-trabajos__item-2">
            <h3>Responsive design</h3>
            <p>
              Cuando un usuario entra a tu web, quieres que no importa desde que
              dispositivo entre, la pagina se vea perfecta
            </p>
          </div>
          <div className="en-trabajos__item en-trabajos__item-3">
            <h3>Uso sus colores corporativos para la creación de la página</h3>
            <p>
              Estó hará que los usuarios al entrar en su pagina se identifiquen
              con los colores de su negocio.
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
        }

        .en-trabajos__item > h3 {
          font-size: 1.3rem;
        }

        .en-trabajos__item-1 {
          background: linear-gradient(
              ${colores.principal}aa,
              ${colores.principal}aa
            ),
            url("/header-index.jpg");
          background-size: cover;
          background-position: center;
          grid-area: carga;
        }

        .en-trabajos__item-2 {
          background: linear-gradient(
              ${colores.principal}aa,
              ${colores.principal}aa
            ),
            url("/responsive.png");
          background-size: cover;
          background-position: center;
          grid-area: respo;
        }

        .en-trabajos__item-3 {
          background: linear-gradient(
              ${colores.principal}aa,
              ${colores.principal}aa
            ),
            url("/colores.png");
          background-size: cover;
          background-position: center;
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
