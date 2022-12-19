import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { colores, listHabilidades } from "../../utilidades";

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

  return (
    <div className="tecnologias responsive">
      <h2>
        {locale === "es"
          ? "Tecnologias: Para que son y proyectos con cada una"
          : "Technologies"}
      </h2>

      <ul className="tecnologias__ul">
        {listHabilidades.map((habilidad, index)=> {
          return(
            <li onClick={()=>open(index)} key={habilidad.tecnologia} className={`tecnologia__ul__li tecnologia__ul__li__${index}`}>
              <h3>{habilidad.tecnologia}</h3>
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
          border-radius: 15px;
          background: #0007;
          position: absolute;
          transition: 1s;
          padding: 1rem
        }

        .tecnologia__ul__li h3 {
          margin-block-start: 0;
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

        .tecnologia__ul__li--open {
          top: 10%;
          left: 10%;
          width: 80%;
          height: 80%;
          z-index: 150;
        }
      `}</style>
    </div>
  );
}
