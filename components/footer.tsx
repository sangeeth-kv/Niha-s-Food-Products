"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/products";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Home", href: "#home" },
    { title: "Products", href: "#products" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Section */}
          <div>
            <h3 className="font-bold text-2xl mb-3">Niha&apos;s Food Products</h3>
            <p className="text-background/80 mb-4">
              Delivering authentic Kerala taste with premium quality Puttu Podi and Pathiri Podi made using traditional recipes and fresh ingredients.
            </p>
            <div className="flex gap-4">
              <motion.a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.507 14.307l-.009.075c-1.444 1.935-4.149 2.529-6.49 1.308-2.341-1.221-3.577-4.35-2.731-7.045.846-2.696 3.636-4.345 6.589-3.957 2.953.388 5.145 2.682 5.145 5.677 0 .46-.052.905-.152 1.341.227-.067.45-.135.672-.207l2.157-.715c.446-.148.783-.483.872-.912.088-.429-.098-.883-.486-1.125-.388-.242-.886-.272-1.298-.089l-2.112.704c-.473-.37-1.021-.618-1.603-.699-.582-.081-1.166.041-1.709.36.098-.475.16-.976.16-1.495 0-1.006-.196-1.983-.556-2.915-.36-.932-.879-1.766-1.544-2.49-.665-.724-1.463-1.305-2.361-1.718-.898-.413-1.888-.629-2.925-.629-2.21 0-4.317.896-5.838 2.417s-2.417 3.628-2.417 5.838.896 4.317 2.417 5.838 3.628 2.417 5.838 2.417c1.095 0 2.158-.217 3.169-.639M11.978 7.024c1.089 0 2.055.444 2.758 1.146.702.702 1.146 1.669 1.146 2.758s-.444 2.055-1.146 2.758c-.702.702-1.669 1.146-2.758 1.146s-2.055-.444-2.758-1.146c-.702-.702-1.146-1.669-1.146-2.758s.444-2.055 1.146-2.758c.702-.702 1.669-1.146 2.758-1.146z" />
                </svg>
              </motion.a>
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-background/70 hover:text-background transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </motion.a>
              <motion.a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-background/70 hover:text-background transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </motion.a>
              <motion.a
  href="https://instagram.com/nihas94477"
  target="_blank"
  rel="noopener noreferrer"
  className="text-background/70 hover:text-background transition-colors flex items-center gap-2"
  whileHover={{ scale: 1.1 }}
>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5c2.182 0 3.95 1.768 3.95 3.95v8.5c0 2.182-1.768 3.95-3.95 3.95h-8.5c-2.182 0-3.95-1.768-3.95-3.95v-8.5c0-2.182 1.768-3.95 3.95-3.95zm8.95 1.35a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.8A3.2 3.2 0 1112 15.2 3.2 3.2 0 0112 8.8z" />
  </svg>


</motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 4 }}
                >
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <p>
                <strong>WhatsApp:</strong> {CONTACT_INFO.phone}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-background transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <strong>Response Time:</strong> 2-4 hours
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-background/70 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            © {currentYear} Niha&apos;s Food Products. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
            
          </div>
        </motion.div>
<motion.div
  className="mt-6 flex justify-center"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <a
    href="mailto:sangeethkvdevelops@gmail.com"
    className="text-sm text-background/60 hover:text-background transition-all duration-300 flex items-center gap-2 group"
  >
    <span className="h-px w-8 bg-background/30 group-hover:w-12 transition-all"></span>

    <span>
      Developed by{" "}
      <span className="font-semibold text-background">
        Sangeeth KV
      </span>
    </span>

    <span className="h-px w-8 bg-background/30 group-hover:w-12 transition-all"></span>
  </a>
</motion.div>      </div>
    </footer>
  );
}
