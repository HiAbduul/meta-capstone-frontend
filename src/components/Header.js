import { IconBurger, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/logo-horizontal.jpg";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
        <Link to="/">
          <img src={Logo} alt="Little Lemon logo" className="header-logo" />
          {/* Little Lemon */}
        </Link>
        <nav>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="#">Login</Link>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={handleClick}>
          {click ? <IconX size={20} style={{ color: "#333333" }} /> : <IconBurger size={20} style={{ color: "#333333" }} />}
        </div>
      </header>
    </>
  );
}
