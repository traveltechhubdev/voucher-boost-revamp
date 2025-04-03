
import React from 'react';
import { CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface VoucherDetailsProps {
  className?: string;
}

const VoucherDetails: React.FC<VoucherDetailsProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white", className)}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-rentalBlue-900">Detalhes da Reserva</h3>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-start">
            <CalendarIcon className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Data de Retirada</div>
              <div className="font-semibold">Segunda-feira, 5 de Abril de 2025</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Horário de Retirada</div>
              <div className="font-semibold">10:30</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Local de Retirada</div>
              <div className="font-semibold">Aeroporto Internacional de Orlando (MCO)</div>
              <div className="text-sm text-rentalGray-500">Terminal A, Centro de Aluguel</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-rentalBlue-900">Detalhes da Devolução</h3>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-start">
            <CalendarIcon className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Data de Devolução</div>
              <div className="font-semibold">Sexta-feira, 9 de Abril de 2025</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Horário de Devolução</div>
              <div className="font-semibold">14:00</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Local de Devolução</div>
              <div className="font-semibold">Aeroporto Internacional de Orlando (MCO)</div>
              <div className="text-sm text-rentalGray-500">Terminal A, Centro de Aluguel</div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="col-span-1 md:col-span-2" />
      
      <div className="col-span-1 md:col-span-2">
        <div className="text-sm bg-rentalGray-50 p-4 rounded-md border border-rentalGray-200">
          <p className="font-medium text-rentalGray-700 mb-1">Informações Importantes:</p>
          <p className="text-rentalGray-600">Chegue 15-30 minutos antes do horário de retirada agendado. Uma carteira de motorista válida e um cartão de crédito em nome do locatário são necessários no momento da retirada.</p>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetails;
