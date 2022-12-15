import "../normalize.css";
import "../estilos.css";
import Head from "next/head";
import { createContext, useEffect, useState } from "react";
import Nav from "../componets/general/nav";

export const MedidasContext = createContext();

export default function MyApp({ Component, pageProps }) {
  const [medidas, setMedidas] = useState({ width: 300, height: 300 });

  useEffect(() => {
    setMedidas({ width: innerWidth, height: innerHeight });

    window.addEventListener("resize", () => {
      setMedidas({ width: innerWidth, height: innerHeight - 16 * 3 });
    });
  }, []);

  return (
    <div className="body">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4286f4" />
        <meta name="description" content="Mi portafolio de trabajos"/>
        <link rel="shortcut icon" href="fav.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&family=Yanone+Kaffeesatz&display=swap');
        </style>
      </Head>
      <Nav />
      <MedidasContext.Provider value={medidas}>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </MedidasContext.Provider>
      <style jsx>{`
        .content {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}
