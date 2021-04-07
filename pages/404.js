import Nav from "../componets/nav"
import Head from "next/head"
import Footer from "../componets/footer"

export default function Custom404() {
  return(
    <div className="cuerpo">
      <Head>
        <title>404 | Luis Villegas</title>
      </Head>
      <Nav />
      <main>
        <img src="/404.svg" />
        <p>La pagina que busco no existe</p>

      </main>
      <Footer />
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
  )
}