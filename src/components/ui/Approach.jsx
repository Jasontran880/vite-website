import { FocusCards } from "./focus-cards.jsx";

const Approach = () => {
  const cards = [
    {
      title: "Wholesale Optimization Systems",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "We're developing tools that streamline supplier relationships, enabling efficient product integration and expanding into untapped markets globally."
    },
    {
      title: "Product Sourcing and Distribution",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Expanding a network of trusted suppliers worldwide to secure exclusive, high-demand products for competitive marketplaces."
    },
    {
      title: "Data-Driven Innovation",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Harnessing AI to analyze trends, forecast demand, and optimize pricing, empowering businesses to stay competitive and informed."
    },
    {
      title: "E-Commerce Software Solutions",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Crafting custom software to tackle automation, logistics, and operational challenges, tailored to the needs of modern businesses."
    },
  ];

  return <FocusCards cards={cards} />;
}

export default Approach;