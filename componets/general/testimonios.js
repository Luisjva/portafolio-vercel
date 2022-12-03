export default function Testimonios() {
  return (
    <div className="testimonios">
      <h2>Lo que opinan nuestros clientes</h2>
      <div>
        <div className="testimonios__grid">
          <div className="testimonios__cliente testimonios__1">
            <h3>Nombre del proyecto</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <span>Joras - Diseñador Grafico</span>
          </div>
          <div className="testimonios__cliente testimonios__2">
            <h3>Nombre del proyecto</h3>
            <span>Joras - Diseñador Grafico</span>
          </div>
          <div className="testimonios__cliente testimonios__3">
            <h3>Nombre del proyecto</h3>
            <span>Joras - Diseñador Grafico</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-size: 2rem;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0.5rem;
          margin-left: 10%;
          margin-right: 10%;
        }

        .testimonios {
          margin: 2rem;
        }

        .testimonios__grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr .5fr .5fr;
          grid-gap: 1rem;
          grid-template-areas:
            "test1"
            "test2"
            "test3";
        }

        .testimonios__cliente {
          background: #0003;
          border-radius: 15px;
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding: 1.5rem;
        }

        .testimonios__cliente > h3 {
          font-size: 1.5rem;
          margin-block-start: 0;
          margin-block-end: 1rem;
        }

        .testimonios__cliente > p {
          margin-block-start: 0;
          margin-block-end: 0.7rem;
        }

        .testimonios__cliente > span {
          font-size: 0.9rem;
          text-align: right;
        }

        .testimonios__1 {
          color: #fff;
          grid-area: test1;
          padding-top: 10rem;
          background: linear-gradient(#373b44aa, #373b44aa), url("/proy8.png");
          background-size: cover;
          background-position: top;
        }

        .testimonios__2 {
          color: #fff;
          grid-area: test2;
          background: linear-gradient(#373b44aa, #373b44aa), url("/proy8.png");
          background-size: cover;
          background-position: top;
        }

        .testimonios__3 {
          color: #fff;
          grid-area: test3;
          padding-top: 10rem;
          background: linear-gradient(#373b44aa, #373b44aa), url("/proy8.png");
          background-size: cover;
          background-position: top;
        }

        @media screen and (min-width: 500px) {
          .testimonios__grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas:
              "test1 test2"
              "test1 test3";
          }
        }
      `}</style>
    </div>
  );
}
