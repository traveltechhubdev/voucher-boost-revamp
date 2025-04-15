
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CancellationOperatorInfoProps {
  className?: string;
}

const CancellationOperatorInfo: React.FC<CancellationOperatorInfoProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-100 border-b border-gray-200", className)}>
      <div className="col-span-1">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Tour Operator</h3>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white mr-2">M</div>
          <div>
            <div className="font-medium">Mobility</div>
            <div className="text-xs">+55 01 45350420</div>
            <div className="text-xs">renato.palmira@mobility.com.br</div>
          </div>
        </div>
      </div>
      
      <div className="col-span-1">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Localizador</h3>
        <div className="font-medium">B01T97F7-25</div>
        <div className="text-sm mt-1">08433348</div>
      </div>
      
      <div className="col-span-1 text-right">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
        <Badge className="bg-red-500 hover:bg-red-600">Cancelada</Badge>
      </div>
    </div>
  );
};

export default CancellationOperatorInfo;
