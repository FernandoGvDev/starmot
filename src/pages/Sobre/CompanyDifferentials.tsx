import React from 'react';
import { motion } from "framer-motion";
import { Award, CheckCircle, Truck, Send, Headset } from "lucide-react";

interface DifferentialItem {
  icon: JSX.Element;
  text: string;
}

interface CompanyDifferentialsProps {
  items?: DifferentialItem[];
}

export default function CompanyDifferentials({ items }: CompanyDifferentialsProps) {
  const defaultItems: DifferentialItem[] = [
    { icon: <Award className="w-8 h-8 text-blue-700" />, text: "+25 anos de experiência" },
    { icon: <CheckCircle className="w-8 h-8 text-blue-700" />, text: "Produtos com alto padrão de qualidade" },
    { icon: <Truck className="w-8 h-8 text-blue-700" />, text: "Importação própria" },
    { icon: <Send className="w-8 h-8 text-blue-700" />, text: "Envios para todo o Brasil" },
    { icon: <Headset className="w-8 h-8 text-blue-700" />, text: "Suporte técnico especializado" },
  ];

  const data = items || defaultItems;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12"
        >
          Diferenciais da Empresa
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 shadow-sm p-6 rounded-xl flex flex-col items-center gap-4 hover:shadow-md hover:scale-[1.02] transition-all"
            >
              <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-blue-900 font-semibold text-base md:text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
