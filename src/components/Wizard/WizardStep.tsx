import React from 'react';
import type { ReactNode } from 'react'; 
import classNames from 'classnames';

export interface WizardStepProps {
	children?: ReactNode;
  stepIndex: string;
  title: string;
  className?: string;
}

export const WizardStep: React.FC<WizardStepProps>  = ( {stepIndex, title, children,className} ) => {
    return (
			<div className={classNames('wizard-item', className)}>
        <h2>{`Step ${stepIndex} - ${title}`}</h2>
        {children}
      </div>
    )
}