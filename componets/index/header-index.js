import React from 'react';

class HeaderIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tituloActual: 0 };

    this.cambio = this.cambio.bind(this);
  } componentDidMount() {
    this.timerID = setInterval(
      () => this.cambio(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }



  cambio() {
    let estado = this.state.tituloActual
    let ahora = estado + 1;
    this.setState({ tituloActual: ahora });

    let todoH1 = document.querySelectorAll(".header-h1");

    if (ahora >= todoH1.length) {
      this.setState({ tituloActual: 0 });
      ahora = 0
    }
    for (let i = 0; i < todoH1.length; i++) {
      todoH1[i].classList.add("none");
      console.log("pase" + i)
    }
    todoH1[ahora].classList.remove("none");
    todoH1[ahora].setAttribute("className", "none");
  }

  render() {
    return (
      <header>
        <div>
          <h1 className="header-h1">De una idea, a tu nueva pagina web</h1>
          <h1 className="header-h1 none">Te ayudo a tener la mejor pagina web para tus necesidades</h1>
        </div>
        <div className="div-img">
          <img src="/yo2.png" className="img" />
        </div>
        <style jsx>{`
          header {
            display: grid;
            grid-template-columns: 3fr 2fr;
            grid-template-rows: auto;
            grid-template-areas: "izq der";            background: linear-gradient(to right, #373b4449, #4286f449), url("/header-index.jpg");
            background-size: cover;
            color: #fff;
            height: 250px;
            position: relative;
          }

          .header-h1 {
            opacity: 1;
            transition: .3s;
            position: absolute;
            top:50%;
            left: 10px;
            transform: translateY(-50%);
            margin-block-start: 0;
            margin-block-end: 0;
            width: 65%;
          }

          .none {
            opacity: 0;
          }
          
          .div-img {
            position: relative;
          }

          .img {
            position: absolute;
            height: 250px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%)
          }

          @media screen and (min-width: 640px) {
            header {
              height: 250px;
              padding: 0 5%;
            }

            .img {
              height: 250px
            }

            .header-h1 {
              left: 5%;
              padding-right: 5%;
            }
          }

          @media screen and (min-width: 800px) {
            header {
              padding: 0 15%;
              height: 280px
            }

            .img {
              height: 280px;
            }

            .header-h1 {
              left: 10%;
              padding-right: 10%;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default HeaderIndex;