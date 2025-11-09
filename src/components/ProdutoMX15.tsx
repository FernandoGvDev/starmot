import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import mx15pdf from "../assets/pdf/mx15.pdf";
import mx15img from "../assets/img/mx15.jpeg";

export default function ProdutoMX15() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = mx15pdf;
    link.download = "micro-switch-mx15-starmot.pdf";
    link.click();
  };

  return (
    <section className="w-full bg-white py-20 px-6 text-[#1b3357] flex flex-col items-center" id ='produtos'>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center mb-12">
        {/* IMAGEM */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={mx15img}
          alt="Micro Switch MX15"
          className="w-full max-w-md mx-auto rounded-xl shadow-lg border"
        />

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Micro Switch MX15</h2>
          <p className="text-gray-600 mb-6">
            O Micro Switch MX15 oferece alta durabilidade, precisão de acionamento e resistência
            para aplicações industriais exigentes. Ideal para sistemas de automação de portões, equipamentos industriais e manutenção de portões em geral.
          </p>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-[#1b3357] text-white px-6 py-3 rounded-xl hover:scale-105 transition shadow-md hover:shadow-lg w-fit mb-4"
          >
            <FaDownload size={18} /> Baixar PDF
          </button>
        </motion.div>
      </div>

      {/* VISUALIZAÇÃO EMBUTIDA DO PDF */}
      <motion.iframe
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        src={mx15pdf}
        className="w-full max-w-5xl h-[600px] border rounded-xl shadow-lg"
        title="Catálogo Micro Switch MX15"
      />
    </section>
  );
}
