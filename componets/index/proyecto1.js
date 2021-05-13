import React from "react";

class Proyecto1 extends React.Component {
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
    let numeroDeProyectos = document.querySelectorAll(".proyecto1--a")
    let aleatorio = Math.floor(Math.random() * numeroDeProyectos.length );  
    return aleatorio
  }

  nuevaPublicacion() {
    let numeroDeProyectos = document.querySelectorAll(".proyecto1--a")
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
      <div className="proyecto1">
        <style jsx>{`
          .proyecto1 {
            grid-area: proy1;
          }
        `}</style>
      </div>
    )
  }
}

export default Proyecto1;