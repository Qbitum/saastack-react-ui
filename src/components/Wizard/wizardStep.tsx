import React, { ReactNode } from 'react';

export interface WizardStepProps {
	children?: ReactNode;
  stepIndex: string;
  title: string;
}

export const WizardStep: React.FC<WizardStepProps>  = ( {stepIndex, title, children} ) => {
    return (
			<form>
        <h2>{`Step ${stepIndex} - ${title}`}</h2>
        {children}
      </form>
    )
}

export default WizardStep