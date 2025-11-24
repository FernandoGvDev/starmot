import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function CtaLigar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full flex flex-col items-center py-10 px-4 bg-gray-700 rounded-2xl shadow-xl text-white gap-4 mb-20"
          aria-labelledby="cta-ligar-titulo"
        >
          <h2
            id="cta-ligar-titulo"
            className="text-3xl font-bold text-center"
          >
            Ou Ligue Diretamente
          </h2>

          <p className="text-lg opacity-90">Para os números</p>

          <div className="flex flex-col gap-3 mt-4 w-full max-w-sm">
            <NumberButton number="51 3341 9667" />
            <NumberButton number="51 3028 9647" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface NumberButtonProps {
  number: string;
}

function NumberButton({ number }: NumberButtonProps) {
  const tel = number.replace(/\s+/g, "");

  return (
    <a
      href={`tel:${tel}`}
      aria-label={`Ligar para o número ${number}`}
      className="flex items-center justify-center gap-3 bg-white text-blue-700 font-semibold rounded-xl py-3 shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
    >
      <FaPhoneAlt aria-hidden="true" className="text-xl" />
      {number}
    </a>
  );
}
