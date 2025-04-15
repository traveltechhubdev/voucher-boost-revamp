
import React from 'react';
import { Button } from '@/components/ui/button';
import CancellationVoucher from '@/components/CancellationVoucher';

const Cancellation = () => {
  return (
    <div className="min-h-screen bg-rentalGray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Comprovante de Cancelamento
          </h1>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" className="border-[#F68721] text-[#F68721] hover:bg-[#F6872126]">
              Salvar como PDF
            </Button>
            <Button className="bg-[#F68721] hover:bg-[#e07617] text-white">
              Imprimir Comprovante
            </Button>
          </div>
        </div>
        
        <p className="text-black mb-8">
          Este é o seu comprovante de cancelamento. Caso precise de alguma assistência adicional, entre em contato com nosso atendimento ao cliente.
        </p>
      </div>
      
      <CancellationVoucher />

      <div className="max-w-5xl mx-auto mt-8 text-center">
        <p className="text-black text-sm">
          Para mais informações sobre reembolsos ou políticas de cancelamento, entre em contato com nosso atendimento ao cliente.
        </p>
      </div>
    </div>
  );
};

export default Cancellation;
