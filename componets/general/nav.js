import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { colores } from "../../utilidades";

export default function Nav() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="nav">
      <div className="nav__left">
        <span>{locale == "es" ? "Idioma" : "Language"}</span>
        <Link href="/" locale="es">
          <span className={locale == "es" ? "nav__a--activo nav__a" : "nav__a nav__a--cerrado"}>ES</span>
        </Link>
        <Link href="/" locale="en">
          <span className={locale == "en" ? "nav__a--activo nav__a" : "nav__a nav__a--cerrado"}>EN</span>
        </Link>
      </div>
      <Link href="/">
        <Image style={{filter: "invert(90%)"}} src="/logo.png" width="48" height="48" />
      </Link>
      <div className="nav__right">
        <Link href="/projects">
          <span className="nav__a nav__a--cerrado">{locale == "es" ? "Proyectos" : "Projects"}</span>
        </Link>
        <Link href="/client">
          <span className="nav__a nav__a--cerrado">{locale == "es" ? "Clientes" : "Clients"}</span>
        </Link>
      </div>
      <style jsx>{`
        .nav {
          align-items: center;
          background: #fff7;
          border-radius: 10px;
          box-shadow: 3px 3px 15px #0007;
          display: grid;
          font-family: "Yanone Kaffeesatz", sans-serif;
          font-weight: 800;
          grid-template-columns: 1fr auto 1fr;
          justify-content: space-between;
          left: 50%;
          padding: .1rem .5rem;
          position: fixed;
          top: 1vw;
          transform: translateX(-50%); 
          width: 98vw;
          z-index: 200;

          backdrop-filter: blur(3px);
        }

        .nav__left {
          display: flex;
          gap: .3rem;
        }

        .nav__left > span {
          margin-right: .2rem;
        }

        .nav__a {
          padding: .25rem;
          transition: .3s;
          border-radius: 5px;
          color: #000;
        }

        .nav__a--cerrado:hover {
          box-shadow: 2px 2px 5px #0005;
        }

        .nav__a--activo {
          box-shadow: 2px 2px 5px #0005;
          background: #0001;
          cursor: default;
        }

        .nav__right {
          display: flex;
          justify-content: right;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
