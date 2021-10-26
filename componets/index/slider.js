import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.srcImage = this.srcImage.bind(this);
    this.widthOrHeidht = this.widthOrHeidht.bind(this);
  }

  srcImage() {
    if (this.props.tipo == "pc") {
      return `/${this.props.proyActual.nombre}-pc.png`;
    } else {
      return `/${this.props.proyActual.nombre}.png`;
    }
  }

  widthOrHeidht() {
    if (this.props.tipo == "pc") {
      return "height: 78%;";
    } else {
      return "width: 80%;";
    }
  }

  render() {
    return (
      <div className="proyecto">
        <a
          href={this.props.proyActual.link}
          className="proyecto-1"
          target="_blank"
        >
          <img src={`/${this.props.proyActual.nombre}-logo.png`} />
        </a>
        <style jsx>{`
          .proyecto {
            grid-area: ${this.props.posicion};
            background: #000;
            position: relative;
            color: #fff;
            margin: 0.1rem;
          }

          .proyecto-1 {
            background: linear-gradient(to right, #373b4469, #373b4469),
              url(${this.srcImage()});
            background-size: cover;
            background-position: top;
            width: 100%;
            display: block;
            height: 100%;
            position: relative;
            transition: 0.3s;
          }

          .proyecto-1 img {
            position: absolute;
            ${this.widthOrHeidht()}
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          @media screen and (min-width: 500px) {
            .proyecto:hover {
              box-shadow: 2px 2px 10px #000;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Slider;
