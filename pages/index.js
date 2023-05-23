import Head from "next/head";

import Contactos from "../componets/general/contacto";
import Header from "../componets/inicio/header";
import Tecnologias from "../componets/general/tecnologias/index";
import Proyectos from "../componets/proyectos";
import Testimonios from "../componets/general/testimonios";
import EnCodigo from "../componets/inicio/en-codigo";

export default function Index() {
  return (
    <div className="cuerpo">
      <Head>
        <title>Home | Luis Villegas</title>
      </Head>
      <div className="responsive">
        <Header />
      </div>
      <Proyectos />
      <div className="responsive">
        <Contactos />
      </div>
      <EnCodigo />
      <Tecnologias />
      {/*<div className="responsive">
        <Testimonios />
      </div>*/}

      <style jsx>{`
        .cuerpo {
          margin-top: 60px;
        }
      `}</style>
    </div>
  );
}
