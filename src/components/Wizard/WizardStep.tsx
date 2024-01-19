import React from 'react';
import type { ReactNode } from 'react'; 

export interface WizardStepProps {
	children?: ReactNode;
  stepIndex: string;
  title: string;
}

export const WizardStep: React.FC<WizardStepProps>  = ( {stepIndex, title, children} ) => {
    return (
			<div>
        <h2>{`Step ${stepIndex} - ${title}`}</h2>
        {children}
      </div>
    )
}