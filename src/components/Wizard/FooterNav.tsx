import React from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { Button } from '../Button';
import { AiFillInfoCircle } from 'react-icons/ai';

export interface FooterNavProps {
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
  totalSteps: number;
  disabled: boolean;
  nextDisable: boolean;
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


export const LMFooterButton: React.FC<FooterNavProps> = ({ onNext, onPrev, currentStep, totalSteps, nextDisable, saveExit, info }) => {
  const isLastStep = currentStep === totalSteps - 1;
  // return (
  //   <div className='flex items-center'>
  //     <Button className='m-1' onClick={onPrev} disabled={isFirstStep} hidden>
  //       Previous
  //     </Button>
  //     <div className='flex flex-grow justify-end'>
  //       <Button className='m-1' outline onClick={saveExit}>
  //         Save and Exit
  //       </Button>
  //       <Button className='m-1' onClick={onNext} disabled={nextDisable} style={nextDisable ? { opacity: 0.5 } : {}}>
  //         {isLastStep ? 'Finish' : 'Next'}
  //       </Button>
  //     </div>
  //   </div>
  // );
  return (
    <div className='flex items-center p-2'>

      <Button className={currentStep == 0 ? 'hidden' : 'm-1'} outline onClick={onPrev}>
        Previous
      </Button>
      {info && <div className='bg-sky-200 inline-flex flex-row items-center p-1 rounded'>
        <AiFillInfoCircle className='text-sky-400 mr-4' /><p>{info}</p>
      </div>}
      <div className='flex flex-grow justify-end'>
        <Button className='m-1' outline color='primary' onClick={saveExit}>
          Save and Exit
        </Button>
        <Button className='m-1' color='primary' onClick={onNext} disabled={nextDisable} style={nextDisable ? { opacity: 0.5 } : {}}>
          {isLastStep ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>




  );

}