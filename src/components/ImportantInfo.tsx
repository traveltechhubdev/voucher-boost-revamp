import React from 'react';
import { cn } from '@/lib/utils';

interface ImportantInfoProps {
  className?: string;
}

const ImportantInfo: React.FC<ImportantInfoProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-white", className)}>
      <h3 className="text-lg font-semibold text-black mb-4">Informações Importantes</h3>
      
      <div className="space-y-4 text-sm text-black">
        <div>
          <p className="font-medium mb-2">Informações obrigatórias:</p>
          <p>É obrigatório apresentar carteira de motorista válida e cartão de crédito em nome do condutor. Fotocópias e licenças digitais não serão aceitas. Para locações no exterior, é obrigatório apresentar carteira de motorista internacional junto com a carteira nacional (a lista de países onde este documento é obrigatório está em nossos Termos e Condições). Cada dia de locação corresponde a 24 horas.</p>
        </div>
        
        <div>
          <p className="font-bold text-red-600">ESTE VOUCHER NÃO É TRANSFERÍVEL!</p>
        </div>
        
        <div>
          <p className="font-medium mb-2">Regra de Cancelamento:</p>
          <p>Importante: A retirada do veículo está sujeita à análise de crédito que será realizada em nossa loja durante a abertura do contrato. O GRUPO XVAR (E) SPIN Adaptada ou similares é exclusivo para PCD.</p>
        </div>
        
        <div>
          <p className="font-medium mb-2">Comentários:</p>
          <p>Para mais informações, visite <a href="https://files.mobility.com.br/Termo/Termos_de_locacao_BR_PP.pdf" className="text-[#F68721] hover:underline">https://files.mobility.com.br/Termo/Termos_de_locacao_BR_PP.pdf</a></p>
        </div>
      </div>
    </div>
  );
};

export default ImportantInfo;