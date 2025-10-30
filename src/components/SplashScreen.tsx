import { useEffect, useState } from "react";
import logo from "../assets/img/logo-branca.jpeg";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const fullText = "Referência em soluções para motores elétricos e micro switches";
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) { // <-- pega todas as letras
        setDisplayText(fullText.slice(0, i + 1)); // evita texto “pulando”
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => onFinish(), 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-50">
      <img src={logo} alt="Starmot Logo" className="w-48 md:w-64 mb-6 animate-fadeIn" />
      <p className="text-gray-700 text-center text-lg md:text-2xl font-medium animate-fadeIn font-sans">
        {displayText}
      </p>
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
