import { motion, useScroll, useSpring } from "framer-motion";
import { Building2, Truck, Globe2, Trophy } from "lucide-react";

// Tipagem opcional para tornar reutilizável
interface TimelineItem {
  icon: JSX.Element;
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface TimelineProps {
  data?: TimelineItem[];
}

export default function TimelineStarmot({ data }: TimelineProps) {
  const defaultData: TimelineItem[] = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />, 
      year: "1999",
      title: "Fundação da Starmot",
      description:
        "Início das atividades com foco em motores elétricos e compromisso com qualidade e confiança.",
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />, 
      year: "2010",
      title: "Início das Importações",
      description:
        "Ampliação da atuação com importação de motores de baixa potência e chave MX-15 para automação de portões.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-600" />, 
      year: "Expansão",
      title: "Expansão Nacional",
      description:
        "Atuação em todo o território brasileiro, fornecendo tecnologia e suporte especializado.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500 drop-shadow-glow" />, 
      year: "Hoje",
      title: "Referência no Setor",
      description:
        "Empresa consolidada e reconhecida pela confiabilidade, inovação e excelência em automação.",
      highlight: true,
    },
  ];

  const timelineData = data || defaultData;

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          Nossa História & Trajetória
        </h2>

        <div className="relative border-l-4 border-blue-700/30 pl-8 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col gap-1 ${item.highlight ? "bg-white p-4 rounded-xl shadow-md border border-yellow-400/40" : ""}`}
            >
              <div className="absolute -left-14 flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-full border border-blue-200">
                {item.icon}
              </div>
              <span className={`text-sm font-semibold ${item.highlight ? "text-yellow-600" : "text-blue-700"}`}>
                {item.year}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}

          {/* Indicador animado da timeline */}
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-0 top-0 w-1 bg-blue-700 origin-top rounded"
          />
        </div>
      </div>
    </section>
  );
}
