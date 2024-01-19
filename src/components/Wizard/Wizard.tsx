'use client';

import React, {useState } from 'react';
import type {ReactNode} from 'react';
import {HeaderBasic, HeaderProgress, HeaderTab} from './HeaderStyles';
import type { FlowbiteStateColors } from '../Flowbite';
import { FooterButton, FooterNav } from './FooterNav';

export interface FlowbiteWizardTheme {
  root: FlowbiteWizardRootTheme;
}

export interface FlowbiteWizardRootTheme {
  base: string;
  colors: WizardColors;
}

export interface WizardColors extends FlowbiteStateColors {
  default: string;
}

export interface WizardProps {
  children: ReactNode;
  headerStyle?: 'header-progress' | 'header-basic' | 'header-tab';
  footerStyle?: 'footer-button' | 'footer-nav';
  setStep: (step: number) => void;
}

export const Wizard: React.FC<WizardProps> = ({ headerStyle, footerStyle, children, setStep }) => {
  const [currentStep, setCurrentStep] = useState(0);

  /*
  this is the recmended way of getting childrens
  const wSteps = useMemo(
    () =>
      Children.map(
        Children.toArray(children) as ReactElement<PropsWithChildren<WizardStepProps>>[],
        ({ props }) => props,
      ),
    [children],
  );*/
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {

    setCurrentStep(prevStep => {
      setStep(prevStep + 1)

      setCompletedSteps(prev => [...prev, prevStep]);
      return Math.min(prevStep + 1, React.Children.count(children) - 1);
    });

  };

  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
    console.log(currentStep);
    setStep(currentStep - 1);
 
  };

   const handleStepClick = (stepIndex: number) => {
    setCurrentStep(stepIndex);
   };

  const totalSteps = React.Children.count(children);
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
  const titles = React.Children.map(children, child => (child as React.ReactElement<any>).props.title) as string[];

  return (
    <div>
      <div>
        {/* Add Header Style */}

        {/* HeaderProgress */}
        {headerStyle === 'header-progress' && <HeaderProgress totalSteps={totalSteps} currentStep={currentStep} onStepClick={handleStepClick} titles={titles} completedSteps={completedSteps} />}

        {/* HeaderBasic */}
        {headerStyle === 'header-basic' && <HeaderBasic title={titles[currentStep]} currentStep={currentStep + 1} totalSteps={totalSteps} />}

        {/* HeaderTab */}
        {headerStyle === 'header-tab' && <HeaderTab totalSteps={totalSteps} currentStep={currentStep} onStepClick={handleStepClick} titles={titles} />}
      </div>

      {React.Children.map(children, (child, index) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        index === currentStep ? React.cloneElement(child as React.ReactElement<any>, { onNext: handleNext, onPrev: handlePrev }) : null
      )}
      <div>
        {/* Add Footer styles */}

        {/* FooterButton */}
        {footerStyle === 'footer-button' && <FooterButton onNext={handleNext} onPrev={handlePrev} currentStep={currentStep} totalSteps={totalSteps} />}

        {/* FooterNav */}
        {footerStyle === 'footer-nav' && <FooterNav onNext={handleNext} onPrev={handlePrev} currentStep={currentStep} totalSteps={totalSteps} />}
      </div>
    </div>
  );
}

// Set default props
Wizard.defaultProps = {
  headerStyle: 'header-progress',
  footerStyle: 'footer-button'
};