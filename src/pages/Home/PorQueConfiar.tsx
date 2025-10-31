;import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, ThumbsUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PorQueConfiar() {
  const cards = [
    {
      icon: <ShieldCheck size={36} />,
      title: "Qualidade Garantida",
      text: "Produtos selecionados e certificados para oferecer máxima segurança e durabilidade industrial.",
    },
    {
      icon: <Award size={36} />,
      title: "Especialistas no Setor",
      text: "Equipe com experiência em motores elétricos e micro switches industriais, garantindo orientação técnica precisa.",
    },
    {
      icon: <Clock size={36} />,
      title: "Entrega Rápida e Eficiência",
      text: "Compromisso com prazos e suporte constante para que sua operação nunca pare.",
    },
    {
      icon: <ThumbsUp size={36} />,
      title: "Confiança do Mercado",
      text: "Parcerias com indústrias e empresas que exigem alta performance e confiabilidade.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 text-[#1b3357]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Por que confiar na <span className="text-[#0d203b]">Starmot?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Somos referência em soluções para motores elétricos e micro switches, unindo expertise, tecnologia e atendimento diferenciado.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#f8f9fa] p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition cursor-default"
          >
            <div className="mb-4 text-[#1b3357]">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-14"
      >
        <Link
          to="/sobre"
          className="inline-flex items-center gap-2 bg-[#1b3357] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-md hover:shadow-lg"
        >
          Conheça nossa história
          <ChevronRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
}