// 📁 src/components/ContactCTA.tsx
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function ContactCTA() {
  const whatsappLink = "https://wa.me/555199851530?text=Olá, quero falar sobre motores elétricos!";

  const ctaText =
    "Precisa de motores elétricos ou componentes para automação? Estamos prontos para atender você em todo o Brasil.";

  return (
    <section className="py-20 bg-blue-600 text-gray-950 mx-6 md:mx-20 my-10 rounded-4xl">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl font-semibold max-w-3xl text-white">
          {ctaText}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-colors px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            <Phone className="w-5 h-5" /> WhatsApp
          </a>
        </div>

        <span className="mt-4 text-sm text-white/80">Atendimento nacional</span>
      </motion.div>
    </section>
  );
}
