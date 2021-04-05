import Nav from "../componets/nav"
import Head from "next/head"
import Proyectos from "../componets/proyecto"
import Formulario from "../componets/formulario"
import Footer from "../componets/footer"


export default function Index() {
  return (
    <div className="cuerpo">
      <Head>
        <title>Portafolio | Luis Villegas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4286f4" />
        <link rel="shortcut icon" href="fav.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&family=Yanone+Kaffeesatz&display=swap');
        </style>
      </Head>
      <Nav />
      <main>
        <h2>Hola mundo</h2>
        <Formulario />
      </main>
      
      <Footer />
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

        
      `}</style>
    </div>
  )
}