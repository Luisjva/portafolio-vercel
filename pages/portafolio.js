import Head from "next/head"
import Tarjeta from "../componets/portafolio/tarjeta"
import Formulario from "../componets/formulario"


export default function Portafolio() {
  return (
    <div className="cuerpo">
      <Head>
        <title>Portafolio | Luis Villegas</title>
      </Head>
      <main>
        <Tarjeta />
        <Formulario />
      </main>
      <style jsx>{`
        main {
          margin: .5rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, auto);
          grid-template-areas: 
            "tarjeta"
            "proyectos"
            "habilidades"
            "contacto";
        }

        .cuerpo {
          background: #fff;
        }

        h2 {
          text-align: center;
        }

        @media screen and (min-width: 500px) {
          main {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(3, auto);
          grid-template-areas: 
            "tarjeta   habilidades"
            "proyectos proyectos"
            "contacto  contacto";
          }
        }

        @media screen and (min-width: 720px) {
          main {
            width: 705px;
            margin: .5rem auto;
          }
        }
        @media screen and (min-width: 900px) {
          main {
            width: 800px;
          }
        }
      `}</style>
    </div>
  )
}