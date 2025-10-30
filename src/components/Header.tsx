import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import logoAzul from "../assets/img/logo-azul.jpeg";
import logoBranca from "../assets/img/logo-branca.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/555199851530?text=Olá, quero falar com um especialista!`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md ${scrolled ? "bg-white" : "bg-[#1b3357]"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={scrolled ? logoBranca : logoAzul}
          alt="Logo"
          className="w-32 md:w-40 transition-all duration-300"
        />

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-10 font-medium transition-colors duration-300">
          <a
            href="#inicio"
            className={`transition-colors duration-300 ${scrolled ? "text-[#1b3357]" : "text-white"
              } hover:text-blue-500`}
          >
            Início
          </a>
          <a
            href="#sobre"
            className={`transition-colors duration-300 ${scrolled ? "text-[#1b3357]" : "text-white"
              } hover:text-blue-500`}
          >
            Sobre
          </a>
          <a
            href="#motores"
            className={`transition-colors duration-300 ${scrolled ? "text-[#1b3357]" : "text-white"
              } hover:text-blue-500`}
          >
            Motores
          </a>
        </nav>

        {/* BOTÃO WHATSAPP DESKTOP */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-green-600 px-4 py-2 rounded-xl text-white font-medium hover:scale-105 transition"
        >
          <FaWhatsapp size={20} />
          Fale com um especialista
        </a>

        {/* MENU MOBILE ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl focus:outline-none transition-colors duration-300 ${scrolled ? "text-[#1b3357]" : "text-white"
            }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#1b3357] text-white flex flex-col gap-6 p-6 text-lg"
        >
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#motores" onClick={() => setMenuOpen(false)}>Motores</a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-xl text-white font-medium"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </motion.div>
      )}
    </header>
  );
}
