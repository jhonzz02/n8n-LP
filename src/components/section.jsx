import { CheckCircle } from "lucide-react";
import React from "react";

export default function SectionTutorial() {
  return (
    <div className="container mx-auto px-6" id="tutorial">
      <div className="flex gap-16 justify-between max-lg:flex-col">
        {/* VIDEO */}
        <div className="w-1/2 max-lg:w-full">
          <video
            className="w-full rounded-lg min-sm:h-[476px]"
            controls
            autoPlay
            muted={false}
          >
            <source src="/tutorial.mp4" type="video/mp4" />
          </video>
        </div>

        {/* TEXT */}
        <div className="w-1/2 max-lg:w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text ">
            Funcionalidades
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Lembrete automatico do agendamento com o cliente
                </h3>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Atendimento 24/7
                </h3>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">Envio de audios</h3>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Possibilidade de multiplas unidades
                </h3>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Taxas de clientes, agendamentos e mensagens
                </h3>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Monitoramento ao vivo da qualidade do atendimento
                </h3>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Entre diversas outras funcionalidades
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
