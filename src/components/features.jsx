import React from "react";
import "../App.css";
import VTJLogo from "../assets/vtjsystemflows.jpg";
import { Zap } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Shield } from "lucide-react";
import { Clock } from "lucide-react";
import { Users } from "lucide-react";

export default function Features() {
  return (
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
  );
}