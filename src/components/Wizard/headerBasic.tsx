import React from 'react';

interface HeaderBasicProps {
  title: string;
  currentStep: number;
  totalSteps: number;
}

const HeaderBasic: React.FC<HeaderBasicProps>  = ({ title, currentStep, totalSteps }) => {
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

export default HeaderBasic;
