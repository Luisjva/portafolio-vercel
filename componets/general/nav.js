import Link from "next/link";
import { useRouter } from "next/router";

import { colores } from "../../utilidades";

export default function Nav() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="nav">
      <div className="idiomas">
        <Link href="/" locale="en">
          <a className={locale == "en" ? "a--activo a" : "a"}>EN</a>
        </Link>
        <Link href="/" locale="es">
          <a className={locale == "es" ? "a--activo a" : "a"}>ES</a>
        </Link>
      </div>
      <style jsx>{`
        .nav {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 38px;
          width: 100vw;
          background: linear-gradient(
            90deg,
            ${colores.principal},
            ${colores.secundario}
          );
        }

        .idiomas {
          align-items: center;
          display: flex;
          justify-content: space-around;
          height: 100%;
          width: 100px;
        }

        .a {
          background: #fff4;
          border-radius: 5px;
          color: #fff;
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
      `}</style>
    </div>
  );
}
