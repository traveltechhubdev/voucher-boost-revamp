
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
    <div className="flex flex-col sm:flex-row justify-between p-4 border border-rentalGray-200 rounded-lg hover:border-rentalBlue-300 hover:bg-rentalBlue-50 transition-all">
      <div className="mb-3 sm:mb-0">
        <div className="flex items-center">
          <h4 className="font-medium">{title}</h4>
          {recommended && (
            <Badge className="ml-2 bg-rentalBlue-100 text-rentalBlue-800 hover:bg-rentalBlue-200">
              Recommended
            </Badge>
          )}
        </div>
        <p className="text-sm text-rentalGray-600 mt-1">{description}</p>
      </div>
      <div className="text-right self-end sm:self-center">
        <div className="text-rentalBlue-800 font-bold">{price}</div>
        <button className="mt-1 text-xs px-3 py-1 bg-rentalBlue-600 text-white rounded hover:bg-rentalBlue-700 transition-colors">
          Add
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
        <h3 className="text-lg font-semibold text-rentalBlue-900">Enhance Your Rental</h3>
        <div className="text-sm text-rentalBlue-600">Add extras directly to your booking</div>
      </div>
      
      <div className="space-y-3">
        <AddOn 
          title="Premium Insurance Coverage" 
          description="Full protection with zero deductible for peace of mind" 
          price="$15/day"
          recommended
        />
        
        <AddOn 
          title="GPS Navigation System" 
          description="Never get lost with our premium GPS system" 
          price="$8/day"
        />
        
        <AddOn 
          title="Additional Driver" 
          description="Share the driving with friends or family" 
          price="$10/day"
        />
        
        <AddOn 
          title="Child Seat" 
          description="Safety-certified child seat for children under 4 years" 
          price="$7/day"
        />
        
        <AddOn 
          title="Upgrade to SUV" 
          description="More space with a Toyota RAV4 or similar" 
          price="$25/day"
        />
      </div>
      
      <Separator className="my-6" />
      
      <div className="bg-white p-4 rounded-lg border border-rentalGray-200">
        <h4 className="font-medium text-rentalBlue-900 mb-3">Payment Summary</h4>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-sm">Base Rental (4 days)</span>
            <span className="text-sm font-medium">$240.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Taxes & Fees</span>
            <span className="text-sm font-medium">$36.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Airport Surcharge</span>
            <span className="text-sm font-medium">$12.00</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$288.00</span>
          </div>
        </div>
        
        <div className="text-xs text-rentalGray-500">
          * Additional charges may apply for optional services, late returns, or fuel.
        </div>
      </div>
    </div>
  );
};

export default AddOns;
