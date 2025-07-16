import React from "react";
import "../App.css";
import VTJLogo from "../assets/vtjsystemflows.jpg";
import { Zap } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Shield } from "lucide-react";
import { Clock } from "lucide-react";
import { Users } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="container mx-auto py-20 text-center" id="contato">
      <div
        className="bg-gradient-to-r from-primary/10 to-accent/10 min-sm:rounded-3xl p-12 border border-slate-700 relative overflow-hidden"
        id="contato"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-pulse"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text ">
            Pronto para Revolucionar seu Atendimento?
          </h2>
          <p className="text-xl text-gray-300 mb-8 mx-auto ">
            Junte-se às empresas que já estão transformando seu atendimento com
            a VTJ System Flows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white font-bold bg-[#0c9ebe] text-lg group hover:bg-[#0c9ebe] hover:cursor-pointer 
             transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border hover:border-primary/50 backdrop-blur-sm rounded-2xl px-8 py-4"
              onClick={() => {
                window.open(
                  "https://wa.me/5511974530928?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais!",
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
  );
}
