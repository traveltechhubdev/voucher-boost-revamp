
import React from 'react';
import { Button } from '@/components/ui/button';
import Voucher from '@/components/Voucher';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-rentalGray-100 py-5 px-4 print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Sua Reserva de Carro
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
        
        <p className="text-black mb-4">
          Obrigado por escolher a Mobility. Abaixo está o comprovante de confirmação do seu aluguel com todos os detalhes da sua reserva.
        </p>
      </div>
      
      <Voucher />

      <div className="max-w-4xl mx-auto mt-6 text-center print:hidden">
        <p className="text-black text-sm">
          Para quaisquer alterações em sua reserva, entre em contato com nosso atendimento ao cliente pelo menos 24 horas antes do horário de retirada.
        </p>
      </div>
    </div>
  );
};

export default Index;
