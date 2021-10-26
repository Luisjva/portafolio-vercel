import Head from "next/head";
import Tarjeta from "../componets/portafolio/tarjeta";
import Formulario from "../componets/formulario";
import Proyectos from "../componets/portafolio/proyectos";
import Habilidades from "../componets/portafolio/habilidades";

export default function Portafolio() {
  return (
    <div className="cuerpo">
      <Head>
        <title>Portafolio | Luis Villegas</title>
      </Head>
      <main className="main">
        <div className="tarjeta">
          <Tarjeta />
        </div>

        <div className="proyectos">
          <Proyectos />
        </div>

        <div className="habilidades">
          <Habilidades />
        </div>

        <div className="formulario">
          <Formulario />
        </div>
      </main>
      <style jsx>{`
        .tarjeta {
          grid-area: tarjeta;
        }

        .proyectos {
          grid-area: proyectos;
        }

        .habilidades {
          grid-area: habilidades;
        }

        .formulario {
          grid-area: contacto;
        }

        @media screen and (min-width: 600px) {
          .main {
            display: grid;
            grid-template-areas:
              "tarjeta     proyectos"
              "habilidades proyectos"
              "contacto    proyectos";
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
