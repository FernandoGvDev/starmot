import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

// 📁 coloque os PDFs em src/assets/pdf/motor-1-4cv.pdf e motor-1-3cv.pdf
import motor14PDF from "../assets/pdf/motor-1-4cv.pdf";
import motor13PDF from "../assets/pdf/motor-1-3cv.pdf";

// 📁 coloque as imagens em src/assets/img/motor-1-4cv.jpeg e src/assets/img/motor-1-3cv.jpeg
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
      titulo: "Motor Elétrico 1/4 CV",
      img: motor14IMG,
      pdf: motor14PDF,
      descricao:
        "Motor elétrico ideal para movimentadores de portão. Alta durabilidade, segurança e desempenho para uso contínuo.",
      nome: "1-4cv",
    },
    {
      titulo: "Motor Elétrico Ventilado 1/3 CV",
      img: motor13IMG,
      pdf: motor13PDF,
      descricao:
        "Modelo mais robusto para portões maiores, oferecendo força e eficiência superior com baixo consumo de energia.",
      nome: "1-3cv",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 text-[#1b3357] flex flex-col items-center">
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
              alt={motor.titulo}
              className="w-full max-w-sm rounded-xl shadow-lg border mb-6"
            />
            <h2 className="text-2xl font-bold mb-2">{motor.titulo}</h2>
            <p className="text-gray-600 mb-4 text-sm px-4">{motor.descricao}</p>

            <button
              onClick={() => handleDownload(motor.pdf, motor.nome)}
              className="flex items-center gap-2 bg-[#1b3357] text-white px-6 py-2 rounded-xl hover:scale-105 transition shadow-md hover:shadow-lg w-fit mb-3"
            >
              <FaDownload size={18} /> Baixar PDF
            </button>

            <motion.iframe
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={motor.pdf}
              className="w-full max-w-sm h-[350px] border rounded-xl shadow-md mb-6"
              title={`Catálogo ${motor.titulo}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
