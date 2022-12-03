import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Contacto from "../componets/general/contacto";
import EnTrabajos from "../componets/inicio/en-trabajos";
import Header from "../componets/inicio/header";
import Tecnologias from "../componets/inicio/tecnologias";
import Proyectos from "../componets/proyectos";
import Testimonios from "../componets/general/testimonios";

export default function Index() {
  const router = useRouter();
  const { locale } = router;

  const [tit, setTit] = useState("");

  useEffect(() => {
    locale === "es" ? setTit("Inicio") : setTit("Home");
  }, [locale]);

  return (
    <div className="cuerpo">
      <Head>
        <title>{tit} | Luis Villegas</title>
      </Head>
      <div className="responsive">
        <Header />
      </div>
      <Proyectos />
      <div className="responsive">
        <Tecnologias />
        <Contacto />
      </div>
      <EnTrabajos />
      <div className="responsive">
        <Testimonios />
      </div>
    </div>
  );
}
