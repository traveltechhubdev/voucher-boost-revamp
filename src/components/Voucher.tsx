
import React from 'react';
import VoucherHeader from './VoucherHeader';
import VoucherDetails from './VoucherDetails';
import VehicleInfo from './VehicleInfo';
import CustomerInfo from './CustomerInfo';
import ImportantInfo from './ImportantInfo';
import PaymentSummary from './PaymentSummary';
import VoucherFooter from './VoucherFooter';
import { cn } from '@/lib/utils';

interface VoucherProps {
  className?: string;
}

const Voucher: React.FC<VoucherProps> = ({ className }) => {
  return (
    <div className={cn("max-w-4xl mx-auto shadow-lg border border-rentalGray-200 rounded-lg bg-white", "w-[210mm] min-h-[297mm]", className)}>
      <VoucherHeader />
      <VoucherDetails />
      <VehicleInfo />
      <CustomerInfo />
      <ImportantInfo />
      <PaymentSummary />
      <VoucherFooter />
    </div>
  );
};

export default Voucher;
