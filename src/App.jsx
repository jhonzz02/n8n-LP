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

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#5E65FF,_#4482FF,_#5E65FF,_#D300FF)] text-white overflow-x-hidden">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img
                src={VTJLogo}
                alt="VTJ System Flows Logo"
                className="h-16 w-auto rounded-full object-cover"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="hover:text-[#D300FF] transition-colors duration-300"
            >
              Recursos
            </a>
            <a
              href="#contact"
              className="hover:text-[#D300FF] transition-colors duration-300"
            >
              Contato
            </a>
          </div>
        </nav>
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
            {/* BOTAO TESTE GRATIS */}
            {/*             <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg btn-glow">
              <MessageCircle className="mr-2 h-5 w-5" />
              Teste Grátis por 14 Dias
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white font-bold hover:bg-[#d400ff] px-8 py-4 text-lg group bg-[#0c9ebe] hover:cursor-pointer"
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
                src={"/src/assets/caco.png"}
                alt="VTJ System Flows Logo"
                className="h-24 w-24 rounded-full object-cover"
              />
              <img
                src={"/src/assets/power.jpg"}
                alt="VTJ System Flows Logo"
                className="h-24 w-24 rounded-full object-cover"
              />
              <img
                src={"/src/assets/mayth.png"}
                alt="VTJ System Flows Logo"
                className="h-24 w-24 rounded-full object-cover"
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
        <div className="grid md:grid-cols-3 gap-8 mt-12">
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
      <section className="container mx-auto px-6 py-20">
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
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-slate-700 relative overflow-hidden">
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
                className="border-gray-600 text-white font-bold hover:bg-[#d400ff] px-8 py-4 text-lg group bg-[#0c9ebe] hover:cursor-pointer"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-700 text-white">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={VTJLogo}
                alt="VTJ System Flows Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="">
              Automação inteligente para WhatsApp que transforma seu
              atendimento.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 ">Produto</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrações
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 ">Suporte</h3>
            <ul className="space-y-2 ">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 ">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p>&copy; 2025 VTJ System Flows. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
