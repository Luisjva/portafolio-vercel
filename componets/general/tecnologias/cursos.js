import Link from "next/link"

export default function Cursos({recursos}) {
  return(
    <ul className="">
      {recursos.map((recurso)=> {
        return (
          <Link href={recurso.link} target="_blank">
            <li style={{background: `linear-gradient(#0009, #0009), url("${recurso.img}")`, backgroundSize: "cover"}}>
              <p className="titulo">{recurso.nombre}</p>
            </li>
          </Link>
        )
      })}

      <style jsx>{`
        ul {
          list-style-type: none;
          padding-inline-start: 0;
        }

        li {
          border-radius: 10px;
          margin: .5rem 0;
          color: #fff;
          transition: .3s;
        }

        li:hover {
          transform: scaleY(1.15)
        }

        .titulo {
          margin-block-start: 0;
          margin-block-end: 0;
          padding: 1rem;
          font-weight: 600;
          font-family: "Yanone Kaffeesatz", sans-serif;
        }

        .cursos__content {
          padding: 1rem;
          padding-top: .5rem;

        }
      `}</style>
    </ul>
  )
}