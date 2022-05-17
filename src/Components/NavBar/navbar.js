import Logo from "./logo";
import FilledButton from "../Buttons/filledButton";

import './Menu/menuStyle.css'

import './navbarStyle.css'

function NavBar() {
  return (
    <>
      <header id="nav" className="desktop-header">
        <div className="container">
          <Logo />
          <nav className="nav">
            <ul className="nav-links">
              <li className="links">
                <a href="#home">
                  Início
                </a>
              </li>
              <li className="links">
                <a href="#about">
                  Sobre
                </a>
              </li>
              <li className="links">
                <a href="#report">
                  Avaliações
                </a>
              </li>
              <li className="links painel-btn">
                <a className="painel-dropper">
                  Paineis
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7069 8.70707L12.7069 17.7071C12.5119 17.9021 12.256 18 12 18C11.744 18 11.488 17.9021 11.293 17.7071L2.29301 8.70707C1.90201 8.31607 1.90201 7.68401 2.29301 7.29301C2.68401 6.90201 3.31595 6.90201 3.70695 7.29301L12 15.5861L20.293 7.29301C20.684 6.90201 21.3159 6.90201 21.7069 7.29301C22.0979 7.68401 22.0979 8.31607 21.7069 8.70707Z" fill="#393E45" />
                  </svg>
                </a>
                <div className="painel-container">
                  <div className="painel-elements">
                    <ul className="painel-links">
                      <li className="links"><a>Representante</a></li>
                      <li className="links"><a>Contador</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <a className="contact-btn" href="#do">
                <FilledButton text="Fazer parte!" />
              </a>
            </ul>
          </nav>
        </div>
      </header>
      <header className="mobile-header">
        <div id="nav" className="container">
          <a className="menu-btn ">
            <svg className="open-drawer" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5C2 4.447 2.448 4 3 4H16C16.552 4 17 4.447 17 5C17 5.553 16.552 6 16 6H3C2.448 6 2 5.553 2 5ZM21 11H3C2.448 11 2 11.447 2 12C2 12.553 2.448 13 3 13H21C21.552 13 22 12.553 22 12C22 11.447 21.552 11 21 11ZM12 18H3C2.448 18 2 18.447 2 19C2 19.553 2.448 20 3 20H12C12.552 20 13 19.553 13 19C13 18.447 12.552 18 12 18Z" fill="#7A3FF3" />
            </svg>
            <div className="circle-dec"></div>
          </ a>
          <a href="#do">
            <FilledButton text="Fazer Parte!" />
          </a>
        </div>
      </header>
      <section className='menu'>
        <nav className="menu-nav">
          <ul className="menu-nav-links">
            <li className="menu-links">
              <a href="#home">
                Início
              </a>
            </li>
            <li className="menu-links">
              <a href="#about">
                Sobre
              </a>
            </li>
            <li className="menu-links">
              <a href="#report">
                Avaliações
              </a>
            </li>
            <li className="menu-links painel-menu-btn">
              <a className="painel-dropper">
                Paineis
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7069 8.70707L12.7069 17.7071C12.5119 17.9021 12.256 18 12 18C11.744 18 11.488 17.9021 11.293 17.7071L2.29301 8.70707C1.90201 8.31607 1.90201 7.68401 2.29301 7.29301C2.68401 6.90201 3.31595 6.90201 3.70695 7.29301L12 15.5861L20.293 7.29301C20.684 6.90201 21.3159 6.90201 21.7069 7.29301C22.0979 7.68401 22.0979 8.31607 21.7069 8.70707Z" fill="#393E45" />
                </svg>
              </a>
              <div className="menu-painel-container">
                <div className="menu-painel-elements">
                  <ul className="menu-painel-links">
                    <li className="menu-links"><a>Representante</a></li>
                    <li className="menu-links"><a>Contador</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <a className="menu-contact-btn" href="#do">
              <FilledButton text="Fazer parte!" />
            </a>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default NavBar
