import '../normalize.css';
import '../estilos.css';
import Nav from "../componets/nav";
import Head from "next/head";
import Footer from "../componets/footer"



export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4286f4" />
        <link rel="shortcut icon" href="fav.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&family=Yanone+Kaffeesatz&display=swap');
        </style>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
