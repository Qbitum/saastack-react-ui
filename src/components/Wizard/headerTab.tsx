import React from 'react';
import { Button } from '../Button';

interface HeaderTabProps {
  totalSteps: number;
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
  titles: string[]; 
}

const HeaderTab: React.FC<HeaderTabProps> = ({ onStepClick, titles }) => {

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

export default HeaderTab;
