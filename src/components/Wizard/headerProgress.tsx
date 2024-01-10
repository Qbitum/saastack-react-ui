import React from 'react';
import { Button } from '../Button';

interface HeaderProgressProps {
  totalSteps: number;
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
  titles: string[];
  completedSteps: number[];
}

const HeaderProgress: React.FC<HeaderProgressProps> = ({ totalSteps, currentStep, onStepClick, titles, completedSteps }) => {

	const handleStepClick = (index: number) => {
    onStepClick(index);
  }
  

  return (
    <div className='flex items-center justify-between mb-12 mx-12'>
      {Array.from({ length: totalSteps }, (_, index) => (
        <div className={`flex items-center ${index === totalSteps - 1 ? '' : 'w-full'}`} key={index}>
          <div className='relative flex flex-col items-center'>
            <Button
              
							onClick={() => handleStepClick(index)}
              //outline={index === currentStep}
              //color={completedSteps.includes(index) ? 'success' : 'primary'}
              color={
                completedSteps.includes(index) ? 'success' : index === currentStep ? 'primary' : 'primary50' 
              }
            >{(index + 1).toString()}</Button>
            <div className={completedSteps.includes(index) ? 'absolute mt-12 text-center w-32 top-0 text-green-700 uppercase text-xs' : 'absolute mt-12 text-center w-32 top-0 text-theme-primary uppercase text-xs'}
            >
              {titles[index]}
            </div>
          </div>
          {index < totalSteps - 1 && 
            <div className='flex-auto h-1 bg-gray-300'>
              <div className={completedSteps.includes(index) ? 'h-1 w-full bg-green-700' : 'h-1 w-0 bg-green-700'}></div>
            </div>
          }
        </div>
      ))}
    </div>
  )
}

export default HeaderProgress;
