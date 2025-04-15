
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface CancellationServicesProps {
  className?: string;
}

const CancellationServices: React.FC<CancellationServicesProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-gray-100", className)}>
      <h3 className="text-lg font-semibold text-black mb-4">Detalhes dos Serviços</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div>
            <div className="text-xs text-black font-bold">Retirada</div>
            <div className="font-medium text-black">Cidade: SÃO PAULO</div>
            <div className="text-xs text-black">Estação: SAO PAULO (APO)</div>
            <div className="text-xs text-black">Endereço: ROD RAPOSO TAVARES DE BELA VISTA, BR5 - VILA PIRAJUSSARA - SAO PAULO (SPO)</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="text-xs text-black font-bold">Devolução</div>
            <div className="font-medium text-black">Cidade: SÃO PAULO</div>
            <div className="text-xs text-black">Estação: SAO PAULO (APO)</div>
            <div className="text-xs text-black">Endereço: ROD RAPOSO TAVARES DE BELA VISTA, BR5 - VILA PIRAJUSSARA - SAO PAULO (SPO)</div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <h3 className="text-md font-semibold text-black mb-4">Informações sobre a tarifa (Tarifa Básica com Franquia - CDW + TP + prot. de terceiros)</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="text-xs font-bold text-black">Descrição</div>
        <div className="text-xs font-bold text-black">Detalhes</div>
        <div className="text-xs font-bold text-black text-right">Franquia</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 border-b border-gray-200 pb-2">
        <div>
          <div className="text-sm text-black">CAMINHO DE BASE - Por Dia (CAR)</div>
          <div className="text-xs text-black">Quantidade: 1</div>
        </div>
        <div>
          <div className="text-xs text-black">Pagamento no Destino</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-black">Incluso</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 border-b border-gray-200 pb-2">
        <div>
          <div className="text-sm text-black">Proteção Colisão e Danos (CDW)</div>
        </div>
        <div>
          <div className="text-xs text-black">Incluído</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-black">Incluso</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2 border-b border-gray-200 pb-2">
        <div>
          <div className="text-sm text-black">Proteção Roubo (TP)</div>
        </div>
        <div>
          <div className="text-xs text-black">Incluído</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-black">Incluso</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="text-sm text-black">Taxas Locais (TAXAS LOCAIS)</div>
        </div>
        <div>
          <div className="text-xs text-black">Incluído</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-black">Incluso</div>
        </div>
      </div>
    </div>
  );
};

export default CancellationServices;
