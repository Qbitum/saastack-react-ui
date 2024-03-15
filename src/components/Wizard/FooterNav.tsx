import React from 'react';
import { Button } from '../Button';
import { FaArrowLeft, FaArrowRight, FaCircleInfo } from 'react-icons/fa6';

export interface FooterNavProps {
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
  totalSteps: number;
  nextDisable: boolean;
  saveExitDisable: boolean;
  saveExit?: () => void;
  hidden: boolean;
  info?: string;

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
        <FaArrowLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={onNext}
        className='mx-2'
        disabled={nextDisable}
        style={nextDisable ? { opacity: 0.5 } : {}}
      >
        <FaArrowRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

export const FooterButton: React.FC<FooterNavProps> = ({ onNext, onPrev, currentStep, totalSteps, nextDisable }) => {
  const isLastStep = currentStep === totalSteps - 1;
  const isFirstStep = currentStep === 0;


  return (
    <div className=' flex  float-right items-center    pt-6 mt-6 '>
      <Button outline onClick={onPrev} disabled={isFirstStep} >Previous </Button>
      <Button className='m-1 order-last' onClick={onNext}
        disabled={nextDisable}
        style={nextDisable ? { opacity: 0.5 } : {}}

      >{isLastStep ? 'Finish' : 'Next'}</Button>
    </div>
  )
}


export const LMFooterButton: React.FC<FooterNavProps> = ({ onNext, onPrev, currentStep, totalSteps, nextDisable,saveExitDisable,  saveExit, info }) => {
  const isLastStep = currentStep === totalSteps - 1;
  return (
    <div className='flex items-center p-2'>

      <Button className={currentStep == 0 ? 'hidden' : 'm-1'} outline onClick={onPrev}>
        Previous
      </Button>
      {info && <div className='bg-sky-200 inline-flex flex-row items-center p-1 rounded'>
        <FaCircleInfo className='text-sky-400 mr-4' /><p>{info}</p>
      </div>}
      <div className='flex flex-grow justify-end'>
        <Button className={currentStep == 1 ? 'hidden' : 'm-1'} outline color='primary' onClick={saveExit} disabled={saveExitDisable} style={saveExitDisable ? { opacity: 0.5 } : {}}>
          Save and Exit
        </Button>
        <Button className='m-1' color='primary' onClick={onNext} disabled={nextDisable} style={nextDisable ? { opacity: 0.5 } : {}}>
          {isLastStep ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>




  );

}