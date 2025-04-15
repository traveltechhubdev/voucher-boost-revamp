
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface CancellationReservationInfoProps {
  className?: string;
}

const CancellationReservationInfo: React.FC<CancellationReservationInfoProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-white", className)}>
      <h3 className="text-lg font-semibold text-black mb-4">Informações da Reserva</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div>
            <div className="text-xs text-black font-bold">Carro</div>
            <div className="font-medium text-black">Peugeot 3008 1.6 THP (ou) similar</div>
            <div className="text-xs text-black">Categoria: S7 (FFAR)</div>
            <div className="text-xs text-black">Motor: GASOLINA/FLEX (S4) SIMILAR</div>
            <div className="text-xs text-black">Transmissão: Manual</div>
            <div className="text-xs text-black">Portas: 4</div>
            <div className="text-xs text-black">Ar-Condicionado: Sim</div>
            <div className="text-xs text-black">Direção: Hidráulica</div>
            <div className="text-xs text-black">Passageiros: 5</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="text-xs text-black font-bold">Condutor</div>
            <div className="font-medium text-black">ALEXANDRE CORDEIRO</div>
            <div className="text-xs text-black">Telefone: 11-981102589</div>
          </div>
          <Separator className="my-3" />
          <div>
            <div className="text-xs text-black font-bold">Código Retiro</div>
            <div className="font-medium text-black">MM11002</div>
            <div className="text-xs text-black">21/04/2025 12:00</div>
            <div className="text-xs text-black">Todos os dias das 08:00h às 23:00h</div>
          </div>
          <Separator className="my-3" />
          <div>
            <div className="text-xs text-black font-bold">Código Retorno</div>
            <div className="font-medium text-black">MM11002</div>
            <div className="text-xs text-black">25/04/2025 12:00</div>
            <div className="text-xs text-black">Todos os dias das 08:00h às 23:00h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationReservationInfo;
