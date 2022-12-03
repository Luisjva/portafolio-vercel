import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { colores } from "../../utilidades";

export default function Nav() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="nav">
      <Link href="/">
        <Image src="/logo.png" width="45" height="45" />
      </Link>
      <div className="nav__right">
        <div className="nav__pages">
          <Link href="/projects">
            <span className="a">{locale == "en" ? "Projects" : "Proyectos"}</span>
          </Link>
          <Link href="/client">
            <span className="a">{locale == "en" ? "Client" : "Clientes"}</span>
          </Link>
        </div>
        <div className="idiomas">
          <Link href="/" locale="en">
            <span className={locale == "en" ? "a--activo a" : "a"}>EN</span>
          </Link>
          <Link href="/" locale="es">
            <span className={locale == "es" ? "a--activo a" : "a"}>ES</span>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .nav {
          align-items: center;
          display: flex;
          justify-content: space-between;
          height: auto;
          padding: 0.05rem 0.5rem;
          width: 100vw;
          background: linear-gradient(
            90deg,
            ${colores.principal},
            ${colores.secundario}
          );
          position: fixed;
          top: 0;
          left: 0;
          z-index: 200;
        }

        .idiomas {
          align-items: center;
          display: flex;
          justify-content: space-around;
          height: 100%;
          width: 65px;
        }

        .a {
          background: #fff4;
          border-radius: 5px;
          color: #fff;
          margin: .3rem;
          padding: 0.3rem 0.3rem 0.2rem 0.3rem;
          text-decoration: none;
          transition: 0.3s;
        }

        .a:hover {
          background: #fff6;
        }

        .a--activo {
          background: #fff8;
        }

        .a--activo:hover {
          background: #fff8;
        }

        .nav__right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav__pages {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
}
