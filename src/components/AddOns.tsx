
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface AddOnProps {
  title: string;
  description: string;
  price: string;
  recommended?: boolean;
}

const AddOn: React.FC<AddOnProps> = ({ title, description, price, recommended }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-4 border border-rentalGray-200 rounded-lg hover:border-rentalOrange-300 hover:bg-rentalOrange-50 transition-all">
      <div className="mb-3 sm:mb-0">
        <div className="flex items-center">
          <h4 className="font-medium text-black">{title}</h4>
          {recommended && (
            <Badge className="ml-2 bg-rentalOrange-100 text-rentalOrange-800 hover:bg-rentalOrange-200">
              Recomendado
            </Badge>
          )}
        </div>
        <p className="text-sm text-black mt-1">{description}</p>
      </div>
      <div className="text-right self-end sm:self-center">
        <div className="text-rentalOrange-800 font-bold">{price}</div>
        <button className="mt-1 text-xs px-3 py-1 bg-rentalOrange-600 text-white rounded hover:bg-rentalOrange-700 transition-colors">
          Adicionar
        </button>
      </div>
    </div>
  );
};

interface AddOnsProps {
  className?: string;
}

const AddOns: React.FC<AddOnsProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-rentalGray-50", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-black">Melhore seu Aluguel</h3>
        <div className="text-sm text-rentalOrange-600">Adicione extras diretamente à sua reserva</div>
      </div>
      
      <div className="space-y-3">
        <AddOn 
          title="Cobertura de Seguro Premium" 
          description="Proteção completa com franquia zero para sua tranquilidade" 
          price="R$15/dia"
          recommended
        />
        
        <AddOn 
          title="Sistema de Navegação GPS" 
          description="Nunca se perca com nosso sistema GPS premium" 
          price="R$8/dia"
        />
        
        <AddOn 
          title="Motorista Adicional" 
          description="Compartilhe a direção com amigos ou família" 
          price="R$10/dia"
        />
        
        <AddOn 
          title="Cadeira Infantil" 
          description="Cadeira infantil certificada para crianças menores de 4 anos" 
          price="R$7/dia"
        />
        
        <AddOn 
          title="Upgrade para SUV" 
          description="Mais espaço com um Toyota RAV4 ou similar" 
          price="R$25/dia"
        />
      </div>
      
      <Separator className="my-6" />
      
      <div className="bg-white p-4 rounded-lg border border-rentalGray-200">
        <h4 className="font-medium text-black mb-3">Resumo de Pagamento</h4>
        
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

export default AddOns;
