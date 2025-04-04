
import React from 'react';
import { Button } from '@/components/ui/button';
import Voucher from '@/components/Voucher';

const Index = () => {
  return (
    <div className="min-h-screen bg-rentalGray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Sua Confirmação de Aluguel
          </h1>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" className="border-rentalOrange-600 text-rentalOrange-600 hover:bg-rentalOrange-50">
              Salvar como PDF
            </Button>
            <Button className="bg-rentalOrange-600 hover:bg-rentalOrange-700 text-white">
              Imprimir Comprovante
            </Button>
          </div>
        </div>
        
        <p className="text-black mb-8">
          Obrigado por escolher a DriveEase. Abaixo está o comprovante de confirmação do seu aluguel com todos os detalhes da sua reserva.
        </p>
      </div>
      
      <Voucher />

      <div className="max-w-5xl mx-auto mt-8 text-center">
        <p className="text-black text-sm">
          Para quaisquer alterações em sua reserva, entre em contato com nosso atendimento ao cliente pelo menos 24 horas antes do horário de retirada.
        </p>
      </div>
    </div>
  );
};

export default Index;
