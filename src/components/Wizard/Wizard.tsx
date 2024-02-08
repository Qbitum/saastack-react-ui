'use client';

import React, { Children, cloneElement, forwardRef, useImperativeHandle, useState } from 'react';
import type { ReactElement } from 'react'
import type { ReactNode } from 'react';
import { HeaderBasic, HeaderProgress, HeaderTab } from './HeaderStyles';
import type { FlowbiteStateColors } from '../Flowbite';
import { FooterButton, FooterNav, LMFooterButton } from './FooterNav';

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
  footerStyle?: 'footer-button' | 'footer-nav' | 'lm-footer-button';
  onNext?: () => boolean;
  onStepChange: (index: number) => void;
  nextDisable?: boolean;
  initialStep?: number;
  saveExit?: () => void;
  message?: string;
  changeStep?: (index: number) => void;
}

export const Wizard = forwardRef<any, WizardProps>(({ headerStyle, footerStyle, children, onStepChange, onNext, saveExit, message,
  nextDisable = false,
  initialStep = 0
}, ref) => {
  const [activeItemIndex, setActiveItemIndex] = useState(initialStep); // Set the initial active step

  // const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {
    if (onNext && !onNext()) {
      return;
    }
    setCompletedSteps((prev) => [...prev, activeItemIndex]);
    const nextIndex = activeItemIndex + 1;
    setActiveItemIndex(nextIndex);
    if (onStepChange) onStepChange(nextIndex);
  };

  const handlePrev = () => {
    setCompletedSteps((prev) => {
      const arr = [...prev];
      arr.pop();
      return arr;
    });
    const pIndex = activeItemIndex - 1;
    setActiveItemIndex(pIndex);
    if (onStepChange) onStepChange(pIndex);
  };

  const handleStepClick = (stepIndex: number) => {
    setActiveItemIndex(stepIndex);
    if (onStepChange) onStepChange(stepIndex);
  };

  useImperativeHandle(
    ref,
    () => ({
      changeStep: (index: number) => {
        handleStepClick(index);
        setCompletedSteps((prev) => [...prev, activeItemIndex]);
      }
    }),
  )

  const totalSteps = React.Children.count(children);
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const titles = React.Children.map(children, (child) => (child as React.ReactElement<any>).props.title) as string[];

  const isNextDisabled = false;

  return (
    <div ref={ref} className='wizard flex flex-col h-full' data-test-id='wizard'>
      <div className='wizard-header'>
        {/* Add Header Style */}
        {headerStyle === 'header-progress' && (
          <HeaderProgress totalSteps={totalSteps} currentStep={activeItemIndex} onStepClick={handleStepClick} titles={titles} completedSteps={completedSteps} />
        )}
        {headerStyle === 'header-basic' && <HeaderBasic title={titles[activeItemIndex]} currentStep={activeItemIndex} totalSteps={totalSteps} onStep={2} />}
        {headerStyle === 'header-tab' && <HeaderTab totalSteps={totalSteps} currentStep={activeItemIndex} onStepClick={handleStepClick} titles={titles} completedSteps={completedSteps} onStep={2} />}
      </div>
      <div className="flex-grow overflow-y-auto">
        {Children.map(children, (child, index) =>
          cloneElement(child as unknown as ReactElement, {
            className: index !== activeItemIndex ? 'hidden' : '',
            'aria-hidden': index !== activeItemIndex,
          })
        )}
      </div>
      <div className='wizard-footer '>
        {/* Add Footer styles */}
        {footerStyle === 'lm-footer-button' && <LMFooterButton onNext={handleNext} onPrev={handlePrev} currentStep={activeItemIndex} totalSteps={totalSteps} disabled={isNextDisabled} nextDisable={nextDisable} saveExit={saveExit} info={message} hidden />}

        {footerStyle === 'footer-button' && <FooterButton onNext={handleNext} onPrev={handlePrev} currentStep={activeItemIndex} totalSteps={totalSteps} disabled={isNextDisabled} nextDisable={nextDisable} hidden />}
        {footerStyle === 'footer-nav' && <FooterNav onNext={handleNext} onPrev={handlePrev} currentStep={activeItemIndex} totalSteps={totalSteps} disabled={isNextDisabled} nextDisable={true} hidden />}
      </div>
    </div>
  );
});

Wizard.displayName = 'Wizard';
Wizard.defaultProps = {
  headerStyle: 'header-progress',
  footerStyle: 'footer-button',
};



