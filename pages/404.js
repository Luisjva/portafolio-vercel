import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="cuerpo">
      <Head>
        <title>404 | Luis Villegas</title>
      </Head>
      <main>
        <img src="/404.svg" />
        <p>La pagina que busco no existe</p>
      </main>
      <style jsx>{`
        .cuerpo {
          height: 96vh;
        }

        main {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
