import { Link } from "react-router";
import HeroImage from "../assets/images/image-01.jpg";

export default function HeroSection() {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Mediterranean Kitchen</span>
          <h1>Little Lemon</h1>
          <h2>Erbil</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations" className="btn btn-primary">
            Reserve a Table
          </Link>
        </div>

        <div className="hero-visual">
          <div className="hero-image-box">
            <img src={HeroImage} alt="Serving delicious dish" />
          </div>
        </div>
      </div>
    </section>
  );
}
