import Head from "next/head"
import Tarjeta from "../componets/portafolio/tarjeta"
import Proyectos from "../componets/portafolio/proyectos/proyectos"
import Formulario from "../componets/formulario"


export default function Portafolio() {
  return (
    <div className="cuerpo">
      <Head>
        <title>Portafolio | Luis Villegas</title>
      </Head>
      <main>
        <Tarjeta />
        <Proyectos />
        <Formulario />
      </main>
      <style jsx>{`
      
      `}</style>
    </div>
  )
}