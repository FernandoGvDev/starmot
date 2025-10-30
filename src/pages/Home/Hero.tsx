import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import banner from '../../assets/img/motoreseletricossorocaba-784x368.png'

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#f5f6f7] text-[#1b3357] px-6 pt-10 md:pt-40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* TEXTOS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Soluções em <span className="text-[#0d203b]">Motores Elétricos</span> &
            <br /> Micro Switches Industriais
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Na <strong>Starmot</strong>, oferecemos produtos de alto padrão para garantir
            performance, segurança e eficiência no seu processo industrial.
          </p>

          <motion.a
            href="#produtos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1b3357] text-white px-6 py-3 w-fit rounded-xl font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transition"
          >
            <FaCogs size={20} /> Ver Catálogo
          </motion.a>
        </motion.div>

        {/* IMAGEM / GRÁFICO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.img
            src= {banner}
            alt="Motor Elétrico Industrial"
            className="max-w-xs md:max-w-md rounded-xl shadow-lg border border-gray-200"
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
