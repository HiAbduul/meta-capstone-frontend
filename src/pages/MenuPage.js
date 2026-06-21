import image01 from "../assets/images/image-01.jpg";
import image02 from "../assets/images/image-02.jpg";
import image03 from "../assets/images/image-03.jpg";
import image04 from "../assets/images/image-04.jpg";
import image05 from "../assets/images/image-05.jpg";
import image06 from "../assets/images/image-06.jpg";
import image07 from "../assets/images/image-07.jpg";
import image08 from "../assets/images/image-08.jpg";
import image09 from "../assets/images/image-09.jpg";
import image10 from "../assets/images/image-10.jpg";

const menuItems = [
  {
    image: image01,
    title: "Greek Garden Salad",
    description: "Crisp romaine, cucumber, tomatoes, feta, olives, and lemon herb dressing.",
    price: "$12.50",
  },
  {
    image: image02,
    title: "Grilled Lemon Fish",
    description: "Fresh market fish marinated with herbs and charred to perfection.",
    price: "$18.75",
  },
  {
    image: image03,
    title: "Tomato Bruschetta",
    description: "Toasted bread topped with fresh tomatoes, basil, and creamy ricotta.",
    price: "$9.95",
  },
  {
    image: image04,
    title: "Penne Arrabbiata",
    description: "Spicy tomato penne with chili, garlic, and a touch of parsley.",
    price: "$14.50",
  },
  {
    image: image05,
    title: "Mediterranean Mezze",
    description: "A selection of dips, olives, bread, and seasonal vegetables.",
    price: "$16.00",
  },
  {
    image: image06,
    title: "Herb-Roasted Chicken",
    description: "Juicy chicken served with roasted potatoes and lemon glaze.",
    price: "$17.80",
  },
  {
    image: image07,
    title: "Seafood Skewers",
    description: "Shrimp, scallops, and fish grilled with lemon and olive oil.",
    price: "$19.20",
  },
  {
    image: image08,
    title: "Charred Veg Plate",
    description: "Seasonal vegetables with tahini, herbs, and roasted garlic sauce.",
    price: "$13.40",
  },
  {
    image: image09,
    title: "Baked Feta Bruschetta",
    description: "Warm feta and tomato on rustic bread with basil and chili.",
    price: "$11.90",
  },
  {
    image: image10,
    title: "Citrus Prawn Pasta",
    description: "Tender prawns tossed with pasta, lemon zest, and fresh herbs.",
    price: "$18.95",
  },
];

export default function MenuPage() {
  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="menu-copy">
          <span className="eyebrow">Our Menu</span>
          <h1>Fresh plates designed to share</h1>
          <p>Discover our curated selection of Mediterranean favorites featuring bright flavors, fresh seafood, and hearty seasonal dishes.</p>
        </div>
        <div className="menu-image">
          <img src={image04} alt="Mediterranean dish" />
        </div>
      </section>

      <section className="menu-intro">
        <p>Browse our menu for light starters, savory mains, and shareable plates. Each recipe is crafted with quality ingredients and Mediterranean warmth.</p>
      </section>

      <section className="menu-grid">
        {menuItems.map((item, index) => (
          <article className="menu-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="menu-card-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
