import Head from "next/head"
import Proyectos from "../componets/proyectos-index"
import Formulario from "../componets/formulario"
import HeaderIndex from "../componets/index/header-index"


export default function Index() {
    return (
      <div className="cuerpo">
        <Head>
          <title>Inicio | Luis Villegas</title>
        </Head>
        <main>
          <HeaderIndex/>
          <section className="sobre-mi">
            <h2>Sobre mi</h2>
            <div>
              <p>Mi nombre es Luis Villegas y soy Diseñador freelance de páginas web.</p>
  
              <p>Mi misión es ayudar a EMPRENDEDORES AUTÓNOMOS y PEQUEÑAS EMPRESAS a tener una web moderna y fresca para mejorar su imagen y sus ventas.</p>
  
              <p>¡Entonces, qué!… <a className="sobre-mi--a" href="/#contacta">¿Hablamos?</a></p>
            </div>
          </section>
          <section className="en-trabajos">
            <h2>En mis trabajos siempre:</h2>
            <div className="incluye">


              <div className="incluye-contenedor-1 incluye-1">
                <h3>Creo una web que se vea bien si la abres desde cualquier dispositivo</h3>
                <p>Cuando tenemos una web queremos que todos entren y pare eso es necesario que se vea correctamente si se habre desde un telefono tablet o una computadora</p>                 
              </div>

              <div className="incluye-contenedor-2 incluye-2">
                <h3>Uso sus colores corporativos para la creacion de la pagina</h3>
                <p>Si no tiene, lo ayudare a crear una paleta de colores acorde a su negocio</p>   
              </div>

              <div className="incluye-contenedor-1 incluye-3">
                <h3>Imagenes sin derecho de autor</h3>
                <p>Cuando tiene una pagina para su negocio o proyecto es necesario que las igamenes contengas derecho de autor para evitar demandas</p>
              </div>

              <div className="incluye-contenedor-2 incluye-4">
                <h3>Despues de finalizar la web, tendre una reunion con el cliente</h3>
                <p>Esto con el fin de cambiar los detalles finales de la pagina a su gusto</p>

              </div>
            </div>


          </section>
          <section className="proyectos">
            <Proyectos/>
          </section>
          <div id="contacta" className="div">
            <p className="div-p-1">No esperes mas para tener la página que quires.</p>
            <p className="div-p-2">Contactame ahora!!!</p>
            <Formulario/>
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
            text-align: center;  
            padding: 0 2rem          
          }

          .div-p-1 {
            font-family: "Yanone Kaffeesatz", sans-serif;
            font-size: 2rem;
          }

          .div-p-2 {
            font-family: "Yanone Kaffeesatz", sans-serif;
            font-size: 1.7rem;            
          }

          .body {
            background: #fff;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, auto);
          }  
  
          /*    Sobre mi    */
          .sobre-mi {
            grid-area: mi;
            padding: 0 2rem;
            text-align: center;
          }
  
          .sobre-mi h2 {
            font-size: 2rem;
            text-align: center;
            grid-area: titulo;
          }

          .sobre-mi--a {
            font-family: "Yanone Kaffeesatz", sans-serif;
            color: #3d609b;
            font-size: 1.3rem;
            
            background: linear-gradient(to right, #373b44, #4286f4);


            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;

            text-decoration: none;
            transition: .3s;
          }

          .sobre-mi--a:hover {
            background: linear-gradient(to left, #373b44, #4286f4);

            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
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

          .incluye-1 {
            background: linear-gradient(to right, #373b4490, #373b4490), url("/responsive.png");
            background-size: cover;
            background-position: center;
            margin: .3rem 0;
          }

          .incluye-2 {
            background: linear-gradient(to right, #373b4490, #373b4490), url("/colores.png");
            background-size: cover;
            background-position: center;
            margin: .3rem 0;
          }
          
          .incluye-3 {
            background: linear-gradient(to right, #373b4490, #373b4490), url("/fotos.png");
            background-size: cover;
            background-position: center;
            margin: .3rem 0;
          }

          .incluye-4 {
            background: linear-gradient(to right, #373b4490, #373b4490), url("/reunion.png");
            background-size: cover;
            background-position: center;
            margin: .3rem 0;
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
            padding-top: 2rem;
            padding-bottom: 2rem; 
            background-size: cover;
            background-position: center;
          }

          .incluye-contenedor-2 {
            padding-top: 1rem;
            padding-bottom: 1rem; 
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
              margin: 0 .2rem .2rem 0;
            }

            .incluye-2 {
              grid-area: dos;
              margin: 0 0 .2rem .2rem;
            }
          
            .incluye-3 {
              grid-area: tres;
              margin: .2rem .2rem 0 0;
            }

            .incluye-4 {
              grid-area: cuatro;
              margin: .2rem 0 0 .2rem;
            }

          }

          @media screen and (min-width: 600px) {
            .incluye-contenedor-1,
            .incluye-contenedor-2 {
              height: 13rem;
            }
          }

          @media screen and (min-width: 640px) {
            .sobre-mi {
              padding: 5%;
            }

            .div {
              padding: 5%;
            }
          }

          @media screen and (min-width: 750px) {
            .incluye-contenedor-1,
            .incluye-contenedor-2 {
              height: 11rem;
            }
          }

          @media screen and (min-width: 800px) {
            .sobre-mi {
              padding: 5% 10%;
            }

            .div {
              padding: 5% 10%;
            }
          }

          @media screen and (min-width: 900px) {
            .incluye {
              width: 90%;
              margin: auto;
            }
          }

          @media screen and (min-width: 1000px) {
            .incluye-contenedor-1,
            .incluye-contenedor-2 {
              height: 9rem;
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