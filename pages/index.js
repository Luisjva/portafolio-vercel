import Nav from "../componets/nav"
import Head from "next/head"
import Formulario from "../componets/formulario"
import Footer from "../componets/footer"
import Proyectos from "../componets/proyectos-index"
import React from "react"


class Index extends React.Component {
  render() {
    return (
      <div className="cuerpo">
        <Head>
          <title>Portafolio | Luis Villegas</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="theme-color" content="#4286f4" />
          <link rel="shortcut icon" href="fav.ico" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&family=Yanone+Kaffeesatz&display=swap');
          </style>
        </Head>
        <Nav />
        <main>
          <header>
            <div>
              <h1>De tu idea a una pagina web</h1>
              <h1>Te ayudo a tener la pagina de tus sueños</h1>
            </div>
            <div>
  
            </div>
          </header>
          <section className="sobre-mi">
            <h2>Sobre mi</h2>
            <div>
              <p>Mi nombre es Luis Villegas y soy Diseñador freelance de páginas web.</p>
  
              <p>Mi misión es ayudar a EMPRENDEDORES AUTÓNOMOS y PEQUEÑAS EMPRESAS a tener una web moderna y fresca para mejorar su imagen y sus ventas.</p>
  
              <p>¡Entonces, qué!… ¿<a href="/#contacta">hablamos?</a></p>
            </div>
          </section>
          <section className="en-trabajos">
            <h2>En mis trabajos siempre:</h2>
            <ul>
              <li>Uso sus colores corporativos para la creacion de la pagina (si no tiene, lo ayudare a crear una paleta de colores)</li>
              <li>Creo una web que se vea bien si la abres desde cualquier dispositivo.</li>
              <li>Despues de finalizar la web, tendre una reunion con el cliente para acordar los ultimos cambios</li>
              <li>Imagenes sin derecho de autor</li>
            </ul>
          </section>
          <section className="proyectos">
            <Proyectos/>
          </section>
          <div className="div">
            <h1>Llamada a la accion</h1>
          <Formulario />
          </div>
        </main>
  
        <Footer />
        <style jsx>{`
          main {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, auto);
            grid-template-areas: 
              "nav"
              "mi"
              "trabajos"
              "proyectos"
              "div";
          }
  
          p {
            color: #000;
          }
  
          .div {
            grid-area: div;
          }
          .body {
            background: #fff;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, auto);
          }
  
          header {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: auto;
            grid-template-areas: "izq der";            background: linear-gradient(to right, #373b4449, #4286f449), url("/header-index.jpg");
            background-size: cover;
            color: #fff;
          }
  
  
          /*    Sobre mi    */
          .sobre-mi {
            grid-area: mi;
            margin: 0 2rem;
            text-align: center;
          }
  
          .sobre-mi h2 {
            font-size: 2rem;
            text-align: center;
            grid-area: titulo;
          }
  
          /*    Trabajos    */
          .en-trabajos {
            grid-area: trabajos;
            background: linear-gradient(#373b44, #394966);
            color:#fff;
            
          }
  
          .en-trabajos h2 {
            font-size: 2rem;
            text-align: center;
          }
  
          @media screen and (min-width: 1200px) {
            main {
              width: 1200px;
              margin: auto;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Index;