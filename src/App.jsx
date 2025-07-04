import React from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  MessageCircle,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import "./App.css";
import VTJLogo from "./assets/vtjsystemflows.jpg";
import CacoImg from "./assets/caco.png";
import MaythImg from "./assets/mayth.png";
import PowerImg from "./assets/power.jpg";
import SectionTutorial from "./components/section.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A23] text-white overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img
                src={VTJLogo}
                alt="VTJ System Flows Logo"
                className="h-16 w-auto rounded-full object-cover hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
                onClick={() => window.location.reload()}
              />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="font-bold hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              onClick={(e) => {
                e.preventDefault(); // impede o comportamento padrão do link
                const section = document.getElementById("features");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Recursos
            </a>
            <a
              href="#additional-features"
              className="font-bold hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              onClick={(e) => {
                e.preventDefault(); // impede o comportamento padrão do link
                const section = document.getElementById("additional-features");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Benefícios
            </a>
            <a
              href="#contato"
              className="font-bold hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              onClick={(e) => {
                e.preventDefault(); // impede o comportamento padrão do link
                const section = document.getElementById("contato");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contato
            </a>
          </div>
        </nav>
        <a
          href="https://wa.me/5571999042609?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2c-5.523 0-10 4.477-10 10a9.946 9.946 0 002.151 6.3L2 22l3.796-1.133A9.962 9.962 0 0012.04 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm.017 17.934a8.041 8.041 0 01-4.074-1.122l-.291-.173-2.716.811.862-2.648-.177-.273a8.013 8.013 0 01-1.232-4.32c0-4.425 3.596-8.021 8.021-8.021 2.144 0 4.158.835 5.672 2.35a7.951 7.951 0 012.35 5.671c0 4.425-3.597 8.021-8.021 8.021zm4.579-5.849c-.25-.124-1.473-.729-1.701-.812-.228-.083-.394-.124-.559.124-.167.25-.641.812-.786.978-.146.167-.29.187-.54.063-.25-.125-1.054-.388-2.008-1.237-.742-.66-1.244-1.476-1.39-1.726-.146-.25-.016-.385.109-.51.113-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.166.041-.312-.02-.437-.063-.124-.559-1.35-.766-1.852-.2-.481-.402-.416-.559-.416h-.479c-.166 0-.437.063-.666.312-.228.25-.875.854-.875 2.08 0 1.226.896 2.414 1.021 2.579.125.167 1.762 2.688 4.271 3.77.597.257 1.063.41 1.426.524.598.189 1.143.163 1.572.1.48-.072 1.473-.601 1.679-1.181.207-.58.207-1.077.146-1.18-.063-.104-.229-.167-.48-.292z" />
          </svg>
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="float-animation mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              Revolucione seu atendimento
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            Automação Inteligente para WhatsApp
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transforme seu atendimento com nossa plataforma de automação
            avançada. Respostas instantâneas, fluxos personalizados e integração
            completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white font-bold bg-[#0c9ebe] px-8 py-4 text-lg group hover:bg-[#0c9ebe] hover:cursor-pointer 
             transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border hover:border-primary/50 backdrop-blur-sm rounded-2xl"
              onClick={() => {
                const section = document.getElementById("benefits");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Ver Demonstração
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-8 mt-16 max-w-3xl mx-auto">
            <h1 className=" text-white font-bold text-4xl">
              Empresas parceiras
            </h1>
            {/* empresas */}
            <div className="flex gap-12 items-center justify-center">
              <img
                src={CacoImg}
                alt="Caco Logo"
                className="h-24 w-24 rounded-full object-cover transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
              />
              <img
                src={PowerImg}
                alt="Power Bahia Logo"
                className="h-24 w-24 rounded-full object-cover transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
              />
              <img
                src={MaythImg}
                alt="Mayth Logo"
                className="h-24 w-24 rounded-full object-cover transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section id="features" className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text ">
            Recursos Poderosos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto ">
            Tudo que você precisa para automatizar e otimizar seu atendimento no
            WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-primary/50 transition-all duration-300 card-hover">
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 float-animation">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 ">Respostas Instantâneas</h3>
            <p className="text-gray-300 leading-relaxed ">
              Configure respostas automáticas inteligentes que respondem seus
              clientes 24/7, mesmo quando você não está disponível.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-primary/50 transition-all duration-300 card-hover">
            <div
              className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 float-animation"
              style={{ animationDelay: "0.5s" }}
            >
              <img
                src={VTJLogo}
                alt="VTJ System Flows Icon"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 ">IA Avançada</h3>
            <p className="text-gray-300 leading-relaxed ">
              Nossa inteligência artificial entende o contexto das conversas e
              oferece respostas personalizadas e relevantes.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-primary/50 transition-all duration-300 card-hover">
            <div
              className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 float-animation"
              style={{ animationDelay: "1s" }}
            >
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 ">Fluxos Personalizados</h3>
            <p className="text-gray-300 leading-relaxed ">
              Crie fluxos de conversa únicos para diferentes tipos de
              atendimento, vendas e suporte ao cliente.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div
          className="grid md:grid-cols-3 gap-8 mt-12"
          id="additional-features"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-primary/50 transition-all duration-300 card-hover">
            <div
              className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 float-animation"
              style={{ animationDelay: "1s" }}
            >
              <Shield className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 ">Segurança Total</h3>
            <p className="text-gray-300 leading-relaxed ">
              Criptografia de ponta a ponta e conformidade com LGPD para
              proteger os dados dos seus clientes.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-primary/50 transition-all duration-300 card-hover">
            <div
              className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 float-animation"
              style={{ animationDelay: "1s" }}
            >
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 ">Análises em Tempo Real</h3>
            <p className="text-gray-300 leading-relaxed ">
              Monitore métricas de atendimento, taxa de conversão e satisfação
              do cliente em tempo real.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-primary/50 transition-all duration-300 card-hover">
            <div
              className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 float-animation"
              style={{ animationDelay: "1s" }}
            >
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 ">Equipe Colaborativa</h3>
            <p className="text-gray-300 leading-relaxed ">
              Gerencie múltiplos atendentes, distribua conversas automaticamente
              e mantenha histórico completo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-20" id="benefits">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text ">
              Por que escolher a VTJ System Flows?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 ">
                    Aumento de até 300% na Eficiência
                  </h3>
                  <p className="text-gray-300 ">
                    Automatize tarefas repetitivas e foque no que realmente
                    importa para seu negócio.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 ">
                    Disponibilidade 24/7
                  </h3>
                  <p className="text-gray-300 ">
                    Atendimento instantâneo para seus clientes, 24h por dia, com
                    nossa equipe de suporte.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 ">
                    Integração Simples
                  </h3>
                  <p className="text-gray-300 ">
                    Integração rápida, feita por quem entende. Deixe tudo com a
                    gente.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
              <div className="bg-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center pulse-glow">
                    <img
                      src={VTJLogo}
                      alt="VTJ System Flows Icon"
                      className="h-5 w-5"
                    />
                  </div>
                  <div>
                    <p className="font-semibold ">VTJ System Flows</p>
                    <p className="text-sm text-gray-400 flex items-center ">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                      Online agora
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-primary text-white p-3 rounded-lg rounded-bl-none max-w-xs animate-fade-in ">
                    Olá! Como posso ajudar você hoje?
                  </div>
                  <div
                    className="bg-slate-700 text-white p-3 rounded-lg rounded-br-none max-w-xs ml-auto animate-fade-in"
                    style={{ animationDelay: "1s" }}
                  >
                    Gostaria de saber sobre seus produtos
                  </div>
                  <div
                    className="bg-primary text-white p-3 rounded-lg rounded-bl-none max-w-xs animate-fade-in"
                    style={{ animationDelay: "2s" }}
                  >
                    Perfeito! Temos várias opções. Qual categoria te interessa
                    mais?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="container mx-auto px-6 py-20 text-center"
        id="contato"
      >
        <div
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-slate-700 relative overflow-hidden"
          id="contato"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text ">
              Pronto para Revolucionar seu Atendimento?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto ">
              Junte-se a milhares de empresas que já transformaram seu
              atendimento com a VTJ System Flows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white font-bold bg-[#0c9ebe] px-8 py-4 text-lg group hover:bg-[#0c9ebe] hover:cursor-pointer 
             transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border hover:border-primary/50 backdrop-blur-sm rounded-2xl"
                onClick={() => {
                  window.open(
                    "https://wa.me/5571999042609?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais!",
                    "_blank"
                  );
                }}
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionTutorial />

      {/* Footer */}
      <footer className="container mx-auto text-white">
        <div className="border-t border-slate-700 px-6 py-12 flex max-lg:flex-col max-lg:gap-8 justify-between ">
          <div className="max-w-[400px] min-w-[200px]">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={VTJLogo}
                alt="VTJ System Flows Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="">
              Automação inteligente para WhatsApp <br/> 
              que transforma seu atendimento.
            </p>
          </div>
          <div className="max-w-[400px] min-w-[200px]">
            <h3 className="font-semibold mb-4 ">Produto</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault(); // impede o comportamento padrão do link
                    const section = document.getElementById("features");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="cursor-pointer hover:text-[#d400ff] transition-colors duration-300"
                >
                  Recursos
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  onClick={(e) => {
                    e.preventDefault(); // impede o comportamento padrão do link
                    const section = document.getElementById("benefits");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="cursor-pointer hover:text-[#d400ff] transition-colors duration-300"
                >
                  Integrações
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-[400px] min-w-[200px]">
            <h3 className="font-semibold mb-4 ">Suporte</h3>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="#tutorial"
                  onClick={(e) => {
                    e.preventDefault(); // impede o comportamento padrão do link
                    const section = document.getElementById("tutorial");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="cursor-pointer hover:text-[#d400ff] transition-colors duration-300"
                >
                  Tutoriais
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5571999042609?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-[#d400ff] transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-slate-700 mt-12 pt-8 pb-4 text-center">
          <p>&copy; 2025 VTJ System Flows. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
