
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface VoucherFooterProps {
  className?: string;
}

const VoucherFooter: React.FC<VoucherFooterProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-black text-white rounded-b-lg", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#F68721]">Precisa de Ajuda?</h4>
          <div className="text-sm space-y-1">
            <div>Atendimento ao Cliente: +1 (800) 555-1234</div>
            <div>Suporte de Emergência: +1 (800) 555-5678</div>
            <div>Email: suporte@mobility.com.br</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#F68721]">Políticas de Aluguel</h4>
          <div className="text-sm space-y-1">
            <div>• Carteira de motorista válida obrigatória</div>
            <div>• Idade mínima: 25 anos</div>
            <div>• Cartão de crédito necessário na retirada</div>
            <div>• Veja os termos completos em nosso site</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-white">
            <div>Site: mobility.com.br</div>
            <div>Atendimento Online 24h</div>
          </div>
        </div>
      </div>
      
      <Separator className="my-4 bg-[#F68721]/50" />
      
      <div className="text-xs text-white flex flex-col md:flex-row justify-between">
        <div>
          Termos e Condições se aplicam. Por favor, leia nosso contrato de aluguel completo em mobility.com.br/termos
        </div>
        <div className="mt-2 md:mt-0">
          ID de Confirmação: VCH-1283490 • Gerado em: 3 de Abril de 2025
        </div>
      </div>
    </div>
  );
};

export default VoucherFooter;
