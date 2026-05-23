"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "100% Authentic",
    description:
      "Traditional Kerala recipes passed down through generations, prepared with authentic methods and ingredients.",
    icon: "🌾",
  },
  {
    title: "Premium Quality",
    description:
      "Carefully sourced ingredients from the finest producers in Kerala, ensuring exceptional quality in every product.",
    icon: "⭐",
  },
  {
    title: "No Additives",
    description:
      "Pure, natural products with no artificial preservatives, colors, or additives. Just wholesome goodness.",
    icon: "🌱",
  },
  {
    title: "Fresh & Handmade",
    description:
      "Made in small batches with attention to detail, ensuring freshness and quality with every order.",
    icon: "👐",
  },
];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Niha&apos;s</span> Food Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just food—a commitment to quality, authenticity, and tradition
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Our Story
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Niha&apos;s Food Products was started with a passion for bringing the authentic taste of Kerala to every home. Inspired by traditional family recipes and homemade cooking methods, we carefully prepare each product with quality ingredients and genuine Kerala flavors.

Our mission is to preserve Kerala’s rich culinary heritage while delivering fresh, hygienic, and premium-quality food products made with care and tradition.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every product is a testament to our commitment to quality, purity, and
            the preservation of Kerala&apos;s culinary heritage. We believe that good
            food should be simple, authentic, and prepared with love.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
