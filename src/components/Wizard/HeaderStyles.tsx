import React from 'react';
import { Button } from '../Button';

export interface HeaderBasicProps {
  title: string;
  currentStep: number;
  totalSteps: number;
}

export const HeaderBasic: React.FC<HeaderBasicProps>  = ({ title, currentStep, totalSteps }) => {
    return (
			<div className='flex items-center justify-between py-4 border-b border-slate-400 mb-6'>
					<div className='text-2xl font-bold text-theme-primary'>
						{title}
					</div>
					<div className='text-base'>
						Step <span className='font-bold mx-2'>{currentStep}</span> of <span className='font-bold ml-2'>{totalSteps}</span>
					</div>
			</div>
    )
}

export interface HeaderTabProps {
  totalSteps: number;
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
  titles: string[]; 
}

export const HeaderTab: React.FC<HeaderTabProps> = ({ onStepClick, titles }) => {

	const handleStepClick = (index: number) => {
    onStepClick(index);
  }

  return (
    <div className='flex items-center justify-between mb-10'>
      {titles.map((title, index) => ( 
        <div className='w-full relative flex items-center' key={index}>
          <Button
            onClick={() => handleStepClick(index)}
            className='rounded-r-lg'
          >{(index + 1).toString()}</Button>
          <div className='flex-auto h-full p-2 rounded-r-lg bg-gray-200 mr-4 text-xs uppercase font-bold text-theme-primary'>{title}</div>
        </div>
      ))}
    </div>
  )
}

export interface HeaderProgressProps {
  totalSteps: number;
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
  titles: string[];
  completedSteps: number[];
}

export const HeaderProgress: React.FC<HeaderProgressProps> = ({ totalSteps, currentStep, onStepClick, titles, completedSteps }) => {

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