import React from "react";
import "../App.css";
import CacoImg from "../assets/caco.png";
import MaythImg from "../assets/mayth.png";
import PowerImg from "../assets/power.jpg";
import OLK from "../assets/olk.jpg";
import Propelloo from "../assets/propelloo.jpg";
import R4S from "../assets/r4s.jpg";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function SubHeader() {
  return (
    <section className="container mx-auto px-6 py-20 text-center relative">
      <div className="absolute z-0 inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
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
          Transforme seu atendimento com nossa plataforma de automação avançada.
          Respostas instantâneas, fluxos personalizados e integração completa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-white font-bold bg-[#0c9ebe] px-8 py-4 text-lg group hover:bg-[#0c9ebe] hover:cursor-pointer 
             transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border hover:border-primary/50 backdrop-blur-sm rounded-2xl"
            onClick={() => {
              const section = document.getElementById("tutorial");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Ver Demonstração
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="flex flex-col gap-8 mt-16 max-w-3xl mx-auto">
          <h1 className=" text-white font-bold text-4xl">Empresas parceiras</h1>
          {/* empresas */}
          <div className="relative w-full overflow-hidden px-4 py-6 mask-fade">
            <div className="pointer-events-none absolute top-0 left-0 w-12 h-full backdrop-blur-sm z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 w-12 h-full backdrop-blur-sm z-10"></div>
            {/* logos */}
            <div className="flex gap-12 items-center min-w-max animate-scroll overflow-visible">
              {[
                CacoImg,
                PowerImg,
                MaythImg,
                OLK,
                R4S,
                Propelloo,
                CacoImg,
                PowerImg,
                MaythImg,
                OLK,
                R4S,
                Propelloo,
              ].map((logo, i) => (
                <div key={i} className="flex-shrink-0">
                  <img
                    src={logo}
                    alt="Logo Empresa"
                    className="h-24 w-24 rounded-full object-cover transition-all duration-300 transform min-sm:hover:-translate-y-1 min-sm:hover:scale-105 hover:cursor-pointer backdrop-blur-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
