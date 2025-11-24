import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ContatoForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whats, setWhats] = useState("");
  const [assunto, setAssunto] = useState("Micro Switch MX15");
  const [assuntoOutro, setAssuntoOutro] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  const WHATSAPP_1 = "555199851530";
  const WHATSAPP_2 = "5551993371255";

  const validaEmail = (email: string) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const limpaNumero = (tel: string) => tel.replace(/\D/g, "");

  const garantirCodigoPais = (tel: string) => {
    const digitos = limpaNumero(tel);
    return digitos.length === 0
      ? ""
      : digitos.startsWith("55")
      ? digitos
      : `55${digitos}`;
  };

  const enviarParaWhats = (numero: string) => {
    setErro(null);

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
      aria-labelledby="titulo-contato"
    >
      <div className="max-w-3xl mx-auto">
        <h3 id="titulo-contato" className="text-2xl md:text-3xl font-bold mb-2">
          Fale com um especialista
        </h3>

        <p className="text-gray-600 mb-6">
          Preencha o formulário e inicie uma conversa pelo WhatsApp com nossa equipe técnica.
        </p>

        <form
          className="grid grid-cols-1 gap-4"
          noValidate
          aria-describedby={erro ? "erro-form" : undefined}
        >
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="nome">
              Nome *
            </label>
            <input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              required
              aria-required="true"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="seu@exemplo.com"
              required
              aria-required="true"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="whats">
              WhatsApp *
            </label>
            <input
              id="whats"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
              placeholder="Ex: +55 (51) 9 9999-9999"
              required
              aria-required="true"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="assunto">
              Assunto
            </label>

            <select
              id="assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
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
                placeholder="Escreva o assunto"
                aria-label="Assunto personalizado"
                className="mt-3 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows={5}
              placeholder="Como podemos ajudar? Descreva sua dúvida."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1b3357]"
            />
          </div>

          {erro && (
            <div id="erro-form" className="text-red-600 font-medium">
              {erro}
            </div>
          )}

          {/* BOTÃO PRINCIPAL */}
          <div className="flex flex-col md:flex-row items-start gap-3 mt-2">
            <button
              type="button"
              disabled={enviando}
              onClick={() => enviarParaWhats(WHATSAPP_1)}
              aria-label="Enviar formulário para o departamento técnico via WhatsApp"
              className="inline-flex items-center gap-3 bg-[#1b3357] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-md"
            >
              <FaWhatsapp aria-hidden="true" />
              {enviando ? "Abrindo WhatsApp..." : "Enviar para Dept Técnico"}
            </button>
          </div>

          {/* SEGUNDO CONTATO */}
          <div className="flex flex-col md:flex-row items-start gap-3 mt-2">
            <button
              type="button"
              disabled={enviando}
              onClick={() => enviarParaWhats(WHATSAPP_2)}
              aria-label="Enviar formulário para o assistente de vendas via WhatsApp"
              className="inline-flex items-center gap-3 bg-[#1b3357] text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-md"
            >
              <FaWhatsapp aria-hidden="true" />
              {enviando ? "Abrindo WhatsApp..." : "Enviar para Assistente de Vendas"}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
