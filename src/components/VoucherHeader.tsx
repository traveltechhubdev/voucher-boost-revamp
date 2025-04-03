
import React from 'react';
import { cn } from '@/lib/utils';

interface VoucherHeaderProps {
  className?: string;
}

const VoucherHeader: React.FC<VoucherHeaderProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-rentalBlue-700 to-rentalBlue-900 text-white p-6 rounded-t-lg", className)}>
      <div className="flex items-center mb-4 md:mb-0">
        <div className="mr-3 text-3xl font-bold">DriveEase</div>
        <div className="bg-white text-rentalBlue-700 text-xs px-2 py-1 rounded font-bold">PREMIUM</div>
      </div>
      <div className="text-right">
        <h2 className="text-sm font-medium opacity-80">CONFIRMATION VOUCHER</h2>
        <div className="text-xl font-bold">#VCH-1283490</div>
      </div>
    </div>
  );
};

export default VoucherHeader;
