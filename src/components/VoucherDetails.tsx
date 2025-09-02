import React from 'react';
import { CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface VoucherDetailsProps {
  className?: string;
}

const VoucherDetails: React.FC<VoucherDetailsProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-white", className)}>
      <h3 className="text-lg font-semibold text-black mb-4">Detalhes da Reserva</h3>
      
      {/* Informações da Reserva */}
      <div className="bg-rentalGray-50 p-4 rounded-lg border border-rentalGray-200 mb-6">
        <h4 className="font-medium text-black mb-3">Informações da Reserva</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="font-bold text-black">Rental Company:</span>
            <span className="ml-2 text-black">Movida</span>
          </div>
          <div>
            <span className="font-bold text-black">Rate Code:</span>
            <span className="ml-2 text-black">HNOE01</span>
          </div>
          <div>
            <span className="font-bold text-black">Mobility File Nr:</span>
            <span className="ml-2 text-black">00354916</span>
          </div>
          <div>
            <span className="font-bold text-black">Confirmation Nr:</span>
            <span className="ml-2 text-black">MV1JNW2EX4BR (MO24683)</span>
          </div>
          <div>
            <span className="font-bold text-black">Voucher Nr:</span>
            <span className="ml-2 text-black">W361368</span>
          </div>
          <div>
            <span className="font-bold text-black">Country:</span>
            <span className="ml-2 text-black">Brasil</span>
          </div>
          <div>
            <span className="font-bold text-black">Date of issue:</span>
            <span className="ml-2 text-black">16/01/2024 13:14:45</span>
          </div>
          <div>
            <span className="font-bold text-black">Reservation ID Nr:</span>
            <span className="ml-2 text-black">MV1JNW2EX4BR</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="text-md font-medium text-black">Retirada</h4>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start">
              <CalendarIcon className="w-5 h-5 mr-2 text-[#F68721] mt-0.5" />
              <div>
                <div className="text-sm font-medium text-black">Data de Retirada</div>
                <div className="font-semibold text-black">Segunda-feira, 5 de Abril de 2025</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-5 h-5 mr-2 text-[#F68721] mt-0.5" />
              <div>
                <div className="text-sm font-medium text-black">Horário de Retirada</div>
                <div className="font-semibold text-black">10:30</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 text-[#F68721] mt-0.5" />
              <div>
                <div className="text-sm font-medium text-black">Local de Retirada</div>
                <div className="font-semibold text-black">Aeroporto Internacional de Orlando (MCO)</div>
                <div className="text-sm text-black">Terminal A, Centro de Aluguel</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-md font-medium text-black">Devolução</h4>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start">
              <CalendarIcon className="w-5 h-5 mr-2 text-[#F68721] mt-0.5" />
              <div>
                <div className="text-sm font-medium text-black">Data de Devolução</div>
                <div className="font-semibold text-black">Sexta-feira, 9 de Abril de 2025</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-5 h-5 mr-2 text-[#F68721] mt-0.5" />
              <div>
                <div className="text-sm font-medium text-black">Horário de Devolução</div>
                <div className="font-semibold text-black">14:00</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 text-[#F68721] mt-0.5" />
              <div>
                <div className="text-sm font-medium text-black">Local de Devolução</div>
                <div className="font-semibold text-black">Aeroporto Internacional de Orlando (MCO)</div>
                <div className="text-sm text-black">Terminal A, Centro de Aluguel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="text-sm bg-rentalGray-50 p-4 rounded-md border border-rentalGray-200">
        <p className="font-medium text-black mb-1">Informações Importantes:</p>
        <p className="text-black">Chegue 15-30 minutos antes do horário de retirada agendado. Uma carteira de motorista válida e um cartão de crédito em nome do locatário são necessários no momento da retirada.</p>
      </div>
    </div>
  );
};

export default VoucherDetails;