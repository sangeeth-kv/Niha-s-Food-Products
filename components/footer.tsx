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
  className="text-background/70 hover:text-green-400 transition-colors"
  whileHover={{ scale: 1.1 }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.56.746 5.062 2.156 7.207L3 29l5.953-2.117a12.94 12.94 0 007.051 2.07H16c7.184 0 13.004-5.82 13.004-13.004C29.004 8.82 23.184 3 16.004 3zm0 23.633a10.57 10.57 0 01-5.383-1.477l-.387-.23-3.531 1.254 1.156-3.441-.25-.398a10.56 10.56 0 01-1.633-5.637c0-5.836 4.746-10.582 10.582-10.582 2.824 0 5.48 1.098 7.48 3.098a10.51 10.51 0 013.102 7.484c0 5.836-4.75 10.582-10.586 10.582zm5.805-7.93c-.316-.156-1.867-.922-2.156-1.027-.289-.105-.5-.156-.711.156-.211.316-.816 1.027-1 .922-.184-.105-.777-.289-1.48-.922-.547-.488-.918-1.09-1.027-1.273-.105-.184-.012-.285.078-.379.078-.078.184-.211.289-.316.105-.105.141-.184.211-.316.07-.133.035-.25-.016-.352-.051-.105-.711-1.711-.973-2.34-.258-.621-.52-.535-.711-.543l-.605-.012c-.211 0-.551.078-.84.395-.289.316-1.105 1.078-1.105 2.629s1.133 3.047 1.289 3.258c.156.211 2.227 3.398 5.398 4.762.754.324 1.344.516 1.805.66.758.242 1.449.207 1.996.125.609-.09 1.867-.762 2.133-1.496.262-.734.262-1.367.184-1.496-.078-.129-.289-.207-.605-.363z" />
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
            <a href="/policies/privacy-policy.pdf" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="/policies/terms-of-service.pdf" className="hover:text-background transition-colors">
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
