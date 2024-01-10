import React from 'react';
import { Button } from '../Button';

interface FooterButtonProps {
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
  totalSteps: number;
}

const FooterButton: React.FC<FooterButtonProps> = ({ onNext, onPrev, currentStep, totalSteps }) => {
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div className='flex items-center justify-between border-t border-slate-700 pt-6 mt-6'>
      <Button outline onClick={onPrev} disabled={isFirstStep} >Previous </Button>
      <Button onClick={onNext} >{isLastStep ? 'Finish' : 'Next'}</Button>
    </div>
  )
}

export default FooterButton;