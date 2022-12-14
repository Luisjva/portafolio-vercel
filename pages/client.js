import Proyectos from "../componets/proyectos";

import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Client() {
  const router = useRouter();
  const { locale } = router;

  const [tit, setTit] = useState("");

  useEffect(() => {
    locale === "es" ? setTit("Clientes") : setTit("Clients");
  }, [locale]);

    return(
      <div className="cuerpo">
          <Head>
              <title>Clients | Luis Villegas</title>
          </Head>
        <div className="responsive">
        <Proyectos/>
              <p>Aquí va una vista para los clientes orientada a la venta de pagina web</p>
          </div>  
      </div>
    )
}