import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Projects () {
  const router = useRouter();
  const { locale } = router;

  const [tit, setTit] = useState("");

  useEffect(() => {
    locale === "es" ? setTit("Proyectos") : setTit("Projects");
  }, [locale]);

    return(
      <div className="cuerpo">
          <Head>
              <title>Projects | Luis Villegas</title>
          </Head>
        <div className="responsive">
              <p>Aquí va una descripción de cada proyecto pero mas extensa con las tecnologías que usaste</p>
          </div>  
      </div>
    )
}