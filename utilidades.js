export const listProyectos = [
  {
    id: 7,
    nombre: "Blog",
    name: "Blog",
    tecnologias: ["PHP", "CSS", "MySQL"],
    github: "#",
    linkProyecto: "#",
    descripcion:
      "Blog completamente funcional creado desde 0, con panel de control para el administrador",
    description:
      "Fully functional blog built from scratch, with admin control panel",
    img: "proy7.png",
    enProceso: true,
  } /*
  {
    id: 6,
    nombre: "Tienda online",
    name: "",
    tecnologias: ["Next js", "CSS", "MySQL"],
    github: "#",
    linkProyecto: "#",
    descripcion:
      "###### ##### ### #### #### #### ### ##### ###### ###### ### #### ### ### ###### ## ###",
    description: "",
    img: ["proy6-1", "proy6-2", "proy6-3", "proy6-4"],
    enProceso: true,
  },*/,
  {
    id: 5,
    nombre: "Blog",
    name: "Blog",
    tecnologias: ["Pug", "CSS", "Node js", "Express"],
    github: "https://github.com/Luisjva/2ndOcean",
    linkProyecto: "http://a2ndocean.herokuapp.com/",
    descripcion:
      "Es un blog donde se puede navegar entre varias publicaciones, creado con Express Js con el motor de plantilla Pug.",
    description:
      "It's a blog where you can navigate between multiple posts, built with Express Js with the Pug template engine.",
    img: "proy5.png",
    enProceso: false,
  },
  {
    id: 4,
    nombre: "Aplicación del clima",
    name: "Wheather app",
    tecnologias: ["React", "CSS", "API de weatherbit.io"],
    github: "https://github.com/Luisjva/weather-app",
    linkProyecto: "https://luisjva.github.io/weather-app/",
    descripcion:
      "Una aplicación que muestra información del tiempo actual en 5 ciudades. Está fue creada con React y la ayuda de la API de weatherbit.io.",
    description:
      "An application that displays current weather information in 5 cities. It was created with React and the help of the weatherbit.io API.",
    img: "proy4.png",
    enProceso: false,
  },
  {
    id: 3,
    nombre: "Tres en linea",
    name: "Tic-tac-toe",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Luisjva/tren-en-linea",
    linkProyecto: "https://luisjva.github.io/tren-en-linea/",
    descripcion:
      "Juego de tres en línea creado con HTML, CSS y JavaScript, con la finalidad de practicar lógica de programación en el front-end.",
    description:
      "Tic-tac-toe game created with HTML, CSS and JavaScript, in order to practice programming logic on the front-end.",
    img: "proy3.png",
    enProceso: false,
  },
  {
    id: 2,
    nombre: "Maqueta rapida",
    name: "Quick mockup",
    tecnologias: ["HTML", "CSS"],
    github: "https://github.com/Luisjva/Maqueta1",
    linkProyecto: "https://luisjva.github.io/Maqueta1/",
    descripcion:
      "Esta maqueta de un sitio web simple fue creada con solo HTML y CSS.",
    description:
      "This simple website mockup was created with just HTML and CSS.",
    img: "proy1.png",
  },
];

export const listHabilidades = [
  {
    tecnologia: "HTML",
    recursos: [
      {
        nombre: "Lenguaje de etiquetas de hipertexto",
        name: "Hypertext markup language",
        fuente: "Curso de MDN",
        from: "MDN Course",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        img: "/htmlmdn.png",
      },
      {
        nombre: "Tutorial de HTML",
        name: "HTML walkthrough",
        fuente: "Curso de w3schools",
        from: "w3schools course",
        link: "https://www.w3schools.com/html/default.asp",
        img: "/htmlw3.png",
      },
      {
        nombre: "Curso de HTML5 desde CERO (Completo)",
        name: "HTML5 course from ZERO (Complete) [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
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
        name: "CSS",
        fuente: "Curso de MDN",
        from: "MDN Course",
        link: "https://developer.mozilla.org/es/docs/Web/CSS",
        img: "/cssmdn.png",
      },
      {
        nombre: "Tutorial CSS",
        name: "CSS walkthrough",
        fuente: "Curso de w3schools",
        from: "w3schools course",
        link: "https://www.w3schools.com/css/default.asp",
        img: "/cssw3.png",
      },
      {
        nombre: "Curso de CSS desde CERO (Completo)",
        name: "CSS course from ZERO (Complete) [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
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
        name: "JavaScript",
        fuente: "Curso de MDN",
        from: "MDN Course",
        link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        img: "/jsmdn.png",
      },
      {
        nombre: "w3schools: Tutorial JavaScript",
        name: "w3schools: JavaScript Tutorial",
        fuente: "Curso de w3schools",
        from: "w3schools course",
        link: "https://www.w3schools.com/js/default.asp",
        img: "/jsw3.png",
      },
      {
        nombre: "Curso de JavaScript desde CERO (Completo)",
        name: "JavaScript course from ZERO (Complete) [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
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
        name: "Official documentation",
        fuente: undefined,
        from: undefined,
        link: "https://es.reactjs.org/docs/getting-started.html",
        img: "/reactd.png",
      },
      {
        nombre: "Curso React.js",
        name: "React.js course [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
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
        name: "Official documentation",
        fuente: undefined,
        from: undefined,
        link: "https://nextjs.org/docs/getting-started",
        img: "/nextd.png",
      },
      {
        nombre: "Curso de NextJs",
        name: "NextJs Course [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
        link: "https://www.youtube.com/watch?v=M2gcOpfrsFw&list=PL_7HoiqMMaOeJe04VOdwRlrnU2cWjJKG5",
        img: "/nexty.png",
      },
      {
        nombre: "Curso gratuito de NextJs y Firebase",
        name: "Free NextJs and Firebase course [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
        link: "https://www.youtube.com/watch?v=2jxc8DMzt0I&list=PLV8x_i1fqBw1VR86y4C72xMGJ8ifjBwJ6",
        img: "/nexty2.png",
      },
    ],
  },
  {
    tecnologia: "Git",
    recursos: [
      {
        nombre: "Curso Práctico de Git Y GutHub",
        name: "Git and GitHub Practical Course [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
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
        name: "Official documentation",
        fuente: undefined,
        from: undefined,
        link: "https://nodejs.org/en/docs/",
        img: "/noded.png",
      },
      {
        nombre: "Curso de Node",
        name: "Node Course [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
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
        name: "Learn to program in PHP and MySQL [Spanish]",
        fuente: "Curso en Youtube",
        from: "Course on Youtube",
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
