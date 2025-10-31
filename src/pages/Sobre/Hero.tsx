import { motion } from "framer-motion";
import logo from "../../assets/img/logo-azul.jpeg"; // Ajuste o caminho conforme seu projeto

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-900 to-blue-600 text-white py-24 px-6 flex flex-col items-center justify-center text-center">
      <motion.img
        src={logo}
        alt="Starmot Logo"
        className="w-32 mb-6 drop-shadow-lg pt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl font-bold mb-4 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Desde 1999 oferecendo confiança e tecnologia em motores elétricos
      </motion.h1>

      <motion.p
        className="text-lg max-w-xl text-white/90 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A Starmot Comercial é referência nacional em motores elétricos e componentes para automação de portões. Qualidade, experiência e atendimento próximo para impulsionar seu negócio com segurança.
      </motion.p>

      <motion.a
        href="#contato"
        className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:bg-blue-100 transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Entre em Contato
      </motion.a>
    </section>
  );
}
