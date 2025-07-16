import React from "react";
import "../App.css";
import VTJLogo from "../assets/vtjsystemflows.jpg";

export default function Footer() {
  return (
    <div className="container mx-auto text-white">
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
            Automação inteligente para WhatsApp <br />
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
          </ul>
        </div>
        <div className="max-w-[400px] min-w-[200px]">
          <h3 className="font-semibold mb-4 ">Suporte</h3>
          <ul className="space-y-2 ">
            <li>
              <a
                href="https://wa.me/5511974530928?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais!"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#d400ff] transition-colors duration-300"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511974530928?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais!"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#d400ff] transition-colors duration-300"
              >
                Ajuda
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* copyright */}
      <div className="border-t border-slate-700 mt-12 pt-8 pb-4 text-center">
        <p>&copy; 2025 VTJ System Flows. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
