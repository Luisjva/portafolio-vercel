import Image from "next/image";
import { useRouter } from "next/router";

export default function Contacto() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="contacto">
      {locale === "es" ? (
        <>
          <p>No esperes más para tener la página que quieres.</p>
          <p>Contáctame ahora!!!</p>
        </>
      ) : (
        <>
          <p>Do not wait any longer to have the page you want.</p>
          <p>Contact me now!!!</p>
        </>
      )}

      <div>
        <a href="mailto:luisjva16@gmail.com">
          <Image
            src="/Mail.svg"
            alt="Picture of the author"
            width="100"
            height="100"
          />
        </a>
        <a
          href={`https://www.instagram.com/luisjva.${locale}/`}
          target="_blank"
        >
          <Image
            src="/logoinstagram.svg"
            alt="Picture of the author"
            width="68"
            height="68"
          />
        </a>
      </div>

      <style jsx>{`
        .contacto {
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
        }

        .contacto > div {
          align-items: center;
          display: flex;
          justify-content: space-around;
          width: 400px;
          max-width: 100vw;
          margin: auto;
        }

        .contacto > div * {
          transition: 0.3s;
        }

        .contacto > div *:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
