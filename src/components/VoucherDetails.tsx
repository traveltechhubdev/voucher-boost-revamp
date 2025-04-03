
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
        <h3 className="text-lg font-semibold text-rentalBlue-900">Booking Details</h3>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-start">
            <CalendarIcon className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Pickup Date</div>
              <div className="font-semibold">Monday, April 5, 2025</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Pickup Time</div>
              <div className="font-semibold">10:30 AM</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Pickup Location</div>
              <div className="font-semibold">Orlando International Airport (MCO)</div>
              <div className="text-sm text-rentalGray-500">Terminal A, Rental Car Center</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-rentalBlue-900">Return Details</h3>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-start">
            <CalendarIcon className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Return Date</div>
              <div className="font-semibold">Friday, April 9, 2025</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Return Time</div>
              <div className="font-semibold">2:00 PM</div>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-2 text-rentalBlue-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-rentalGray-500">Return Location</div>
              <div className="font-semibold">Orlando International Airport (MCO)</div>
              <div className="text-sm text-rentalGray-500">Terminal A, Rental Car Center</div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="col-span-1 md:col-span-2" />
      
      <div className="col-span-1 md:col-span-2">
        <div className="text-sm bg-rentalGray-50 p-4 rounded-md border border-rentalGray-200">
          <p className="font-medium text-rentalGray-700 mb-1">Important Information:</p>
          <p className="text-rentalGray-600">Please arrive 15-30 minutes before your scheduled pickup time. A valid driver's license and credit card in the renter's name are required at time of pickup.</p>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetails;
