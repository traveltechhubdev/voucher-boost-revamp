
import React from 'react';
import { cn } from '@/lib/utils';
import mobilityLogo from '@/assets/mobility-logo.png';

interface VoucherHeaderProps {
  className?: string;
}

const VoucherHeader: React.FC<VoucherHeaderProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col md:flex-row justify-between items-center bg-white border-b border-rentalGray-200 p-4 rounded-t-lg", className)}>
      <div className="flex items-center mb-2 md:mb-0">
        <img src={mobilityLogo} alt="Mobility" className="h-8" />
      </div>
      <div className="text-right">
        <h2 className="text-sm font-medium text-black">COMPROVANTE DE RESERVA</h2>
        <div className="text-lg font-bold text-black">#VCH-1283490</div>
      </div>
    </div>
  );
};

export default VoucherHeader;
