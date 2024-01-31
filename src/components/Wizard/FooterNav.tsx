import React from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { Button } from '../Button';

export interface FooterNavProps {
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
  totalSteps: number;
  disabled:boolean;
  nextDisable:boolean;
  
}

export const FooterNav: React.FC<FooterNavProps> = ({ onNext, onPrev, currentStep, nextDisable }) => {
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
      disabled={nextDisable} 
      style={nextDisable ? { opacity: 0.5 } : {}}
			>
				<HiOutlineArrowRight className="h-6 w-6" />
			</Button>
    </div>
  )
}
//onPrev

export const FooterButton: React.FC<FooterNavProps> = ({ onNext, currentStep, totalSteps, nextDisable }) => {
  const isLastStep = currentStep === totalSteps - 1;
  // const isFirstStep = currentStep === 0;
  

  return (
    <div className=' flex  float-right items-center    pt-6 mt-6 '>
      <Button
  onClick={onNext}
  className='mx-2'
  disabled={nextDisable} 
  style={nextDisable ? { opacity: 0.5 } : {}}
>
  <HiOutlineArrowRight className="h-6 w-6" />
</Button>

 {/* FooterButton.tsx */}
<Button className='m-1 order-last'  onClick={onNext}
        disabled={isLastStep || nextDisable}   >{isLastStep ? 'Finish' : 'Next'}</Button>
    </div>
  )
}