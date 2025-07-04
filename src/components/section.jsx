import { CheckCircle } from "lucide-react";
import React from "react";

export default function SectionTutorial() {
  return (
    <div className="container mx-auto px-6 py-20" id="tutorial">
      <div className="flex gap-6 justify-between">
        {/* VIDEO */}
        <div className="w-1/2">
          <img
            src={""}
            alt=""
            className="bg-white"
          />
        </div>
        {/* TEXT */}
        <div className="w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text ">
            SESSAO TUTORIAL
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
          </div>
        </div>
      </div>
    </div>
  );
}
