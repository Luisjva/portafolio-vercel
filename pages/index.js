import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Contacto from "../componets/general/contacto";
import EnTrabajos from "../componets/inicio/en-trabajos";
import SobreMi from "../componets/inicio/sobre-mi";
import Tecnologias from "../componets/inicio/tecnologias";
import Proyectos from "../componets/proyectos";

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
