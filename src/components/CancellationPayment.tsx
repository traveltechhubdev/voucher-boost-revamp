
import React from 'react';
import { cn } from '@/lib/utils';

interface CancellationPaymentProps {
  className?: string;
}

const CancellationPayment: React.FC<CancellationPaymentProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-white", className)}>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        <div className="col-span-1">
          <h3 className="text-md font-semibold text-black mb-3">Pagamento Pre-Pago</h3>
          <div className="space-y-2">
            <div>
              <div className="text-xs text-black">Tarifa</div>
              <div className="font-medium text-black">R$ 375,00</div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="text-md font-semibold text-black mb-3">Taxas</h3>
          <div className="space-y-2">
            <div>
              <div className="text-xs text-black">R$ 26,25</div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="text-md font-semibold text-black mb-3">Desconto</h3>
          <div className="space-y-2">
            <div>
              <div className="text-xs text-black">R$ 0,00</div>
            </div>
          </div>
        </div>
        
        <div className="col-span-2 md:col-span-2">
          <h3 className="text-md font-semibold text-black mb-3">Total</h3>
          <div className="space-y-2">
            <div>
              <div className="font-medium text-2xl text-[#F68721]">R$ 401,25</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-md font-semibold text-black mb-3">Extras</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-black">GPS: 24,00</div>
            <div className="text-xs text-black">BRL 24,00</div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-md font-semibold text-black mb-3">Formas de Pagamento</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-xs text-black font-bold">Forma</div>
            <div className="text-sm">Pix</div>
          </div>
          
          <div>
            <div className="text-xs text-black font-bold">Valor</div>
            <div className="text-sm text-red-500">R$ 401,25</div>
          </div>
          
          <div>
            <div className="text-xs text-black font-bold">Pago</div>
            <div className="text-sm">Sim</div>
          </div>
          
          <div>
            <div className="text-xs text-black font-bold">Reembolso</div>
            <div className="text-sm">R$ 401,25</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPayment;
