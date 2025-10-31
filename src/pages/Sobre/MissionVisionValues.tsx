// 📁 src/components/MissionVisionValues.tsx
import { motion } from "framer-motion";
import { Shield, Target, HeartHandshake } from "lucide-react";

export default function MissionVisionValues() {
  const content = [
    {
      icon: <Shield className="w-10 h-10 text-blue-700" />,
      title: "Missão",
      text: "Fornecer soluções em motores elétricos com qualidade e confiança.",
    },
    {
      icon: <Target className="w-10 h-10 text-blue-700" />,
      title: "Visão",
      text: "Ser referência nacional em tecnologia para automação.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-blue-700" />,
      title: "Valores",
      text: "Compromisso, inovação, honestidade e suporte próximo ao cliente.",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12"
        >
          Missão, Visão e Valores
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
