import Head from "next/head";
import Image from "next/image";
import Contacto from "../componets/general/contacto";
import EnTrabajos from "../componets/inicio/en-trabajos";
import SobreMi from "../componets/inicio/sobre-mi";
import Tecnologias from "../componets/inicio/tecnologias";

import Proyectos from "../componets/proyectos";

export default function Index() {
  return (
    <div className="cuerpo">
      <Head>
        <title>Inicio | Luis Villegas</title>
      </Head>
      <Proyectos />
      <div className="responsive">
        <SobreMi />
      </div>
      <EnTrabajos />
      <div className="responsive">
        <Tecnologias />
        <Contacto />
      </div>
    </div>
  );
}
