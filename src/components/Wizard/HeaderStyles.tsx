import React from 'react';
import { Button } from '../Button';
import { AiOutlineCheckCircle, AiOutlineRight } from 'react-icons/ai';

export interface HeaderBasicProps {
  title: string;
  currentStep: number;
  totalSteps: number;
  onStep: number;
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
  completedSteps: number[];
  onStep: number;

}

export const HeaderTab: React.FC<HeaderTabProps> = ({  titles, currentStep, completedSteps }) => {
  // const handleStepClick = (index: number) => {
  //   onStepClick(index);
  // };

  return (
    <div className='flex items-center justify-between mb-10 '>
      {titles.map((title, index) => (
        <div
        className={`w-full relative flex items-center transition-all duration-300
          ${currentStep === index ? 'bg-cyan-300' : completedSteps.includes(index) ? 'bg-cyan-600' : 'bg-stone-100'}
          h-8 mr-0.5`}
        key={index}
        style={{
          borderRadius: `${
            index === 0 ? '8px 0 0 8px' : index === titles.length - 1 ? '0 8px 8px 0' : '0'
          }`,
        }}
      >
          <div className={`h-full w-10 flex items-center justify-center ${currentStep === index ? 'bg-cyan-600' : ''}`}
          style={{
            borderRadius: `${
              index === 0 ? '8px 0 0 8px' :  '0'
            }`,
          }}>
            <div className={`text-sm font-bold leading-tight ${completedSteps.includes(index) ? 'text-white' : currentStep === index ? 'text-white' : 'text-cyan-600'}`}>
              {completedSteps.includes(index) ? (
                (index + 1).toString()
              ) : (
                (index + 1).toString()
              )}
            </div>
          </div>
          <div
            className={`flex-auto h-full p-2 rounded-r-lg 300 font-bold 
              ${currentStep === index ? 'text-white' : completedSteps.includes(index) ? 'text-white' : 'text-cyan-600'}
              flex-auto text-sm font-bold flex items-center`}
          >
            {title}
          </div>
          <div className='h-full w-10 flex items-center justify-center'>
            {currentStep === index ? (
              <AiOutlineRight className={`h-6 w-6 text-cyan-600`} />
            ) : completedSteps.includes(index) ? (
              <AiOutlineCheckCircle className="h-6 w-6 text-white" />
            ) : (
              ''
            )}
          </div>
        </div>
      ))}
    </div>
  );
  
};

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