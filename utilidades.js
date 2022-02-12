export const listProyectos = [
  {
    id: 7,
    nombre: "El restaurante",
    name: "The restaurant",
    tecnologias: ["CSS", "React", "Next"],
    github: "https://github.com/Luisjva/restaurant",
    linkProyecto: "https://restaurant-three-beta.vercel.app/",
    descripcion:
      "Una página para un restaurante, con la idea de crear un diseño moderno, minimalista e intuitivo",
    description:
      "A page for a restaurant, with the idea of creating a modern, minimalist and intuitive design",
    descripcionCorta: "Maqueta de pagina para negocios",
    shortDescription: "Business page mockup",
    img: "proy7.png",
    enProceso: false,
  },
  {
    id: 6,
    nombre: "DevBlog",
    name: "DevBlog",
    tecnologias: ["PHP", "CSS", "MySQL"],
    github: "#",
    linkProyecto: "#",
    descripcion:
      "Blog completamente funcional creado desde 0, con panel de control para el administrador",
    description:
      "Fully functional blog built from scratch, with admin control panel",
    descripcionCorta: "Blog de desarrollo web",
    shortDescription: "Web development blog",
    img: "proy6.png",
    enProceso: true,
  } /*
  {
    id: 5,
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
    id: 4,
    nombre: "2nd Oceand",
    name: "Blog",
    tecnologias: ["Pug", "CSS", "Node js", "Express"],
    github: "https://github.com/Luisjva/2ndOcean",
    linkProyecto: "http://a2ndocean.herokuapp.com/",
    descripcion:
      "Es un blog donde se puede navegar entre varias publicaciones, creado con Express Js con el motor de plantilla Pug.",
    description:
      "It's a blog where you can navigate between multiple posts, built with Express Js with the Pug template engine.",
    descripcionCorta: "Blog de artistas locales",
    shortDescription: "Local Artists Blog",
    img: "proy5.png",
    enProceso: false,
  },
  {
    id: 3,
    nombre: "Aplicación del clima",
    name: "Wheather app",
    tecnologias: ["React", "CSS", "API de weatherbit.io"],
    github: "https://github.com/Luisjva/weather-app",
    linkProyecto: "https://luisjva.github.io/weather-app/",
    descripcion:
      "Una aplicación que muestra información del tiempo actual en 5 ciudades. Está fue creada con React y la ayuda de la API de weatherbit.io.",
    description:
      "An app that displays current weather information in 5 cities. It was created with React and the help of the weatherbit.io API.",
    descripcionCorta: "App donde se presenta el clima de algunas ciudades",
    shortDescription: "App where the weather of some cities is presented",
    img: "proy4.png",
    enProceso: false,
  },
  {
    id: 2,
    nombre: "Tic-tac-toe",
    name: "Tic-tac-toe",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Luisjva/tren-en-linea",
    linkProyecto: "https://luisjva.github.io/tren-en-linea/",
    descripcion:
      "Juego de tres en línea creado con HTML, CSS y JavaScript, con la finalidad de practicar lógica de programación en el front-end.",
    description:
      "Tic-tac-toe game created with HTML, CSS and JavaScript, in order to practice programming logic on the front-end.",
    descripcionCorta: "Juego de tres en linea",
    shortDescription: "Tic-tac-toe game",
    img: "proy3.png",
    enProceso: false,
  },
  {
    id: 1,
    nombre: "Plantilla para una marca",
    name: "Quick mockup",
    tecnologias: ["HTML", "CSS"],
    github: "https://github.com/Luisjva/Maqueta1",
    linkProyecto: "https://luisjva.github.io/Maqueta1/",
    descripcion:
      "Esta maqueta de un sitio web simple fue creada con solo HTML y CSS.",
    description: "This simple website mockup was created with HTML and CSS.",
    descripcionCorta: "Maqueta rapida",
    shortDescription: "Quick mockup",
    img: "proy1.png",
  },
];

export const listHabilidades = [
  {
    tecnologia: "HTML",
    descripcion: `HTML es el esqueleto de toda la web.
    <br/><br/>
    Este es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia de una página web (CSS) o la funcionalidad (JavaScript).`,
    idProyectos: [1, 2, 3, 4, 6, 7],
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
    descripcion: `CSS son los estilos de tu pagina web.
    <br/><br/>
    Mientras que los comandos HTML le indican al navegador que ciertas partes del texto son títulos, subtítulos, enlaces o párrafos, CSS es lo que le dice, entre otras cosas, qué fuente, tamaño, color o alineación debe tener un elemento de la página.`,
    idProyectos: [1, 2, 3, 4, 6, 7],
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
    descripcion: `JavaScript le da funcionalidad a una pagina web.
    <br/><br/>
    Con este lenguaje de programación podemos crear efectos y animaciones sin ninguna interacción, o respondiendo a eventos causados por el propio usuario tales como botones pulsados, entre otros.`,
    idProyectos: [2, 3, 4, 7],
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
    descripcion: `React Js es una herramienta creada por Facebook para desarrollar interfaces de usuario.
    <br/><br/>
    Esta aporta una serie de claras ventajas frente a la forma clásica de realizar una web, sus facilidades para el desarrollo unido al rendimiento, la flexibilidad y organización del código la convierten en una de las mejores opciones.`,
    idProyectos: [3, 7],
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
    descripcion: `Next es React para producción.
    <br/><br/>
    Este es tomar todas las ventajas de usar React, pero sumando que tendrás optimización de imágenes(para mejorar la velocidad de carga de la página), dominios internacionales (por si tú página es abierta desde varios países, en el país que se abra este en el idioma correcto), entre otras cosas que mejoraran el rendimiento de tú página.`,
    idProyectos: [3, 7],
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
    tecnologia: "Node",
    descripcion: `Node es JavaScript, del lado del servidor
    <br/><br/>
    La programación de lado-servidor nos permite por el contrario almacenar la información en una base de datos y devolver ficheros HTML y de otros tipos (ej, PDFs, imágenes, etc.). También es posible devolver simplemente datos (lista de productos, comidas de un menu, fotos de un portafolio, etc.)`,
    idProyectos: [4],
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
  } /*
  {
    tecnologia: "PHP",
    descripcion: ``,
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
  },*/,
];

export const colores = {
  principal: "#373b44",
  secundario: "#4077d1",
  blanco: "#fff",
  negro: "#000",
};
