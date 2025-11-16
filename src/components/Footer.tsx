// 📁 src/components/Footer.tsx
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/img/logo-azul.jpeg";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Produtos", href: "/#produtos" }, // produto só existe na home
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    if (href === "/#produtos") {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => scrollToId("produtos"), 100);
      } else {
        scrollToId("produtos");
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-[#1b3357] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* LOGO E DESCRIÇÃO */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Starmot Logo" className="w-32 mb-4" />
          <p className="text-gray-200">
            Starmot - Soluções em Motores Elétricos e Micro Switches Industriais.
            Qualidade, eficiência e confiabilidade para o seu negócio.
          </p>
        </div>

        {/* LINKS RÁPIDOS */}
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg mb-4">Links</h4>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="mb-2 text-left hover:text-gray-300 transition"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Contatos */}
        <div className="flex flex-col">
  <h4 className="font-semibold text-lg mb-4">Contato</h4>

  <a
    href="https://wa.me/555199851530"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 mb-2 hover:text-gray-300 transition"
  >
    <FaWhatsapp /> Dept Técnico: (51) 99851-530
  </a>

  <a
    href="https://wa.me/5551993371255"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 mb-2 hover:text-gray-300 transition"
  >
    <FaWhatsapp /> Vendas: (51) 9337-1255
  </a>

  <a
    href="mailto:starmot@starmot.com.br"
    className="flex items-center gap-2 mb-2 hover:text-gray-300 transition"
  >
    <FaEnvelope /> Email: starmot@starmot.com.br
  </a>
</div>

      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Starmot Comercial Ltda. Todos os direitos reservados.
      </div>
    </footer>
  );
}
