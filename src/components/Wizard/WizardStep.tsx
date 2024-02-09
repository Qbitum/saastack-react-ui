import React from 'react';
import type { ReactNode } from 'react';
import classNames from 'classnames';

export interface WizardStepProps {
  children?: ReactNode;
  stepIndex: string;
  title: string;
  className?: string;
}

export const WizardStep: React.FC<WizardStepProps> = ({ children, className }) => {
  return (
    <div className={classNames('wizard-item flex flex-auto p-2 h-full', className)}>
      {children}
    </div>
  )
}