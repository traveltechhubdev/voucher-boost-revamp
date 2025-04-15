
import React from 'react';
import CancellationVoucherHeader from './CancellationVoucherHeader';
import CancellationOperatorInfo from './CancellationOperatorInfo';
import CancellationReservationInfo from './CancellationReservationInfo';
import CancellationServices from './CancellationServices';
import CancellationPayment from './CancellationPayment';
import CancellationAdditionalInfo from './CancellationAdditionalInfo';
import { cn } from '@/lib/utils';

interface CancellationVoucherProps {
  className?: string;
}

const CancellationVoucher: React.FC<CancellationVoucherProps> = ({ className }) => {
  return (
    <div className={cn("max-w-5xl mx-auto shadow-lg border border-rentalGray-200 rounded-lg", className)}>
      <CancellationVoucherHeader />
      <CancellationOperatorInfo />
      <CancellationReservationInfo />
      <CancellationServices />
      <CancellationPayment />
      <CancellationAdditionalInfo />
    </div>
  );
};

export default CancellationVoucher;
