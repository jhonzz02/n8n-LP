import React from "react";
import "../App.css";
import VTJLogo from "../assets/vtjsystemflows.jpg";
import { CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section className="container mx-auto px-6 py-20" id="benefits">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text ">
            Por que escolher a VTJ System Flows?
          </h2>
          <div className="space-y-2">
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
                  Atendimento 24/7 com Inteligência Artificial{" "}
                </h3>
                <p className="text-gray-300 ">
                  Ofereça suporte imediato aos seus clientes, a qualquer hora do
                  dia — com uma IA treinada para responder de forma precisa e
                  humanizada.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Suporte Multimídia Inteligente{" "}
                </h3>
                <p className="text-gray-300 ">
                  Seja por texto ou áudio, nossa IA está preparada para
                  entender e interagir de forma eficiente em diferentes
                  formatos.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Escalabilidade para Múltiplas Unidades{" "}
                </h3>
                <p className="text-gray-300 ">
                  Gerencie atendimentos em diferentes locais com facilidade.
                  Nossa solução se adapta ao crescimento do seu negócio. segura.
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
  );
}
