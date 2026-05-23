"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/products";

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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

  const contactMethods = [
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Chat with us directly",
      link: CONTACT_INFO.whatsappLink,
      text: CONTACT_INFO.phone,
      target: "_blank",
    },
    {
      icon: "📧",
      title: "Email",
      description: "Send us a message",
      link: `mailto:${CONTACT_INFO.email}`,
      text: CONTACT_INFO.email,
      target: "_self",
    },
    {
      icon: "📱",
      title: "Phone",
      description: "Call us anytime",
      link: `tel:${CONTACT_INFO.phone}`,
      text: CONTACT_INFO.phone,
      target: "_self",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out and let&apos;s connect.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.target}
              rel={method.target === "_blank" ? "noopener noreferrer" : ""}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {method.description}
              </p>
              <p className="text-primary font-semibold hover:underline">
                {method.text}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Taste Authentic Kerala?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bring the Authentic Taste of Kerala
Contact us on WhatsApp to order premium quality Puttu Podi and Pathiri Podi made with traditional recipes.
          </p>
          <motion.a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
