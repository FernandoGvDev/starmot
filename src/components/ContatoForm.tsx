import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ContatoForm() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whats, setWhats] = useState<string>("");
  const [assunto, setAssunto] = useState<string>("Micro Switch MX15");
  const [assuntoOutro, setAssuntoOutro] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState<boolean>(false);

  // NÚMEROS CORRETOS DEFINIDOS AQUI
  const WHATSAPP_1 = "555199851530";   // +55 51 9985-1530
  const WHATSAPP_2 = "5551993371255";  // +55 51 99337-1255

  const validaEmail = (email: string) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const limpaNumero = (tel: string) => tel.replace(/\D/g, "");

  const garantirCodigoPais = (tel: string) => {
    const digitos = limpaNumero(tel);
    if (digitos.length === 0) return "";
    return digitos.startsWith("55") ? digitos : `55${digitos}`;
  };

  const enviarParaWhats = (numero: string) => {
    if (!nome.trim()) return setErro("Por favor, informe seu nome.");
    if (!email.trim() || !validaEmail(email))
      return setErro("Por favor, informe um e-mail válido.");
    if (!whats.trim())
      return setErro("Por favor, informe um telefone/WhatsApp.");

    const telefone = garantirCodigoPais(whats);
    if (!telefone) return setErro("Telefone inválido.");

    const assuntoFinal =
      assunto === "Outro"
        ? assuntoOutro.trim() || "(Assunto não informado)"
        : assunto;

    const texto = `Olá!%0A%0A` +
      `Nome: ${encodeURIComponent(nome)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `WhatsApp: ${encodeURIComponent(whats)}%0A` +
      `Assunto: ${encodeURIComponent(assuntoFinal)}%0A%0A` +
      `Mensagem:%0A${encodeURIComponent(mensagem || "(Mensagem vazia)")}`;

    const url = `https://wa.me/${numero}?text=${texto}`;

    setEnviando(true);
    window.open(url, "_blank");
    setTimeout(() => setEnviando(false), 800);
  };


  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white py-12 px-6 md:px-12 text-[#0d203b]"
    >
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Fale com um especialista</h3>
        <p className="text-gray-600 mb-6">
          Preencha o formulário e inicie uma conversa pelo WhatsApp com nossa equipe técnica.
        </p>

        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome *</label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
              placeholder="Seu nome"
              aria-label="Nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
              placeholder="seu@exemplo.com"
              aria-label="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp (telefone) *</label>
            <input
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
              placeholder="Ex: +55 (51) 9 9999-9999"
              aria-label="WhatsApp"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assunto</label>
            <select
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
              aria-label="Assunto"
            >
              <option>Micro Switch MX15</option>
              <option>Motor 1/4 CV</option>
              <option>Motor 1/3 CV</option>
              <option value="Outro">Outro</option>
            </select>

            {assunto === "Outro" && (
              <input
                value={assuntoOutro}
                onChange={(e) => setAssuntoOutro(e.target.value)}
                className="mt-3 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
                placeholder="Escreva o assunto"
                aria-label="Assunto personalizado"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows={5}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
              placeholder="Como podemos ajudar? Descreva brevemente seu projeto ou dúvida."
              aria-label="Mensagem"
            />
          </div>

          {erro && <div className="text-red-600 font-medium">{erro}</div>}

          {/* BOTÃO PRINCIPAL */}
          <div className="flex flex-col md:flex-row items-start gap-3 mt-2">
            <button
              type="button"
              disabled={enviando}
              onClick={() => enviarParaWhats(WHATSAPP_1)}
              className="inline-flex items-center gap-3 bg-[#1b3357] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-md"
            >
              <FaWhatsapp />
              {enviando ? "Abrindo WhatsApp..." : "Enviar para Marco"}
            </button>


            <div className="flex flex-col text-sm text-gray-500">
              <a
                href={`https://wa.me/${WHATSAPP_1}`}
                target="_blank"
                className="text-[#1b3357] hover:underline font-semibold"
                rel="noopener noreferrer"
              >
                Dept Técnico
              </a>
            </div>
          </div>

          {/* SEGUNDO CONTATO */}
          <div className="flex flex-col md:flex-row items-start gap-3 mt-2">
            <button
              type="button"
              disabled={enviando}
              onClick={() => enviarParaWhats(WHATSAPP_2)}
              className="inline-flex items-center gap-3 bg-[#1b3357] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-md"
            >
              <FaWhatsapp />
              {enviando ? "Abrindo WhatsApp..." : "Enviar para Assistente"}
            </button>


            <div className="flex flex-col text-sm text-gray-500">
              <a
                href={`https://wa.me/${WHATSAPP_2}`}
                target="_blank"
                className="text-[#1b3357] hover:underline font-semibold"
                rel="noopener noreferrer"
              >
                Vendas
              </a>
            </div>
          </div>

        </form>
      </div>
    </motion.section>
  );
}
