
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomerInfoProps {
  className?: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-white", className)}>
      <h3 className="text-lg font-semibold text-rentalBlue-900 mb-4">Informações do Cliente</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div>
            <div className="text-xs text-rentalGray-500">Nome</div>
            <div className="font-medium">John Doe</div>
          </div>
          
          <div>
            <div className="text-xs text-rentalGray-500">Email</div>
            <div className="font-medium">johndoe@example.com</div>
          </div>
          
          <div>
            <div className="text-xs text-rentalGray-500">Telefone</div>
            <div className="font-medium">+1 (555) 123-4567</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="text-xs text-rentalGray-500">Carteira de Motorista</div>
            <div className="font-medium">FL 12345678</div>
          </div>
          
          <div>
            <div className="text-xs text-rentalGray-500">Método de Pagamento</div>
            <div className="font-medium">Visa •••• 4321</div>
          </div>
          
          <div>
            <div className="text-xs text-rentalGray-500">Programa de Fidelidade</div>
            <div className="font-medium">Membro Ouro #87654321</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
