import React from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { Button } from '../Button';

interface FooterNavProps {
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
  totalSteps: number;
}

const FooterNav: React.FC<FooterNavProps> = ({ onNext, onPrev, currentStep }) => {
  //const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div className='flex items-center justify-center pt-6 mt-6'>
      <Button 
				onClick={onPrev} disabled={isFirstStep}
				className='mx-2'
			>
				<HiOutlineArrowLeft className="h-6 w-6" />
			</Button>
      <Button 
			onClick={onNext}
			className='mx-2'
			>
				<HiOutlineArrowRight className="h-6 w-6" />
			</Button>
    </div>
  )
}

export default FooterNav;