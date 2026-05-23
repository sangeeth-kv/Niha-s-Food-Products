export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  image: string;
  highlights: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "puttu-podi",
    name: "Puttu Podi",
    description:
      "Authentic Kerala-style puttu podi made from high-quality rice. Soft texture, traditional taste, and perfect for delicious homemade puttu.",
    category: "Traditional Kerala Foods",
    price: "₹120",
    image: "/images/puttu-podi.jpeg",
    highlights: [
      "Traditional Taste",
      "Premium Quality",
      "Freshly Packed",
      "No Preservatives",
    ],
  },
  {
    id: "pathiri-podi",
    name: "Pathiri Podi",
    description:
      "Finely ground pathiri podi prepared using selected rice for making soft and authentic Kerala pathiri. Ideal for homes, shops, and events.",
    category: "Traditional Kerala Foods",
    price: "₹140",
    image: "/images/pathiri-podi.jpeg",
    highlights: [
      "Soft Texture",
      "Authentic Kerala Recipe",
      "Premium Rice",
      "Fresh & Hygienic",
    ],
  },
];

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));

export const CONTACT_INFO = {
  whatsapp: "+919447727149",
  whatsappLink: "https://wa.me/919447727149",
  email: "prakashan456@gmail.com",
  phone: "+919447727149",
};
