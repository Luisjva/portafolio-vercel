import React from "react";

class Proyecto3 extends React.Component {
  constructor(props) {
    super(props);

    this.tiempoAleatorio = this.tiempoAleatorio.bind(this)
    this.publicacionAleatoria = this.publicacionAleatoria.bind(this)
    this.nuevaPublicacion = this.nuevaPublicacion.bind(this)
  }

  /* componentDidMount() {
    this.timerID = setInterval(
      () => this.nuevaPublicacion(),
      this.tiempoAleatorio()
    );
  } */

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tiempoAleatorio() {
    let aleatorio = Math.floor(Math.random() * (10 - 4) ) + 4;
    console.log(aleatorio)
    return aleatorio * 1000;
  }

  publicacionAleatoria() {
    let numeroDeProyectos = document.querySelectorAll(".proyecto3--a")
    let aleatorio = Math.floor(Math.random() * numeroDeProyectos.length );  
    return aleatorio
  }

  nuevaPublicacion() {
    let numeroDeProyectos = document.querySelectorAll(".proyecto3--a")
    if(numeroDeProyectos.length === 0) {
      console.log("no se muestra");
    }else{
      for(let i = 0; i < numeroDeProyectos.length; i++) {
        numeroDeProyectos[i].classList.add("none");
      }

      let a = this.publicacionAleatoria();

      numeroDeProyectos[a].classList.remove("none");
      numeroDeProyectos[a].setAttribute("className", "none");

    }
  }

  render() {
    return (
      <div className="proyecto3">
        <a className="proyecto-numero-1 proyecto3--a fade none" href="https://luisjva.github.io/Maqueta1/" target="_blank">
          <img src="/maqueta.png"/>
        </a>
        <a className="proyecto-numero-2 proyecto3--a fade none" href="http://a2ndocean.herokuapp.com/" target="_blank">
          <img src="/2ndocean.png"/>
        </a>
        <a className="proyecto-numero-3 proyecto3--a fade" href="https://luisjva.github.io/tren-en-linea/" target="_blank">
          <img src="/tresenlinea.png"/>
        </a>
        <a className="proyecto-numero-4 proyecto3--a fade none" href="https://portafolio-kappa.vercel.app/" target="_blank">
          <img src="/lv.png"/>
        </a>
        <style jsx>{`
          .proyecto3 {
            background: #fff;
            grid-area: proy3;
            background: #000;
            position: relative;
            margin: 0 0 .2rem .2rem;
          }

          .proyecto3--a {
            background: #aaa;
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            z-index: 10;
            opacity: 1;
            transition: .5s;
          }

          .proyecto3--a:hover {
            box-shadow: 0 0 7px #333;
            padding: auto;
          }

          .proyecto3--a img {
            width: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          
          .proyecto-numero-1 {
            background: linear-gradient(to right, #373b4480, #373b4480), url("/proyecto3.jpg");
            background-size: cover;
            background-position: top;
          }

          .proyecto-numero-2 {
            background: linear-gradient(to right, #373b4480, #373b4480), url("/proyecto2.jpg");
            background-size: cover;
            background-position: top;
          }

          .proyecto-numero-3 {
            background: linear-gradient(to right, #373b4480, #373b4480), url("/proyecto1.jpg");
            background-size: cover;
            background-position: top;
          }

          .proyecto-numero-4 {
            background: linear-gradient(to right, #373b4480, #373b4480), url("/proyecto4.jpg");
            background-size: cover;
            background-position: top;
          }

          .none {
            opacity: 0;
            z-index: 0;
          }

          .fade {
            animation-name: fade;
            animation-duration: .5s;
          }
          
          @keyframes fade{
            from {opacity: .4}
            to {opacity: .1}
          }

          @media screen and (min-width: 500px) {
            .proyecto3 {
              margin: .2rem .2rem 0 .2rem;
            }
          }
          
          @media screen and (min-width: 900px) {
            .proyecto3--a img {
              height: 80%;
              width: auto;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Proyecto3;