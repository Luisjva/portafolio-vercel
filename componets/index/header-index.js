import React from 'react';

class HeaderIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tituloActual: 0};

    this.cambio = this.cambio.bind(this);
  }componentDidMount() {
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

    if(ahora >= todoH1.length) {
      this.setState({tituloActual: 0});
      ahora = 0
    }
    for(let i = 0; i < todoH1.length; i++) {
      todoH1[i].classList.add("none");
      console.log("pase" + i)
    }
    todoH1[ahora].classList.remove("none");
    todoH1[ahora].setAttribute("className", "none");
  }

  render() {
    return(
      <header>
        <div>
          <h1 className="header-h1">De una idea, a una pagina web</h1>
          <h1 className="header-h1 none">Te ayudo a tener la pagina de tus sueños</h1>
        </div>
        <div>

        </div>
        <style jsx>{`
          header {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: auto;
            grid-template-areas: "izq der";            background: linear-gradient(to right, #373b4449, #4286f449), url("/header-index.jpg");
            background-size: cover;
            color: #fff;
            height: 170px;
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

          @media screen and (min-width: 640px) {
            header {
              height: 250px;
              padding: 5%;
            }

            .header-h1 {
              left: 5%;
              padding-right: 5%;
            }
          }

          @media screen and (min-width: 800px) {
            header {
              padding: 10%;
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