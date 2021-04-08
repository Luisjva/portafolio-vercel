import Head from "next/head"
import Proyectos from "../componets/proyectos-index"


export default function Index() {
    return (
      <div className="cuerpo">
        <Head>
          <title>Inicio | Luis Villegas</title>
        </Head>
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
  
              <p>¡Entonces, qué!… ¿<a href="/#contacta">hablamos</a>?</p>
            </div>
          </section>
          <section className="en-trabajos">
            <h2>En mis trabajos siempre:</h2>
            <div className="incluye">


              <div className="incluye-contenedor-1 incluye-1">
                <h3>Uso sus colores corporativos para la creacion de la pagina</h3>
                <p>si no tiene, lo ayudare a crear una paleta de colores</p>
              </div>

              <div className="incluye-contenedor-2 incluye-2">
                <h3>Despues de finalizar la web, tendre una reunion con el cliente para acordar los ultimos cambios</h3>
                <p>si no tiene, lo ayudare a crear una paleta de colores</p>
              </div>

              <div className="incluye-contenedor-1 incluye-3">
                <h3>Imagenes sin derecho de autor.</h3>
                <p>si no tiene, lo ayudare a crear una paleta de colores</p>
              </div>

              <div className="incluye-contenedor-2 incluye-4">
                <h3>Creo una web que se vea bien si la abres desde cualquier dispositivo.</h3>
                <p>si no tiene, lo ayudare a crear una paleta de colores</p>
              </div>
            </div>


          </section>
          <section className="proyectos">
            <Proyectos/>
          </section>
          <div className="div">
            <h1>Llamada a la accion</h1>
          </div>
        </main>
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

          .incluye-contenedor-1,
          .incluye-contenedor-2 {
            color: #fff;
            display: flex;
            padding-left: 10%;
            padding-right: 10%;
            flex-direction: column;
            text-align: center;
          }

          .incluye-contenedor-1 h3,
          .incluye-contenedor-2 h3,
          .incluye-contenedor-1 p,
          .incluye-contenedor-2 p {
            margin-block-start: 0;
            margin-block-end: 0;
            color: #fff;
          }

          .incluye-contenedor-1 p,
          .incluye-contenedor-2 p {
            padding-top: .5rem;
          }

          .incluye-contenedor-1 {
            padding-top: 3rem;
            padding-bottom: 3rem; 
            background: linear-gradient(to right, #373b4480, #373b4480), url("/mujer.jpg");
            background-size: cover;
            background-position: center;
          }

          .incluye-contenedor-2 {
            padding-top: 2rem;
            padding-bottom: 2rem; 
            background: linear-gradient(to right, #373b4480, #373b4480), url("/proyecto1.jpg");
            background-size: cover;
          }

          @media screen and (min-width: 500px) {
            .incluye {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: repeat(2, auto);
              grid-template-areas: 
                "uno  uno    dos"
                "tres cuatro cuatro"
            }

            .incluye-contenedor-1,
            .incluye-contenedor-2 {
              padding-left: auto;
              padding-right: auto;
              padding-top: auto;
              padding-bottom: auto;
              height: 15rem;
              justify-content: center;
              align-content: center;
            }
            .incluye-1 {
              grid-area: uno;
            }
            .incluye-2 {
              grid-area: dos;
            }
            .incluye-3 {
              grid-area: tres;
            }
            .incluye-4 {
              grid-area: cuatro;
            }

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