import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface PaymentSummaryProps {
  className?: string;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-white", className)}>
      <h3 className="text-lg font-semibold text-black mb-4">Resumo de Pagamento</h3>
      
      <div className="bg-rentalGray-50 p-4 rounded-lg border border-rentalGray-200">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-sm text-black">Aluguel Base (4 dias)</span>
            <span className="text-sm font-medium text-black">R$240,00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-black">Impostos e Taxas</span>
            <span className="text-sm font-medium text-black">R$36,00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-black">Taxa de Aeroporto</span>
            <span className="text-sm font-medium text-black">R$12,00</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold text-black">
            <span>Total</span>
            <span>R$288,00</span>
          </div>
        </div>
        
        <div className="text-xs text-black">
          * Taxas adicionais podem ser aplicadas para serviços opcionais, devoluções tardias ou combustível.
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;