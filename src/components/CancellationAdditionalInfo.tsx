
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle } from 'lucide-react';

interface CancellationAdditionalInfoProps {
  className?: string;
}

const CancellationAdditionalInfo: React.FC<CancellationAdditionalInfoProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-black text-white rounded-b-lg", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#F68721]">Outras Informações</h4>
          <div className="text-sm space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="text-[#F68721] text-xs mb-1">Informações</h5>
              <p className="text-xs">
                Caso precise de alguma ajuda? Entre em contato conosco: Central de Atendimento 24h: 
                0800 123 4567. Para cancelamentos ou alterações, informe seu número de reserva quando 
                entrar em contato. Lembre que retiradas não efetuadas implicam no pagamento do valor 
                total do aluguel. Recomendamos também a apresentação de carteira internacional.
                Consulte a locadora para mais detalhes. Cada diária corresponde a 24 horas de locação.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="text-[#F68721] text-xs mb-1">Comentário</h5>
              <p className="text-xs">
                Cancelamento realizado a pedido do cliente.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-gray-800 p-4 rounded-lg h-full">
            <h5 className="text-[#F68721] text-xs mb-1">Detalhes do Cancelamento</h5>
            <div className="text-sm space-y-2">
              <div className="flex items-start">
                <AlertTriangle className="w-4 h-4 text-[#F68721] mr-2 mt-0.5" />
                <div>
                  <p className="text-xs font-medium">Data de Cancelamento</p>
                  <p className="text-xs">15/04/2025 14:30</p>
                </div>
              </div>
              
              <div className="mt-3">
                <p className="text-xs font-medium mb-1">Solicitante</p>
                <p className="text-xs">alexandre@mobility.com.br / Alexandre Cordeiro</p>
              </div>
              
              <div className="mt-3">
                <p className="text-xs font-medium mb-1">Emissor</p>
                <p className="text-xs">alexandre@mobility.com.br / Geraldino</p>
              </div>

              <div className="mt-5 p-3 bg-gray-700 rounded border-l-4 border-[#F68721]">
                <p className="text-xs font-bold mb-1">Informações Importantes</p>
                <p className="text-xs">
                  Importante: A retirada do veículo está sujeita a análise de crédito que será realizada
                  apenas no dia da retirada durante a abertura do contrato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-4 bg-[#F68721]/50" />
      
      <div className="text-xs text-white flex flex-col md:flex-row justify-between">
        <div>
          Termos e Condições se aplicam. Por favor, leia nosso contrato de aluguel completo em mobility.com.br/termos
        </div>
        <div className="mt-2 md:mt-0">
          ID de Cancelamento: 2566600833 • Gerado em: 15 de Abril de 2025
        </div>
      </div>
    </div>
  );
};

export default CancellationAdditionalInfo;
