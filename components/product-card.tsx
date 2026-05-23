"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product, CONTACT_INFO } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };

  const handleOrderClick = () => {
    const message = `Hai there. I want to inquiry about ${product.name}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${CONTACT_INFO.whatsappLink}?text=${encodedMessage}`, "_blank");
  };

  return (
    <motion.div
      variants={containerVariants}
      className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image Container */}
      <motion.div
  className="relative h-80 bg-white overflow-hidden flex items-center justify-center p-4"
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  <Image
    src={product.image}
    alt={product.name}
    width={300}
    height={300}
    className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
  />

  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
    {product.category}
  </div>
</motion.div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.highlights.map((highlight) => (
            <span
              key={highlight}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
  Contact for Price
</span>
          <motion.button
            onClick={handleOrderClick}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
