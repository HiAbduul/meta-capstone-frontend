export default function AdditionalSection() {
  return (
    <section className="additional-section" id="about">
      <div className="section-intro">
        <span className="eyebrow">Why Little Lemon</span>
        <h2>Fresh ingredients, warm hospitality</h2>
        <p>From family recipes to seasonal ingredients, we create delicious dishes with a welcoming atmosphere that feels like home.</p>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <h3>Fresh Local Produce</h3>
          <p>Our menu is built around fresh vegetables, herbs, and ingredients sourced from nearby growers and markets.</p>
        </article>
        <article className="feature-card">
          <h3>Handcrafted Flavors</h3>
          <p>Every dish is prepared with attention to detail, from rich sauces to fragrant spices and bold Mediterranean seasoning.</p>
        </article>
        <article className="feature-card">
          <h3>Relaxed Dining</h3>
          <p>Enjoy a calm, friendly atmosphere with thoughtful service and a menu designed for sharing and savoring.</p>
        </article>
      </div>
    </section>
  );
}
