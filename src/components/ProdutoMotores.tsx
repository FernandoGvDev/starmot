import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

import motor14PDF from "../assets/pdf/motor-1-4cv.pdf";
import motor13PDF from "../assets/pdf/motor-1-3cv.pdf";

import motor14IMG from "../assets/img/motor-1-4cv.jpeg";
import motor13IMG from "../assets/img/motor-1-3cv.jpeg";

export default function ProdutoMotores() {
  const handleDownload = (file: string, nome: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = `motor-${nome}-starmot.pdf`;
    link.click();
  };

  const motores = [
    {
      titulo: "Motor Elétrico 1/4 CV – Para Portões Automáticos",
      img: motor14IMG,
      pdf: motor14PDF,
      descricao:
        "Motor elétrico indicado para movimentadores de portão. Garante segurança, durabilidade e funcionamento contínuo com alta eficiência.",
      nome: "1-4cv",
      alt: "Motor elétrico 1/4 CV da Starmot para portões automáticos",
    },
    {
      titulo: "Motor Elétrico Ventilado 1/3 CV – Alto Desempenho",
      img: motor13IMG,
      pdf: motor13PDF,
      descricao:
        "Modelo robusto para portões maiores, oferecendo força, estabilidade e eficiência superior com baixo consumo de energia.",
      nome: "1-3cv",
      alt: "Motor elétrico ventilado 1/3 CV Starmot – alta potência industrial",
    },
  ];

  return (
    <section
      className="w-full bg-white py-20 px-6 text-[#1b3357] flex flex-col items-center"
      aria-label="Linha de motores elétricos Starmot"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center mb-12">

        {motores.map((motor, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={motor.img}
              alt={motor.alt}
              loading="lazy"
              className="w-full max-w-sm rounded-xl shadow-lg border mb-6"
            />

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 whitespace-nowrap">
              {motor.titulo}
            </h2>

            <p className="text-gray-600 mb-4 text-sm px-4">{motor.descricao}</p>

            <button
              onClick={() => handleDownload(motor.pdf, motor.nome)}
              className="flex items-center gap-2 bg-[#1b3357] text-white px-6 py-2 rounded-xl hover:scale-105 transition shadow-md hover:shadow-lg w-fit mb-3"
              aria-label={`Baixar PDF do ${motor.titulo}`}
            >
              <FaDownload size={18} /> Baixar PDF
            </button>

            <motion.iframe
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={motor.pdf}
              className="w-full max-w-sm h-[350px] border rounded-xl shadow-md mb-6"
              title={`Catálogo técnico do ${motor.titulo}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
