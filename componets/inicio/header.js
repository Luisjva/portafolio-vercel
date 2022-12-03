import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { locale } = router;

  const handleClick = (e) => {
    e.preventDefault()
    router.push("/projects")
  }

  return (
    <div className="header__contenedor">
      <div className="header">
        <Image src="/logo-negro.png" width="75" height="75" />
        <h1>
          {locale === "es"
            ? "Hola, soy "
            : "Hello, I am "}
          <span>Luis</span>
        </h1>
        <div className="header__line"></div>
        <div className="header__text">
          {locale === "es" ? <p>algo</p> : <p>something</p>}
        </div>
        <div className="header__btn">
          <button onClick={handleClick}
            style={{ background: "linear-gradient(90deg, #373b44, #3d66a8)" }}
          >
            Proyectos
          </button>
        </div>
      </div>
      <div className="header__img">
        <Image src="/header.svg" fill />
      </div>
      <style jsx>{`
        .header__contenedor {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          height: auto;
          padding: 0.5rem;
          position: relative;
          width: 100%;
        }

        .header {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem  1rem 0;
          width: 100%;
        }

        .header > h1 {
          font-size: 2rem;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .header > h1 > span {
          font-family: "Yanone Kaffeesatz", sans-serif;
          color: #4077d1;
          animation-name: name;
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in;
        }

        @keyframes name {
          0% {
            color: #4077d1;
          }

          50% {
            color: #373b44;
          }

          100% {
            color: #4077d1;
          }
        }

        .header__line {
          animation-duration: 3s;
          animation-iteration-count: infinite;
          animation-name: line;
          animation-timing-function: ease-in;
          background: #4077d1;
          border-radius: 3px;
          height: .3rem;
          margin: .5rem auto;
          width: 25%;
        }

        
        @keyframes line {
          0% {
            background: #4077d1;
          }

          50% {
            background: #373b44;
          }

          100% {
            background: #4077d1;
          }
        }

        .header__img {
          display: none;
        }

        .header__text {
          align-items: center;
          display: flex;
          justify-content: center;
          grid-area: text;
          padding-top: 0.5rem;
          text-align: center;
        }

        .header__text > p {
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .header__btn {
          padding: 1rem 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 75%;
          max-width: 225px;
        }

        .header__btn button {
          border-radius: 10px;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0.5rem 0.7rem;
          text-decoration: none;
          transition: 0.3s;
        }

        .header__btn button:hover {
          transform: scale(1.05);
        }

        @media screen and (min-width: 500px) {
          .header__contenedor {
            grid-template-columns: 1fr auto;
            grid-template-rows: auto;
            height: 23rem;
          }

          .header {
            max-width: 750px;
            padding: 1rem;
          }

          .header__text > p {
            margin-block-start: 1em;
          }

          .header__img {
            height: 40vw;
            margin: auto;
            max-height: 310px;
            max-width: 310px;
            position: relative;
            width: 40vw;
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
