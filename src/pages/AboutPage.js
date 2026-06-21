import aboutImage from "../assets/images/image-05.jpg";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-copy">
          <span className="eyebrow">About Us</span>
          <h1>Simple flavors, memorable meals</h1>
          <p>Little Lemon began as a small family kitchen with a devotion to fresh Mediterranean food. We believe every dish should feel warm, honest, and bright.</p>
          <p>Our team carefully blends tradition with seasonal ingredients and generous hospitality. Every plate is designed to bring people together.</p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Mediterranean restaurant scene" />
        </div>
      </section>

      <section className="about-story">
        <h2>Our story</h2>
        <p>
          We started with a simple idea: create delicious meals from high-quality ingredients and serve them in a relaxed, welcoming space. Recipes are inspired by coastal Mediterranean kitchens and
          updated with fresh, local produce.
        </p>
        <p>From morning market runs to careful plating, we focus on the details that make every visit feel special and every dish shine.</p>
      </section>

      <section className="about-values">
        <article className="about-card">
          <h3>Seasonal ingredients</h3>
          <p>Our recipes are built around seasonal produce and local suppliers, so every meal is fresh and balanced.</p>
        </article>
        <article className="about-card">
          <h3>Warm atmosphere</h3>
          <p>We serve a cozy dining experience with friendly service and dishes meant for sharing.</p>
        </article>
      </section>
    </main>
  );
}
