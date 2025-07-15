import React from "react";
import "../App.css";
import VTJLogo from "../assets/vtjsystemflows.jpg";
import { CheckCircle } from "lucide-react";

export default function Header() {
  return (
      <header className="container mx-auto px-6 py-8 relative z-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img
                src={VTJLogo}
                alt="VTJ System Flows Logo"
                className="h-24 w-auto rounded-full object-cover hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
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

      </header>
  );
}