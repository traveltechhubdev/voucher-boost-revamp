
import React from 'react';
import { cn } from '@/lib/utils';

interface VoucherHeaderProps {
  className?: string;
}

const VoucherHeader: React.FC<VoucherHeaderProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col md:flex-row justify-between items-center bg-white border-b border-rentalGray-200 p-3 rounded-t-lg", className)}>
      <div className="flex items-center mb-2 md:mb-0">
        <img src="/lovable-uploads/306906be-8e14-49df-9ecd-7591c1b891e1.png" alt="Mobility" className="h-6" />
      </div>
      <div className="text-right">
        <h2 className="text-xs font-medium text-black">COMPROVANTE DE RESERVA</h2>
        <div className="text-sm font-bold text-black">#VCH-1283490</div>
      </div>
    </div>
  );
};

export default VoucherHeader;
