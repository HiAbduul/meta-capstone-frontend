import { IconBurger, IconX } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import Logo from "../assets/logo-horizontal.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && !menuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header className={`site-header ${isVisible ? "" : "hidden"}`}>
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
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setMenuOpen(false)}>
              Menu
            </Link>
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
