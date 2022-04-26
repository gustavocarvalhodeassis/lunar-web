import Logo from "./logo";

const navLinks = [
  {
    name: "Inicío",
    hrefid: "home",
    type: 1
  },
  {
    name: "Sobre",
    hrefid: "about",
    type: 1
  },
  {
    name: "Avaliações",
    hrefid: "reports",
    type: 1
  },
  {
    name: "Paineis",
    type: 2
  },
  {
    name: "Contate-nos",
    hrefid: "contact",
    type: 3
  }
]

function NavBar() {
  return (
    <>
      <header>
        <Logo />
        <nav className="nav">
          {
            navLinks(
              (link) => {
                <ul className="nav-links">
                  <li className="link">
                    <a href={link.hrefid}>
                      {link.name}
                    </a>
                  </li>
                </ul>
              }
            )
          }
        </nav>
      </header>
    </>
  );
}

export default NavBar
