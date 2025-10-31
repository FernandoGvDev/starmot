// 📁 src/components/Hero.tsx
import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";

// Animações reutilizáveis
const fadeLeft = { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } };

export default function Hero() {
  return (
    <section
      role="banner"
      className="flex items-center justify-center bg-gray-100 text-gray-800 pt-40 pb-15"
    >
      {/* Container centralizado com grid */}
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-0 mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* TEXTOS */}
        <motion.div
          {...fadeLeft}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Soluções em <span className="text-blue-800">Motores Elétricos</span> &<br /> 
            Micro Switches Industriais
          </h1>
          <p className="text-lg max-w-md mx-auto md:mx-0">
            Na <strong>Starmot</strong>, oferecemos produtos de alto padrão para garantir
            performance, segurança e eficiência no seu processo industrial.
          </p>

          <motion.a
            href="#produtos"
            aria-label="Ver catálogo de produtos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-900 text-white px-6 py-3 w-fit rounded-xl font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition mx-auto md:mx-0"
          >
            <FaCogs size={20} /> Ver Produtos
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
