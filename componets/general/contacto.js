import Image from "next/image";
import { useRouter } from "next/router";
import {contactos} from "./../../utilidades"

function Contacto({img, link, nombre}) {
  return (
    <a href={link} target="_blank" className="contacto">
      <div className="contacto__bg">
        <Image alt={`Logo-${nombre}`} src={`/${img}`} width={80} height={80} />
      </div>
      <style jsx>{`
        .contacto {
          position: relative;
          padding: 1rem;
        }

        .contacto__bg {
          filter: grayscale(50%);
          transition: .5s;
        }

        .contacto:hover .contacto__bg {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        .contacto > span {
          font-size: 1.75rem;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0.5rem;
          font-weight: bold;
          font-family: "Yanone Kaffeesatz",sans-serif;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </a>
  )
}

export default function Contactos() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="contactos">
      {locale === "es" ? (
        <>
          <p>No esperes más para tener la página que quieres.</p>
          <p>Contácteme ahora!!!</p>
        </>
      ) : (
        <>
          <p>Do not wait any longer to have the page you want.</p>
          <p>Contact me now!!!</p>
        </>
      )}

      <div>
        {contactos.map((contacto)=>{
          if(contacto.nombre == "Instagram") {
            return(
              <Contacto key={contacto.nombre} link={contacto.link + locale + "/"} img={contacto.img} titulo={contacto.nombre}/>
            )
          } else {
            return(
              <Contacto key={contacto.nombre} link={contacto.link} img={contacto.img} titulo={contacto.nombre}/>
            )
          }
        })}
      </div>

      <style jsx>{`
        .contactos {
          display: grid;
          margin-top: 1.5rem;
          margin-bottom: 3rem;
          width: 100%;
        }

        p {
          font-size: 1.75rem;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0.5rem;
          font-weight: bold;
          font-family: "Yanone Kaffeesatz", sans-serif;
          width: 90%;
          max-width: 400px;
          padding-top: 1rem;
          margin: auto;
        }

        .contactos > div {
          align-items: center;
          display: flex;
          flex-flow: wrap;
          justify-content: space-around;
          width: 80%;
          max-width: 600px;
          margin: auto;
        }

        .contactos > div * {
          transition: 0.3s;
        }

        .contactos > div *:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
