
import React from 'react';
import VoucherHeader from './VoucherHeader';
import VoucherDetails from './VoucherDetails';
import VehicleInfo from './VehicleInfo';
import CustomerInfo from './CustomerInfo';
import AddOns from './AddOns';
import VoucherFooter from './VoucherFooter';
import { cn } from '@/lib/utils';

interface VoucherProps {
  className?: string;
}

const Voucher: React.FC<VoucherProps> = ({ className }) => {
  return (
    <div className={cn("max-w-5xl mx-auto shadow-lg border border-rentalGray-200 rounded-lg", className)}>
      <VoucherHeader />
      <VoucherDetails />
      <VehicleInfo />
      <CustomerInfo />
      <AddOns />
      <VoucherFooter />
    </div>
  );
};

export default Voucher;
