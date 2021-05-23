import React from 'react'
let paso = 0,
  ProyectosTelefono = (props) => (
    <div className="pag-telefono fade none">
      <img src={`/${props.nombre}.jpg`} />
      <a href={props.link} target="_blank">
        <div className="espesificaciones">
          <div className="espesificaciones-der">
            <span>Next js</span>
            <span>CSS</span>
          </div>
          <div className="espesificaciones-izq">
            <p>{props.titulo}</p>
          </div>
        </div>
      </a>
      <style jsx>{`
        .pag-telefono {
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 10;
          opacity: 1;
          transition: .3s;
        }  

        .pag-telefono img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .espesificaciones {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(to bottom, transparent 70%, #333);
          z-index: 100;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .espesificaciones-der {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 1.5rem;
        }

        .espesificaciones-der span {
          color: #fff;
          background: #373b44;
          background: linear-gradient(to right, #373b44, #3c619d);
          margin-top: .25rem;
          padding: .2rem;
          border-radius: 3px;
        }

        .espesificaciones-izq {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 1.5rem;
        }

        .espesificaciones-izq p {
          color: #fff;
          font-size: 1.7em;
          font-family: 'Yanone Kaffeesatz', sans-serif;
        }

        .fade {
          animation-name: fade;
          animation-duration: .5s;
        }

        .none {
          opacity: 0;
          z-index: 0;
        }

        @keyframes fade{
          from {opacity: .4}
          to {opacity: .1}
        }
      `}</style>
    </div>
  ),
  ProyectosPc = (props) => (
    <div className="pag-pc fade none">
      <a href={props.link} target="_blank">
        <img className="img-pc" src={`/${props.nombre}-pc.jpg`} />
      </a>
      <style jsx>{`
        .pag-pc {
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 10;
          opacity: 1;
          transition: .3s;
        }

        .img-pc {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fade {
          animation-name: fade;
          animation-duration: .5s;
        }

        .none {
          opacity: 0;
          z-index: 0;
        }
        
        @keyframes fade{
          from {opacity: .4}
          to {opacity: .1}
        }
      `}</style>
    </div>
  )


class Proyecto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pagActual: 0,
      vista: "pc",
      proyectos: [],
      renderisado: false
    };

    this.mostrarPagAntes = this.mostrarPagAntes.bind(this);
    this.mostrarPagDespues = this.mostrarPagDespues.bind(this);

    this.vistas = this.vistas.bind(this);
    this.vistasRecarga = this.vistasRecarga.bind(this)
  }

  componentDidMount() {
    fetch("/proyectos.json")
      .then((res) => { return res.json() })
      .then((res) => {
        console.log(res.proyectos)
        this.setState({ proyectos: res.proyectos })


        this.timerID = setInterval(
          () => this.mostrarPagDespues(),
          10
        );

        if (paso == 0 && this.state.renderisado) {
          this.vistasRecarga();

          let pagTlfn = document.querySelectorAll('.pag-telefono');
          let pagPc = document.querySelectorAll(".pag-pc");

          for (let i = 0; i < pagTlfn.length; i++) {
            pagTlfn[i].classList.add("none");
            pagPc[i].classList.add("none");
          }
          pagTlfn[0].classList.remove("none");
          pagTlfn[0].setAttribute("className", "none");

          pagPc[0].classList.remove("none");
          pagPc[0].setAttribute("className", "none");

          paso = 1;
        }
      })
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  vistas() {
    let btnTelefono = document.querySelector(".vistas__telefono");
    let btnPc = document.querySelector(".vistas__pc");
    let sliderTelefono = document.querySelector(".slider-contenedor-telefono");
    let sliderPc = document.querySelector(".slider-contenedor-pc");
    let sliderContenedor = document.querySelector(".slider-contenedor");

    if (this.state.vista == "pc") {
      btnPc.disabled = true;
      btnTelefono.disabled = false;

      btnTelefono.classList.remove("vista-btn--activo");
      btnPc.classList.add("vista-btn--activo");
      sliderTelefono.classList.add("slider-contenedor--cerrado");
      sliderContenedor.classList.add("slider-contenedor--pc");
      sliderPc.classList.remove("slider-contenedor--cerrado");
      this.setState({ vista: "telefono" });
    }
    else if (this.state.vista == "telefono") {
      btnTelefono.disabled = true;
      btnPc.disabled = false;

      btnPc.classList.remove("vista-btn--activo");
      btnTelefono.classList.add("vista-btn--activo");
      sliderTelefono.classList.remove("slider-contenedor--cerrado");
      sliderContenedor.classList.remove("slider-contenedor--pc");
      sliderPc.classList.add("slider-contenedor--cerrado");
      this.setState({ vista: "pc" });
    }

  }

  vistasRecarga() {
    let btnTelefono = document.querySelector(".vistas__telefono");
    let btnPc = document.querySelector(".vistas__pc");
    let sliderTelefono = document.querySelector(".slider-contenedor-telefono");
    let sliderPc = document.querySelector(".slider-contenedor-pc");
    let sliderContenedor = document.querySelector(".slider-contenedor");

    if (this.state.vista == "telefono") {
      btnPc.disabled = true;
      btnTelefono.disabled = false;

      btnTelefono.classList.remove("vista-btn--activo");
      btnPc.classList.add("vista-btn--activo");
      sliderTelefono.classList.add("slider-contenedor--cerrado");
      sliderContenedor.classList.add("slider-contenedor--pc");
      sliderPc.classList.remove("slider-contenedor--cerrado");
    }
    else if (this.state.vista == "pc") {
      btnTelefono.disabled = true;
      btnPc.disabled = false;

      btnPc.classList.remove("vista-btn--activo");
      btnTelefono.classList.add("vista-btn--activo");
      sliderTelefono.classList.remove("slider-contenedor--cerrado");
      sliderContenedor.classList.remove("slider-contenedor--pc");
      sliderPc.classList.add("slider-contenedor--cerrado");
    }
  }

  mostrarPagAntes() {
    clearInterval(this.timerID);


    let estado = this.state.pagActual
    let ahora = estado - 1;
    this.setState({ pagActual: ahora })

    let pagTlfn = document.querySelectorAll('.pag-telefono');
    let pagPc = document.querySelectorAll(".pag-pc");


    if (ahora < 0) {
      this.setState({ pagActual: pagTlfn.length - 1 });
      ahora = pagTlfn.length - 1;
    }

    for (let i = 0; i < pagTlfn.length; i++) {
      pagTlfn[i].classList.add("none");
      pagPc[i].classList.add("none");
    }
    pagTlfn[ahora].classList.remove("none");
    pagTlfn[ahora].setAttribute("className", "none");

    pagPc[ahora].classList.remove("none");
    pagPc[ahora].setAttribute("className", "none");

    this.timerID = setInterval(
      () => this.mostrarPagDespues(),
      10000
    );
  }

  mostrarPagDespues() {
    clearInterval(this.timerID);

    let estado = this.state.pagActual
    let ahora = estado + 1;
    this.setState({ pagActual: ahora });

    let pagTlfn = document.querySelectorAll('.pag-telefono');
    let pagPc = document.querySelectorAll(".pag-pc");

    console.log(pagTlfn.length);

    if (pagTlfn.length === 0) {
      console.log("no se muestra");
    } else {
      this.vistasRecarga();

      if (ahora >= pagTlfn.length) {
        this.setState({ pagActual: 0 });
        ahora = 0
      }

      for (let i = 0; i < pagTlfn.length; i++) {
        pagTlfn[i].classList.add("none");
        pagPc[i].classList.add("none");
      }

      pagTlfn[ahora].classList.remove("none");
      pagTlfn[ahora].setAttribute("className", "none");

      pagPc[ahora].classList.remove("none");
      pagPc[ahora].setAttribute("className", "none");

      this.timerID = setInterval(
        () => this.mostrarPagDespues(),
        10000
      );
    }



  }

  render() {
    return (
      <div rel="proyecto">
        <p className="proyectos-text">Si quiere ver el proyecto, solo haga click en la imagen<br /><br /> Las tecnolocias usadas en cada proyecto estan al final de la imagen</p>
        <div className="slider-contenedor">
          <div className="vistas">
            <button onClick={this.vistas} className="vistas-btn vistas__telefono vista-btn--activo">Telefono</button>
            <button onClick={this.vistas} className="vistas-btn vistas__pc">Pc</button>
          </div>


          <div className="slider-absoluto">
            <div className="slider-contenedor-telefono slider-contenedor--cerrado">

              {
                this.state.proyectos.map((proyecto) => (
                  <ProyectosTelefono key={proyecto.link} {...proyecto} />
                ))
              }


              <div className="flecha-telefono">
                <p className="flecha-telefono-antes slider-flecha center-y" onClick={this.mostrarPagAntes}>
                  &#10094;
                </p>
                <p className="flecha-telefono-despues slider-flecha center-y" onClick={this.mostrarPagDespues}>
                  &#10095;
                </p>
              </div>
            </div>
          </div>

          <div className="slider-absoluto">
            <div className="slider-contenedor-pc slider-contenedor--cerrado">

              {this.state.proyectos.map((proyecto) => (
                <ProyectosPc key={proyecto.link} {...proyecto} />
              ))}


              <div className="flecha-pc">
                <p className="flecha-pc-antes slider-flecha-pc center-y" onClick={this.mostrarPagAntes}>
                  &#10094;
                </p>
                <p className="flecha-pc-despues slider-flecha-pc center-y" onClick={this.mostrarPagDespues}>
                  &#10095;
                </p>
              </div>

            </div>
          </div>

        </div>
        <style jsx>{`
          .center-y {
            position: relative;
            top: 40%;
            transform: translateX(-50%)
          }

          .proyectos-text {
            text-align: center;
            width: 80%;
            margin: auto;
            font-size: 0.8rem;
            color: #0009;
            padding-bottom: .5rem;
          }

          /*    Vistas    */
          .vistas {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            width: 240px;
            margin: auto;
          }

          .vistas-btn {
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            padding: .5rem;
            border-radius: 7px 7px 0px 0px;
            transition: .3s;
          }

          .vistas-btn:hover {
            box-shadow: 2px 2px 3px #333;
            background: linear-gradient(to bottom, #373b44aa, #3d6bb6aa);
          }

          .vista-btn--activo {
            background: linear-gradient(#373b44, #3d6bb6);
            color: #fff;
            border-radius: 7px 7px 0px 0px;
            cursor: default;
          }

          .vista-btn--activo:hover {
            background: linear-gradient(to bottom, #373b44, #3d6bb6);
            box-shadow: none;
          }

          /* Tomar foto en 350px 777px */
          .slider-contenedor{
            width: 240px;
            height: 571px;
            margin: auto;
            position: relative;
            transition: .3s;
          }
          
          .slider-absoluto {
            position: absolute;
            top: 34px;
            left: 0;
          }

          .slider-contenedor-telefono {
            background: #333;
            width: 240px;
            height: 533px;
            margin: auto;
            position: relative;
            overflow: hidden;
            border-radius: 0px 0px 15px 15px;
            transition: .3s;
          }

          .slider-contenedor--cerrado {
            transform: scale(0);
          }

          .slider-contenedor-telefono:hover,
          .slider-contenedor-pc:hover {
            box-shadow: 0px 0px 5px #333;
          }

          .slider-flecha {
            color: #fff;
            font-size: 40px;
            cursor: pointer;
            position: absolute;
          }

          .flecha-telefono-antes {
            left: 35px;
            z-index:200;

            padding: 2.2rem 2rem 2.2rem 15px;
            margin-block-start: 0;
            margin-block-end: 0;

            background: linear-gradient(to bottom, #373b44, #4286f4);


            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .flecha-telefono-despues {
            right: -35px;
            z-index:200;
            background: linear-gradient(to bottom, #4286f4, #373b44);

            
            padding: 2.2rem 15px 2.2rem 2rem;
            margin-block-start: 0;
            margin-block-end: 0;

            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .fade {
            animation-name: fade;
            animation-duration: .5s;
          }

          /*    Slider pc    */
          .slider-contenedor--pc {
            height: 240px;
          }

          .slider-contenedor-pc {
            background: #333;
            width: 240px;
            height: 201px;
            margin: auto;
            position: relative;
            overflow: hidden;
            border-radius: 0px 0px 10px 10px;
            transition: .3s;
          }
          
          .flecha-pc-antes {
            left: 35px;
            z-index:200;

            background: linear-gradient(to bottom, #373b44, #4286f4);

            
            padding: 2.2rem 2rem 2.2rem 15px;
            margin-block-start: 0;
            margin-block-end: 0;

            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .flecha-pc-despues {
            right: -35px;
            z-index:200;
            background: linear-gradient(to bottom, #4286f4, #373b44);

            padding: 2.2rem 15px 2.2rem 2rem;
            margin-block-start: 0;
            margin-block-end: 0;

            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }

          .slider-flecha-pc {
            color: #fff;
            font-size: 40px;
            cursor: pointer;
            position: absolute;
            top: 30px;
          }

          .none {
            opacity: 0;
            z-index: 0;
          }
          @keyframes fade{
            from {opacity: .4}
            to {opacity: .1}
          }

          @media screen and (min-width: 650px) {
            .slider-contenedor{
              width: 300px;
              height: 710px;
            }

            .slider-contenedor-telefono {
              width: 300px;
              height: 666px;
            }

            .slider-contenedor--pc {
              height: 300px;
            }

            .slider-contenedor-pc {
              width: 300px;
              height: 251px;
            }

            
            .vistas {
              width: 300px;
              margin: auto;
            }

            .slider-flecha-pc {
              top: 25%;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Proyecto;