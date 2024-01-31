'use client';

import React, {Children, cloneElement, forwardRef,useState } from 'react';
import type {ReactElement}from 'react'
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
  setStep?: (step: number) => void;
  onNext?:()=>boolean;
  onStepChange:(index:number)=> void;
  nextDisable?: ()=> boolean;

}

export const Wizard = forwardRef<HTMLDivElement, WizardProps>(({ headerStyle, footerStyle, children, onStepChange, onNext, nextDisable }, ref) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {
    if (onNext && !onNext()) {
      return;
    }
    setCompletedSteps((prev) => [...prev, activeItemIndex]);
    setActiveItemIndex(activeItemIndex + 1);
    if (onStepChange) onStepChange(activeItemIndex);
  };

  const handlePrev = () => {
    setCompletedSteps((prev) => {
      const arr = [...prev];
      arr.pop();
      return arr;
    });
    setActiveItemIndex(activeItemIndex - 1);
    if (onStepChange) onStepChange(activeItemIndex);
  };

  const handleStepClick = (stepIndex: number) => {
    setActiveItemIndex(stepIndex);
    if (onStepChange) onStepChange(stepIndex);
  };

  const totalSteps = React.Children.count(children);
  const titles = React.Children.map(children, (child) => (child as React.ReactElement<any>).props.title) as string[];

  const isNextDisabled = onNext ? !onNext() : false;

  return (
    <div ref={ref} className='wizard' data-test-id='wizard'>
      <div className='wizard-header'>
        {/* Add Header Style */}
        {headerStyle === 'header-progress' && (
          <HeaderProgress totalSteps={totalSteps} currentStep={activeItemIndex} onStepClick={handleStepClick} titles={titles} completedSteps={completedSteps} />
        )}
        {headerStyle === 'header-basic' && <HeaderBasic title={titles[activeItemIndex]} currentStep={activeItemIndex} totalSteps={totalSteps} />}
        {headerStyle === 'header-tab' && <HeaderTab totalSteps={totalSteps} currentStep={activeItemIndex} onStepClick={handleStepClick} titles={titles} completedSteps={completedSteps} />}
      </div>

      {Children.map(children, (child, index) =>
        cloneElement(child as unknown as ReactElement, {
          className: index !== activeItemIndex ? 'hidden' : '',
          'aria-hidden': index !== activeItemIndex,
        })
      )}

      <div className='wizard-footer'>
        {/* Add Footer styles */}
        {footerStyle === 'footer-button' && <FooterButton onNext={handleNext} onPrev={handlePrev} currentStep={activeItemIndex} totalSteps={totalSteps} disabled={isNextDisabled} nextDisable={false} />}
        {footerStyle === 'footer-nav' && <FooterNav onNext={handleNext} onPrev={handlePrev} currentStep={activeItemIndex} totalSteps={totalSteps} disabled={isNextDisabled} nextDisable={true} />}
      </div>
    </div>
  );
});

Wizard.displayName = 'Wizard';
Wizard.defaultProps = {
  headerStyle: 'header-progress',
  footerStyle: 'footer-button',
};