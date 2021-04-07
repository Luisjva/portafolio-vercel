import Link from 'next/link'
import Image from 'next/image'
import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.clickBtnNav = this.clickBtnNav.bind(this)
  }


  clickBtnNav() {
    let navBtn1 = document.querySelector(".nav__btn__1");
    let navBtn2 = document.querySelector(".nav__btn__2");
    let navBtn3 = document.querySelector(".nav__btn__3");
    let navPages = document.querySelector(".nav__pages");

    navBtn1.classList.toggle("nav__btn__1__x");
    navBtn2.classList.toggle("nav__btn__2__x");
    navBtn3.classList.toggle("nav__btn__3__x");
    navPages.classList.toggle("pages-none")
  }

  render() {
    return (
      <nav>
        <div className="nav__izquierdo">
          <Link href="/">
            <a className="nav__a">
              <Image 
                src="/logo.png"
                alt="Logo"
                width={35}
                height={35}
              />
            </a>
          </Link>
        </div>
        <div className="nav__derecho">
          <div onClick={this.clickBtnNav} className="nav__btn">
            <div className="nav__btn__1"></div>
            <div className="nav__btn__2"></div>
            <div className="nav__btn__3"></div>
          </div>
          <ul className="nav__pages pages-none">
            <li className="nav__li">
              <Link href= "/">
                <a className="nav__a">Inicio</a>
              </Link>
            </li>
            <li className="nav__li">
              <Link href= "/portafolio">
                <a className="nav__a">Portafolio</a>
              </Link>
            </li>
          </ul>
        </div>
        <style jsx>{`
          nav {
            display: grid;
            grid-area: nav;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            grid-template-areas: "izquierdo derecho";
            background: linear-gradient(to right, #373b44, #4286f4);
            height: 41.09px;
            box-shadow: 0px 0px 10px #333;
            position: fixed;
            width: 100%;
            z-index: 1000;
          }
  
          .nav__izquierdo {
            grid-area: izquierdo;
            display: inline;
            color: #fff;
            display: flex;
            align-items: center;
            padding-left: .5em;
            height: 41.09px;
          }
  
          .nav__nombre {
            font-size: 1.2rem
          }
  
          .nav__derecho {
            padding-right: .5em;
            grid-area: derecho;
            position: relative;
            display: flex;
            height: 41.09px;
          }
  
          .nav__btn {
            width: 2.3rem;
            height: 2.3rem;
            margin: auto 0 auto auto;
            position: relative;
          }
          
          .nav__btn__1,
          .nav__btn__2,
          .nav__btn__3 {
            background: #fff;
            height: 4px;
            width: 100%;
            border-radius: 2px;
            position: absolute;
            transition: .2s; 
          }
  
          .nav__btn__1 {
            top: 5px;
          }
  
          .nav__btn__2 {
            top: 16.4px;
          } 
  
          .nav__btn__3 {
            bottom: 5px;
          }
  
          .nav__btn__1__x {
            top: 16.4px;
            transform: rotate(45deg);
  
          }
  
          .nav__btn__2__x {
            display: none;
          } 
  
          .nav__btn__3__x {
            top: 16.4px;
            transform: rotate(-45deg);
          }
  
          .nav__pages {
            position: absolute;
            list-style-type: none;
            margin-block-start: 0;
            margin-block-end: 0;
            padding-inline-start: 0;
            background: linear-gradient(to right, #373b44, #4286f4);
            top: 100%;
            left: -100%;
            width: 100vw;
            transition: .2s;
          }
  
          .pages-none {
            top: -333%;
          }
  
          /*     itemns    */
  
          .nav__li {
            transition: .2s;
            height: 41.09px;
          }
  
          .nav__li:hover {
            background: #fff4;
          }
  
          .nav__a {
            display: block;
            text-align: center;
            text-decoration: none;
            color: #fff;
            font-size: 1.1rem;
            padding: .6em;
            transition: .3s;
          }
          @media screen and (min-width: 500px) {
            .nav__a {
              display: inline-block;
              text-align: center;
              text-decoration: none;
              color: #fff;
              font-size: 1.1rem;
              padding: .6em;
            }
            .nav__li {
              display: inline-block;
            }
  
            nav {
              grid-template-columns: 1fr 2fr;;
            }
  
            .nav__btn {
              display: none;
            }
            
            .nav__pages {
              position: initial;
              background: none;
              left: none;
              width: auto;
              display: flex;
              justify-content: flex-end;
              width: 100%;
              height: 41.09px;
            }
          }
  
          @media screen and (min-width: 1200px) {
            nav {
              width: 1200px;
              margin: auto;
            }
          }
        `}</style>
      </nav>
    )
  }
}

export default Nav;