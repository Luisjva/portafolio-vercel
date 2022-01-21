export const listProyectos = [
  {
    id: 7,
    nombre: "Blog",
    tecnologias: ["PHP", "CSS", "MySQL"],
    github: "#",
    linkProyecto: "#",
    descripcion:
      "Blog completamente funcional creado desde 0, con panel de control para el administrador",
    img: "proy7.png",
    enProceso: true,
  } /*
  {
    id: 6,
    nombre: "Tienda online",
    tecnologias: ["Next js", "CSS", "MySQL"],
    github: "#",
    linkProyecto: "#",
    descripcion:
      "###### ##### ### #### #### #### ### ##### ###### ###### ### #### ### ### ###### ## ###",
    img: ["proy6-1", "proy6-2", "proy6-3", "proy6-4"],
    enProceso: true,
  },*/,
  {
    id: 5,
    nombre: "Blog",
    tecnologias: ["Pug", "CSS", "Node js", "Express"],
    github: "https://github.com/Luisjva/2ndOcean",
    linkProyecto: "http://a2ndocean.herokuapp.com/",
    descripcion:
      "Es un blog donde se puede navegar entre varias publicaciones, creado con Express Js con el motor de plantilla Pug.",
    img: "proy5.png",
    enProceso: false,
  },
  {
    id: 4,
    nombre: "Aplicación del clima",
    tecnologias: ["React", "CSS", "API de weatherbit.io"],
    github: "https://github.com/Luisjva/weather-app",
    linkProyecto: "https://luisjva.github.io/weather-app/",
    descripcion:
      "Una aplicación que muestra información del tiempo actual en 5 ciudades. Está fue creada con React y la ayuda de la API de weatherbit.io.",
    img: "proy4.png",
    enProceso: false,
  },
  {
    id: 3,
    nombre: "Tres en linea",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Luisjva/tren-en-linea",
    linkProyecto: "https://luisjva.github.io/tren-en-linea/",
    descripcion:
      "Juego de tres en línea creado con HTML, CSS y JavaScript, con la finalidad de practicar lógica de programación en el front-end.",
    img: "proy3.png",
    enProceso: false,
  },
  {
    id: 2,
    nombre: "Maqueta rapido",
    tecnologias: ["HTML", "CSS"],
    github: "https://github.com/Luisjva/Maqueta1",
    linkProyecto: "https://luisjva.github.io/Maqueta1/",
    descripcion:
      "Esta maqueta de un sitio web simple fue creada con solo HTML y CSS.",
    img: "proy1.png",
  },
];

export const listHabilidades = [
  {
    tecnologia: "HTML",
    recursos: [
      {
        nombre: "Lenguaje de etiquetas de hipertexto",
        fuente: "Curso de MDN",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        img: "/htmlmdn.png",
      },
      {
        nombre: "Tutorial de HTML",
        fuente: "Curso de w3schools",
        link: "https://www.w3schools.com/html/default.asp",
        img: "/htmlw3.png",
      },
      {
        nombre: "Curso de HTML5 desde CERO (Completo)",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=kN1XP-Bef7w",
        img: "/htmly.png",
      },
    ],
  },
  {
    tecnologia: "CSS",
    recursos: [
      {
        nombre: "CSS",
        fuente: "Curso de MDN",
        link: "https://developer.mozilla.org/es/docs/Web/CSS",
        img: "/cssmdn.png",
      },
      {
        nombre: "Tutorial CSS",
        fuente: "Curso de w3schools",
        link: "https://www.w3schools.com/css/default.asp",
        img: "/cssw3.png",
      },
      {
        nombre: "Curso de CSS desde CERO (Completo)",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=OWKXEJN67FE",
        img: "/cssy.png",
      },
    ],
  },
  {
    tecnologia: "JavaScript",
    recursos: [
      {
        nombre: "JavaScript",
        fuente: "Curso de MDN",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        img: "/jsmdn.png",
      },
      {
        nombre: "w3schools: Tutorial JavaScript",
        fuente: "Curso de w3schools",
        link: "https://www.w3schools.com/js/default.asp",
        img: "/jsw3.png",
      },
      {
        nombre: "Curso de JavaScript desde CERO (Completo)",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=z95mZVUcJ-E&list=PLE8uP447fYpiBqMVF1hdWl9uFeVEeXRTm",
        img: "/jsy.png",
      },
    ],
  },

  {
    tecnologia: "React",
    recursos: [
      {
        nombre: "Documentación oficial",
        fuente: undefined,
        link: "https://es.reactjs.org/docs/getting-started.html",
        img: "/reactd.png",
      },
      {
        nombre: "Curso React.js",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=MPLN1ahXgcs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk",
        img: "/reacty.png",
      },
    ],
  },
  {
    tecnologia: "Next",
    recursos: [
      {
        nombre: "Documentación oficial",
        fuente: undefined,
        link: "https://nextjs.org/docs/getting-started",
        img: "/nextd.png",
      },
      {
        nombre: "Curso de NextJs",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=M2gcOpfrsFw&list=PL_7HoiqMMaOeJe04VOdwRlrnU2cWjJKG5",
        img: "/nexty.png",
      },
      {
        nombre: "Curso gratuito de NextJs y Firebase",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=2jxc8DMzt0I&list=PLV8x_i1fqBw1VR86y4C72xMGJ8ifjBwJ6",
        img: "/nexty2.png",
      },
    ],
  },
  {
    tecnologia: "Git",
    recursos: [
      {
        nombre: "Curso Práctico de Git Y GutHub ",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=HiXLkL42tMU",
        img: "/git.png",
      },
    ],
  },
  {
    tecnologia: "Node",
    recursos: [
      {
        nombre: "Documentación oficial",
        fuente: undefined,
        link: "https://nodejs.org/en/docs/",
        img: "/noded.png",
      },
      {
        nombre: "Curso de Node",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=mG4U9t5nWG8&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6",
        img: "/nodey.png",
      },
    ],
  },
  {
    tecnologia: "PHP",
    recursos: [
      {
        nombre: "Aprende a programar en PHP y MySQL",
        fuente: "Curso en Youtube",
        link: "https://www.youtube.com/watch?v=GQCFWzkRcBc&list=PLMCtO4953x-7S0RhIEoPHifalcGAwwKHt&index=1",
        img: "/phpy.png",
      },
    ],
  },
];

export const colores = {
  principal: "#373b44",
  secundario: "#4077d1",
  blanco: "#fff",
  negro: "#000",
};
