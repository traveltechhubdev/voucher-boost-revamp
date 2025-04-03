
import React from 'react';
import { Button } from '@/components/ui/button';
import Voucher from '@/components/Voucher';

const Index = () => {
  return (
    <div className="min-h-screen bg-rentalGray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-rentalBlue-900">
            Your Rental Confirmation
          </h1>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" className="border-rentalBlue-600 text-rentalBlue-600 hover:bg-rentalBlue-50">
              Save as PDF
            </Button>
            <Button className="bg-rentalBlue-600 hover:bg-rentalBlue-700">
              Print Voucher
            </Button>
          </div>
        </div>
        
        <p className="text-rentalGray-600 mb-8">
          Thank you for choosing DriveEase. Below is your rental confirmation voucher with all the details of your booking.
        </p>
      </div>
      
      <Voucher />

      <div className="max-w-5xl mx-auto mt-8 text-center">
        <p className="text-rentalGray-500 text-sm">
          For any changes to your reservation, please contact our customer service at least 24 hours prior to your pickup time.
        </p>
      </div>
    </div>
  );
};

export default Index;
