
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomerInfoProps {
  className?: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-white", className)}>
      <h3 className="text-lg font-semibold text-black mb-4">Informações do Cliente</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div>
            <div className="text-xs text-black">Nome</div>
            <div className="font-medium text-black">John Doe</div>
          </div>
          
          <div>
            <div className="text-xs text-black">Email</div>
            <div className="font-medium text-black">johndoe@example.com</div>
          </div>
          
          <div>
            <div className="text-xs text-black">Telefone</div>
            <div className="font-medium text-black">+1 (555) 123-4567</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="text-xs text-black">Carteira de Motorista</div>
            <div className="font-medium text-black">FL 12345678</div>
          </div>
          
          <div>
            <div className="text-xs text-black">Método de Pagamento</div>
            <div className="font-medium text-black">Visa •••• 4321</div>
          </div>
          
          <div>
            <div className="text-xs text-black">Programa de Fidelidade</div>
            <div className="font-medium text-black">Membro Ouro #87654321</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
