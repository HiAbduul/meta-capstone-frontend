import { IconTruckDelivery } from "@tabler/icons-react";
import { Link } from "react-router";
import image1 from "../assets/images/image-02.jpg";
import image2 from "../assets/images/image-03.jpg";
import image3 from "../assets/images/image-04.jpg";

export default function FeaturedSection() {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
        <h1>This Week's Specials</h1>
        <div className="btn-container">
          <button className="btn btn-menu">Online Menu</button>
        </div>
      </div>
      <Cards />
    </div>
  );
}

const featuredMenu = [
  {
    image: image1,
    title: "Authentic Greek Salad",
    price: "$11.25",
    description:
      "A refreshing, colorful, and vibrant salad loaded with crisp cucumbers, juicy ripe tomatoes, sliced green bell peppers, sharp red onion rings, whole black olives, and generous chunks of crumbly feta cheese. Lightly dressed and seasoned with coarse black pepper and herbs.",
  },
  {
    image: image2,
    title: "Creamy Tomato Bruschetta",
    price: "$9.50",
    description:
      "Thick slices of crusty rustic bread generously spread with a smooth cream cheese base and piled high with freshly diced, vibrant red cherry tomatoes. Finished with a sprinkle of dried herbs, fresh microgreens, and olive oil, making it a perfect light appetizer.",
  },
  {
    image: image3,
    title: "Spicy Penne Arrabbiata",
    price: "$14.99",
    description:
      "A classic Italian pasta dish featuring perfectly cooked al dente penne tossed in a robust, fiery tomato sauce. It is beautifully garnished with fresh green basil, aromatic rosemary, and a whole dried red chili pepper for an extra kick of heat.",
  },
];

const Cards = () => {
  const specialMenusItems = featuredMenu.map((menu) => {
    return (
      <div>
        <div className="special-card-container">
          <div className="image-container">
            <img src={menu.image} alt="Special dessert" />
          </div>
          <div className="special-card-text">
            <div className="special-card-title">
              <h3>{menu.title}</h3>
              <h3 className="price-tag">{menu.price}</h3>
            </div>
            <p>{menu.description}</p>
            <Link to="#">
              <h4>Order Item {<IconTruckDelivery size={30} style={{ color: "#333333", marginLeft: "10px" }} />}</h4>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="special-card">{specialMenusItems}</div>
    </div>
  );
};
