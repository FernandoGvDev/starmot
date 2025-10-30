import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/img/logo-azul.jpeg";

export default function Footer() {
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
          <a href="#inicio" className="mb-2 hover:text-gray-300 transition">Início</a>
          <a href="#sobre" className="mb-2 hover:text-gray-300 transition">Sobre</a>
          <a href="#produtos" className="mb-2 hover:text-gray-300 transition">Produtos</a>
          <a href="#contato" className="mb-2 hover:text-gray-300 transition">Contato</a>
        </div>

        {/* Contatos */}
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg mb-4">Contato</h4>
          <a href="https://wa.me/555199851530" target="_blank" className="flex items-center gap-2 mb-2 hover:text-gray-300 transition">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="mailto:contato@starmot.com" className="flex items-center gap-2 mb-2 hover:text-gray-300 transition">
            <FaEnvelope /> Email
          </a>
          <a href="https://www.instagram.com/starmot" target="_blank" className="flex items-center gap-2 mb-2 hover:text-gray-300 transition">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Starmot Comercial  Ltda. Todos os direitos reservados.
      </div>
    </footer>
  );
}
