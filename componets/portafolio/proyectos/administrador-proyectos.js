import { Component } from "react";

import VistaTlfn from "./vista-tlfn";
import VistaPc from "./vista-pc";

class AdminProyecto extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let proyectosTlfn = this.props.proyectos.map((proyecto) => 
      <VistaTlfn key={proyecto.nombre} proyecto={proyecto} />
    )
    let proyectosPc = this.props.proyectos.map((proyecto) =>
      <VistaPc key={proyecto.nombre} proyecto={proyecto} />
    )

    return(
      <div className={this.props.vista?"div":"div div__pc" }>
        <div className={this.props.vista ? "fade" : "fade none"}>
          {proyectosTlfn}
        </div>
       
        <div className={!this.props.vista ? "fade":"fade none"}>
          {proyectosPc}
        </div>

        <style jsx>{`
          .div {
            height: 350px;
            transition: .3s;
          }

          .div__pc {
            height: 500px;
          }

          .div div {
            transition: .3s;
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

          @media screen and (min-width: 315px) {
            .div {
              height: 375px;
              transition: .3s;
            }

            .div__pc {
              height: 500px;
            }
          }

          @media screen and (min-width: 375px) {
            .div {
              height: 395px;
              transition: .3s;
            }
            
            .div__pc {
              height: 520px;
            }
          }

          @media screen and (min-width: 400px) {
            .div {
              height: 420px;
              transition: .3s;
            }
            
            .div__pc {
              height: 530px;
            }
          }

          @media screen and (min-width: 450px) {
            .div {
              height: 420px;
              transition: .3s;
            }
            
            .div__pc {
              height: 550px;
            }
          }

          @media screen and (min-width: 475px) {
            .div {
              height: 420px;
              transition: .3s;
            }
            
            .div__pc {
              height: 575px;
            }
          }

          @media screen and (min-width: 530px) {
            .div {
              height: 440px;
              transition: .3s;
            }
            
            .div__pc {
              height: 600px;
            }
          }

          @media screen and (min-width: 560px) {
            .div {
              height: 480px;
              transition: .3s;
            }
            
            .div__pc {
              height: 600px;
            }
          }

          @media screen and (min-width: 615px) {
            .div {
              height: 500px;
              transition: .3s;
            }
            
            .div__pc {
              height: 625px;
            }
          }

          @media screen and (min-width: 630px) {
            .div {
              height: 540px;
              transition: .3s;
            }
            
            .div__pc {
              height: 625px;
            }
          }

          @media screen and (min-width: 680px) {
            .div {
              height: 575px;
              transition: .3s;
            }
            
            .div__pc {
              height: 625px;
            }
          }

          @media screen and (min-width: 840px) {
            .div {
              height: 575px;
              transition: .3s;
            }
            
            .div__pc {
              height: 700px;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default AdminProyecto;