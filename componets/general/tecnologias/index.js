import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { colores, listHabilidades } from "../../../utilidades";
import Cursos from "./cursos";

export default function Tecnologias() {
  const router = useRouter();
  const { locale } = router;

  const [width, setWidth] = useState(100);
  const [change, setChange] = useState(false);

  useEffect(()=>{
    const ul = document.querySelector(".tecnologias__ul");
    setWidth(ul.clientWidth);

    window.addEventListener("resize",()=> {
      setWidth(ul.clientWidth);
    })
  },[])

  useEffect(()=> {
    const li0 = document.querySelector(".tecnologia__ul__li__0");
    const li1 = document.querySelector(".tecnologia__ul__li__1");
    const li2 = document.querySelector(".tecnologia__ul__li__2");
    const li3 = document.querySelector(".tecnologia__ul__li__3");
    const li4 = document.querySelector(".tecnologia__ul__li__4");
    const li5 = document.querySelector(".tecnologia__ul__li__5");

    setTimeout(() => {
      li0.classList.toggle("tecnologia__ul__li__0--1");
      li1.classList.toggle("tecnologia__ul__li__1--1");
      li2.classList.toggle("tecnologia__ul__li__2--1");
      li3.classList.toggle("tecnologia__ul__li__3--1");
      li4.classList.toggle("tecnologia__ul__li__4--1");
      li5.classList.toggle("tecnologia__ul__li__5--1");

      setChange(change == false ? true : false)
    }, 6000);
  },[change])

  const open = (number) => {
    const li0 = document.querySelector(".tecnologia__ul__li__0");
    const li1 = document.querySelector(".tecnologia__ul__li__1");
    const li2 = document.querySelector(".tecnologia__ul__li__2");
    const li3 = document.querySelector(".tecnologia__ul__li__3");
    const li4 = document.querySelector(".tecnologia__ul__li__4");
    const li5 = document.querySelector(".tecnologia__ul__li__5");
    
    li0.classList.remove("tecnologia__ul__li--open");
    li1.classList.remove("tecnologia__ul__li--open");
    li2.classList.remove("tecnologia__ul__li--open");
    li3.classList.remove("tecnologia__ul__li--open");
    li4.classList.remove("tecnologia__ul__li--open");
    li5.classList.remove("tecnologia__ul__li--open");

    const li = document.querySelector(`.tecnologia__ul__li__${number}`);

    li.classList.add("tecnologia__ul__li--open");
  }
  
  const close = (e, number) => {
    const li = document.querySelector(`.tecnologia__ul__li__${number}`);

    console.log(li);

    setTimeout(() => {
      li.classList.remove("tecnologia__ul__li--open")
    }, 50);

  }

  return (
    <div className="tecnologias responsive">
      <h2>
        {locale === "es"
          ? "Tecnologías: Para que son y proyectos con cada una"
          : "Technologies"}
      </h2>

      <ul className="tecnologias__ul">
        {listHabilidades.map((habilidad, index)=> {
          return(
            <li onClick={()=>open(index)} key={habilidad.tecnologia} className={`tecnologia__ul__li tecnologia__ul__li__${index}`}>
              <h3>{habilidad.tecnologia}</h3>
              <span onClick={(e)=>close(e, index)}>x</span>
              <div className="tecnologia__ul__li__content">
                <p dangerouslySetInnerHTML={{__html: habilidad.descripcion}}></p>
                <h4>Algunas los cursos que he realizado con esta tecnología son:</h4>
                <Cursos recursos={habilidad.recursos}/>
              </div>
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        .tecnologias {
          display: grid;
          margin-top: 1.5rem;
          margin-bottom: 0;
          width: 100vw;
          max-width: 900px;
        }

        h2 {
          font-size: 2rem;
          text-align: center;
          margin-block-start: 0;
          margin-block-end: 0.5rem;
          margin-left: 10%;
          margin-right: 10%;
          font-weight: 800;
        }

        .tecnologias__ul {
          height: ${width}px;
          position: relative;
          width: 90%;
          list-style-type: none;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
          max-width: 700px;
          margin: 2rem auto;
        }

        .tecnologia__ul__li {
          background: #0007;
          background: Linear-gradient(${colores.principal}, ${colores.secundario});
          border-radius: 15px;
          box-shadow: 5px 5px 10px #0007;
          color:#fff;
          padding: 1rem;
          position: absolute;
          transition: 1s;
        }

        .tecnologia__ul__li h3 {
          margin-block-start: 0;
          margin-block-end: 0;
          font-weight: 400;
        }
        
        .tecnologia__ul__li__0 {
          top: 0;
          left: 0;
          width: ${width / 3.2}px;
          height: ${(width * 2.1) / 3.2}px;
        }.tecnologia__ul__li__1 {
          top: 0;
          left: ${(width * 1.1) / 3.2}px;
          width: ${width / 3.2}px;
          height: ${width / 3.2}px;
        }.tecnologia__ul__li__2 {
          top: 0;
          left: ${(width * 2.2) / 3.2}px;
          width: ${width / 3.2}px;
          height: ${width / 3.2}px;
        }.tecnologia__ul__li__3 {
          top: ${(width * 1.1) / 3.2}px;
          left: ${(width * 1.1) / 3.2}px;
          width: ${width / 3.2}px;
          height: ${width / 3.2}px;
        }.tecnologia__ul__li__4 {
          top: ${(width * 1.1) / 3.2}px;
          left: ${(width * 2.2) / 3.2}px;
          width: ${width / 3.2}px;
          height: ${(width * 2.1) / 3.2}px;
        }.tecnologia__ul__li__5 {
          top: ${(width * 2.2) / 3.2}px;
          left: 0;
          height: ${width / 3.2}px;
          width: ${(width * 2.1) / 3.2}px;
        }

        .tecnologia__ul__li__0--1 {
          top: 0;
          left: 0;
          width: ${width / 3.2}px;
          height: ${width / 3.2}px;
        }.tecnologia__ul__li__1--1 {
          top: ${(width * 1.1) / 3.2}px;
          left: ${(width * 1.1) / 3.2}px;
          width: ${width / 3.2}px;
          height: ${width / 3.2}px;
        }.tecnologia__ul__li__2--1 {
          top: 0;
          left: ${(width * 1.1) / 3.2}px;
          width: ${(width * 2.1) / 3.2}px;
          height: ${width / 3.2}px;
        }.tecnologia__ul__li__3--1 {
          top: ${(width * 1.1) / 3.2}px;
          left: 0;
          width: ${width / 3.2}px;
          height: ${(width * 2.1) / 3.2}px;
        }.tecnologia__ul__li__4--1 {
          top: ${(width * 1.1) / 3.2}px;
          left: ${(width * 2.2) / 3.2}px;
          width: ${width / 3.2}px;
          height: ${width / 3.2}px;
        }.tecnologia__ul__li__5--1 {
          top: ${(width * 2.2) / 3.2}px;
          left: ${(width * 1.1) / 3.2}px;
          height: ${width / 3.2}px;
          width: ${(width * 2.1) / 3.2}px;
        }

        .tecnologia__ul__li > span,
        .tecnologia__ul__li__content {
          display: none;
        }

        .tecnologia__ul__li--open {
          top: 5%;
          left: 5%;
          width: 90%;
          height: 90%;
          z-index: 150;
          background: ${colores.principal}bb;
          display: grid;
          grid-template-rows: auto 1fr;
          font-size: 1.3rem;
          overflow: auto;

          backdrop-filter: blur(3px);
        }
        
        .tecnologia__ul__li--open > .tecnologia__ul__li__content {
          display: block;
        }

        .tecnologia__ul__li--open > span {
          display: inline;
          position: absolute;
          top: 1rem;
          right: 1.2rem;
          font-weight: 800;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .tecnologia__ul__li--open h3 {
          font-size: 1.9rem;
          font-weight: 800;
        }

        h4 {
          font-size: 1.55rem;
        }

        .tecnologia__ul__li__content {
          height: 100%;
          overflow: auto;
        }

        @media screen and (min-width: 500px) {
          .tecnologia__ul__li--open {
            top: 10%;
            left: 10%;
            width: 80%;
            height: 80%;
            z-index: 150;
            padding: 1.5rem;
          }

          .tecnologia__ul__li {
            font-size: 1.3rem;
            
          }
        }

        @media screen and (min-width: 650px) {
          .tecnologia__ul__li--open {
            top: 10%;
            left: 20%;
            width: 60%;
            height: 80%;
            z-index: 150;
          }
        }
      `}</style>
    </div>
  );
}
