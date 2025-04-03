
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface VoucherFooterProps {
  className?: string;
}

const VoucherFooter: React.FC<VoucherFooterProps> = ({ className }) => {
  return (
    <div className={cn("p-6 bg-rentalBlue-900 text-white rounded-b-lg", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-rentalBlue-100">Need Assistance?</h4>
          <div className="text-sm space-y-1">
            <div>Customer Service: +1 (800) 555-1234</div>
            <div>Emergency Support: +1 (800) 555-5678</div>
            <div>Email: support@driveease.com</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-2 text-rentalBlue-100">Rental Policies</h4>
          <div className="text-sm space-y-1">
            <div>• Valid driver's license required</div>
            <div>• Minimum age: 25 years</div>
            <div>• Credit card required at pickup</div>
            <div>• See full terms on our website</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="bg-white p-4 inline-block rounded-md">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=VCH-1283490" 
              alt="QR Code" 
              className="w-24 h-24"
            />
            <div className="text-rentalBlue-900 text-xs mt-2 font-medium text-center">Scan for Check-in</div>
          </div>
        </div>
      </div>
      
      <Separator className="my-4 bg-rentalBlue-800" />
      
      <div className="text-xs text-rentalBlue-200 flex flex-col md:flex-row justify-between">
        <div>
          Terms & Conditions apply. Please review our full rental agreement at www.driveease.com/terms
        </div>
        <div className="mt-2 md:mt-0">
          Confirmation ID: VCH-1283490 • Generated on: April 3, 2025
        </div>
      </div>
    </div>
  );
};

export default VoucherFooter;
