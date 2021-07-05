import Head from "next/head"
import Tarjeta from "../componets/portafolio/tarjeta"
import Proyectos from "../componets/portafolio/proyectos/proyectos"
import Habilidades from "../componets/portafolio/habilidades/habilidades"
import Formulario from "../componets/formulario"



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
          <Habilidades/>
        </div>

        <div className="formulario">
          <Formulario />
        </div>

      </main>
      <style jsx>{`
        .tarjeta {
          grid-area: tarjeta
        }

        .main {
          padding-bottom: 0
        }

        .proyectos {
          grid-area: proyectos
        }

        .formulario {
          grid-area: contacto
        }

        .habilidades {
          grid-area: habilidades
        }

        @media screen and (min-width: 720px) {
          .main {
            /* Si cambias este valor tambien cambia el mismo en proyectos */ 
            min-height: 95vh;
            display: grid;
            grid-template-columns: 50% auto;
            grid-template-rows: repeat(5, auto);
            grid-template-areas: 
              "nada        proyectos"
              "tarjeta     proyectos"
              "habilidades proyectos"
              "contacto    proyectos"
              "todo        proyectos";
          }
        }

        @media screen and (min-width: 800px) {
          .main {
            grid-template-columns: 45% auto;
          }
        }

        @media screen and (min-width: 850px) {
          .main {
            grid-template-columns: 40% auto;
          }
        }
      `}</style>
    </div>
  )
}