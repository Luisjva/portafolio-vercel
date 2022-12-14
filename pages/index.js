import Head from "next/head";

import Contactos from "../componets/general/contacto";
import EnTrabajos from "../componets/inicio/en-trabajos";
import Header from "../componets/inicio/header";
import Tecnologias from "../componets/inicio/tecnologias";
import Proyectos from "../componets/proyectos";
import Testimonios from "../componets/general/testimonios";

export default function Index() {

  return (
    <div className="cuerpo">
      <Head>
        <title>Home | Luis Villegas</title>
      </Head>
      <div className="responsive">
        <Header />
      </div>
      <Proyectos/>
      <div className="responsive">
        <Contactos />
      </div>
      <EnTrabajos />
      <Tecnologias />
      <div className="responsive">
        <Testimonios />
      </div>
    </div>
  );
}
