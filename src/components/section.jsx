import { CheckCircle } from "lucide-react";
import React from "react";

export default function SectionTutorial() {
  return (
    <div className="container mx-auto" id="tutorial">
      <div className="flex gap-16 justify-between max-lg:flex-col">
        {/* VIDEO */}
        <div className="w-1/2 max-lg:w-full px-2">
          <video
            className="w-full min-sm:h-[476px]"
            controls
            autoPlay={false}
            muted={false}
          >
            <source src="/tutorial.mp4" type="video/mp4" />
          </video>
        </div>

        {/* TEXT */}
        <div className="w-1/2 max-lg:w-full max-sm:flex max-sm:flex-col max-sm:items-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text ">
            Funcionalidades
          </h2>
          <div className="space-y-2 px-6">
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Lembretes Automáticos de Agendamentos{" "}
                </h3>
                <p>
                  Envio programado de mensagens de lembrete para garantir que o
                  cliente não perca seu compromisso.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Remarcação Automatizada{" "}
                </h3>
                <p>
                  Capaz de entender solicitações de mudança de data/horário e
                  realizar a remarcação de forma simples e rápida.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Interação com Áudio{" "}
                </h3>
                <p>
                  A IA compreende mensagens de voz enviadas pelo cliente e pode
                  responder com áudios.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Suporte a Múltiplas Unidades{" "}
                </h3>
                <p>
                  A IA pode identificar e direcionar o atendimento conforme a
                  unidade selecionada pelo cliente.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Outras Funcionalidades Personalizáveis
                </h3>
                <p>
                  O sistema pode ser adaptado conforme as necessidades
                  específicas de cada negócio.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 group">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl font-semibold mb-2 ">
                  Atendimento Inteligente 24/7{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
