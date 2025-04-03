
import React from 'react';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VehicleInfoProps {
  className?: string;
}

const VehicleInfo: React.FC<VehicleInfoProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-rentalGray-50", className)}>
      <h3 className="text-lg font-semibold text-rentalBlue-900">Informações do Veículo</h3>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="bg-white border border-rentalGray-200 rounded-md p-4 h-full">
            <img 
              src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Toyota Camry" 
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <div className="text-center">
              <div className="text-xs text-rentalGray-500 uppercase">Seu veículo (ou similar)</div>
              <div className="text-xl font-bold text-rentalBlue-900">Toyota Camry</div>
              <div className="text-sm text-rentalGray-600">Sedan Médio</div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="bg-white border border-rentalGray-200 rounded-md p-5 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-rentalBlue-600 mr-2" />
                <span className="text-sm">5 Passageiros</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-rentalBlue-600 mr-2" />
                <span className="text-sm">Transmissão Automática</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-rentalBlue-600 mr-2" />
                <span className="text-sm">2 Malas Grandes</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-rentalBlue-600 mr-2" />
                <span className="text-sm">Ar Condicionado</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-rentalBlue-600 mr-2" />
                <span className="text-sm">30 mpg</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-4 h-4 text-rentalBlue-600 mr-2" />
                <span className="text-sm">Bluetooth / USB</span>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t border-rentalGray-200">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-medium">Duração do Aluguel:</div>
                <div className="text-sm">4 Dias</div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-medium">Quilometragem Incluída:</div>
                <div className="text-sm">Ilimitada</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Política de Combustível:</div>
                <div className="text-sm">Tanque Cheio para Tanque Cheio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
