export default function Tarjeta() {
  return(
    <div className="tarjeta">
      <img className="tarjeta__img" src="/yo.png" />
      <h2 className="tarjeta__nombre">Luis Villegas</h2>
      <h3 className="tarjeta__sub">Programador Web</h3>
      <p className="tarjeta__texto">Desarrollador web con conocimientos en React, Next, Express y otras tecnologias</p>
      <style jsx>{`
        .tarjeta {
          grid-area: tarjeta;
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: repeat(3, auto);
          grid-template-areas: 
            "img nombre"
            "img titulo"
            "img texto";
        }

        .tarjeta__img {
          grid-area: img;
          object-fit: cover;
          height: 190px;
          margin: auto;
          margin-bottom: 0;
        }

        .tarjeta__nombre {
          grid-area: nombre;
          text-align: left;
          font-size: 1.5rem;
        }

        .tarjeta__sub {
          grid-area: titulo;
          font-size: 1.17rem;
        }

        .tarjeta__texto {
          grid-area: texto;
          font-size: 1rem;
        }

        @media screen and (min-width: 500px) {          
          .tarjeta {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, auto);
            grid-template-areas: 
              "img   nombre"
              "img   titulo"
              "texto texto";
            margin-bottom: auto;
            font-size: 1.5rem;
            margin-top: 0.83em;
            margin-left: .5rem;
          }

          .tarjeta__img {
            height: 125px;
          }

          .tarjeta__texto {
            margin: .5rem;
          }
        }

        @media screen and (min-width: 600px) {
          .tarjeta {
            grid-template-columns: 2fr 3fr;
          }
        }

        @media screen and (min-width: 600px) {
          .tarjeta {
            grid-template-columns: 2fr 3fr;
          }
        }

        @media screen and (min-width: 720px) {
          .tarjeta {
            grid-template-columns: 1fr 2fr;
            grid-template-areas: 
              "img nombre"
              "img titulo"
              "img texto";
          }

          .tarjeta__img {
            height: 170px;
          }

          .tarjeta__texto {
            margin: 0 .5rem .5rem 0;
          }

        }

        @media screen and (min-width: 900px) {
          .tarjeta {
            grid-template-columns: 1fr 2fr;
          }
        }
      `}</style>
    </div>
  )
}