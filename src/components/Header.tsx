import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logoAzul from "../assets/img/logo-azul.jpeg";
import logoBranca from "../assets/img/logo-branca.jpeg";

const SCROLL_THRESHOLD = 30;

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Produtos", href: "/#produtos" }, // produto só existe na home
];

const WhatsAppButton = ({ className, text = "Fale com um especialista" }: { className?: string; text?: string }) => {
  const whatsappLink = `https://wa.me/555199851530?text=Olá, quero falar com um especialista!`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 bg-green-600 px-4 py-2 rounded-xl text-white font-medium hover:scale-105 hover:opacity-80 transition ${className}`}
    >
      <FaWhatsapp size={20} />
      {text}
    </a>
  );
};

// Hook customizado para scroll
const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};

// Função para scroll suave
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Menu Mobile
const MobileMenu = ({
  open,
  onClose,
  handleLinkClick,
}: {
  open: boolean;
  onClose: () => void;
  handleLinkClick: (href: string) => void;
}) => {
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden bg-[#1b3357] text-white flex flex-col gap-6 p-6 text-lg"
    >
      {navLinks.map((link) => (
        <button
          key={link.label}
          onClick={() => { handleLinkClick(link.href); onClose(); }}
          className="w-full text-left"
        >
          {link.label}
        </button>
      ))}
      <WhatsAppButton className="mt-2" />
    </motion.div>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    if (href === "/#produtos") {
      if (location.pathname !== "/") {
        // se não estiver na home, navega primeiro
        navigate("/", { replace: false });
        setTimeout(() => scrollToId("produtos"), 100); // espera a página renderizar
      } else {
        scrollToId("produtos");
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out shadow-md ${
        scrolled ? "bg-white" : "bg-[#1b3357]"
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
          className="w-32 md:w-40 transition-all duration-300 ease-in-out"
        />

        {/* MENU DESKTOP */}
        <nav role="navigation" className="hidden md:flex gap-10 font-medium transition-colors duration-300">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className={`transition-colors duration-300 ${
                scrolled ? "text-[#1b3357]" : "text-white"
              } hover:text-blue-500`}
            >
              {link.label}
            </button>
          ))}
          <WhatsAppButton className="ml-4" />
        </nav>

        {/* MENU MOBILE ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-3xl focus:outline-none hover:opacity-80 transition-colors duration-300 ${
            scrolled ? "text-[#1b3357]" : "text-white"
          }`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} handleLinkClick={handleLinkClick} />
    </header>
  );
}
