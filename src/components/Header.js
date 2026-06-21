import { IconBurger, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/logo-horizontal.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link to="/" className="header-brand" onClick={() => setMenuOpen(false)}>
        <img src={Logo} alt="Little Lemon logo" className="header-logo" />
      </Link>

      <nav className="header-nav" aria-label="Primary navigation">
        <button
          type="button"
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <IconX size={22} /> : <IconBurger size={22} />}
        </button>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-close">
            <button type="button" className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close navigation menu">
              <IconX size={22} />
            </button>
          </li>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#menu" onClick={() => setMenuOpen(false)}>
              Menu
            </a>
          </li>
          <li>
            <Link to="/reservations" onClick={() => setMenuOpen(false)}>
              Reservations
            </Link>
          </li>
          <li>
            <a href="#login" onClick={() => setMenuOpen(false)}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
