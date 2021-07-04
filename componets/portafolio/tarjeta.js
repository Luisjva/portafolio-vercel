export default function Tarjeta() {
  return(
    <div className="tarjeta">
      <img className="tarjeta__img" src="/yo.png" />
      <div className="tarjeta__izquierda">
        <h2 className="tarjeta__nombre">Luis <h2 className="nombre-identado">Villegas</h2></h2>
        <h3 className="tarjeta__sub">Desarrollador Web</h3>
        <p className="tarjeta__texto">Desarrollador web con conocimientos en React, Next, Express y otras tecnologias</p>
      </div>
      <style jsx>{`
        .tarjeta {
          grid-area: tarjeta;
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: repeat(3, auto);
          grid-template-areas: 
            "img nada1"
            "img izq"
            "img nada2";
        }

        .tarjeta__izquierda {
          grid-area: izq
        }

        .tarjeta__img {
          grid-area: img;
          object-fit: cover;
          height: 220px;
          margin: auto;
          margin-bottom: 0;
        }

        .tarjeta__nombre {
          text-align: left;
          font-size: 2.2rem;
          color: #979184;
          margin-block-start: 0;
          margin-block-end: 0;
          position: relative;
        }

        .nombre-identado {
          font-size: 2.2rem;
          color: #979184;
          margin-block-start: 0;
          margin-block-end: 0;
          position: absolute;
          top: .9rem;
          left: 50px;
        }

        .tarjeta__sub {    
          font-size: 1.2rem;
          color: #979184;
          margin-block-start: 0;
          margin-block-end: 0;
          margin-top: 1rem;
          font-weight: 200;
        }

        .tarjeta__texto {
          font-size: 1rem;
        }
      `}</style>
    </div>
  )
}