'use client';

import React, {Children, cloneElement, forwardRef, ReactElement, useState } from 'react';
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
}

export const Wizard = forwardRef<HTMLDivElement,WizardProps>(({ headerStyle, footerStyle, children, onStepChange,onNext },ref) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  
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
    if(onNext && !onNext()){
      return;
    }
    setCompletedSteps(prev => [...prev,activeItemIndex])
    setActiveItemIndex(activeItemIndex + 1)
    if(onStepChange)onStepChange(activeItemIndex);
  };

  const handlePrev = () => {
    setCompletedSteps(prev => {
      let arr = [...prev];
      arr.pop();
      return arr;
    })
    setActiveItemIndex(activeItemIndex - 1)
    if(onStepChange)onStepChange(activeItemIndex);
  };

   const handleStepClick = (stepIndex: number) => {
    setActiveItemIndex(stepIndex);
    if(onStepChange)onStepChange(stepIndex);
   };

  const totalSteps = React.Children.count(children);
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
  const titles = React.Children.map(children, child => (child as React.ReactElement<any>).props.title) as string[];

  return (
    <div ref={ref} className='wizard' data-test-id='wizard'>
      <div className='wizard-header'>
        {/* Add Header Style */}

        {/* HeaderProgress */}
        {headerStyle === 'header-progress' && <HeaderProgress totalSteps={totalSteps} currentStep={activeItemIndex} onStepClick={handleStepClick} titles={titles} completedSteps={completedSteps} />}

        {/* HeaderBasic */}
        {headerStyle === 'header-basic' && <HeaderBasic title={titles[activeItemIndex]} currentStep={activeItemIndex} totalSteps={totalSteps} />}

        {/* HeaderTab */}
        {headerStyle === 'header-tab' && <HeaderTab totalSteps={totalSteps} currentStep={activeItemIndex} onStepClick={handleStepClick} titles={titles} />}
      </div>

      {
      Children.map(children, (child, index) =>
          cloneElement(child as unknown as ReactElement, {
            className: index !== activeItemIndex ? 'hidden' : '',
            'aria-hidden': index !== activeItemIndex,
          }),
        )
      //</div>React.Children.map(children, (child, index) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //  index === activeItemIndex ? React.cloneElement(child as React.ReactElement<any>, { onNext: handleNext, onPrev: handlePrev }) : null
      //)
      }
      <div className='wizard-footer'>
        {/* Add Footer styles */}

        {/* FooterButton */}
        {footerStyle === 'footer-button' && <FooterButton onNext={handleNext} onPrev={handlePrev} currentStep={activeItemIndex} totalSteps={totalSteps} />}

        {/* FooterNav */}
        {footerStyle === 'footer-nav' && <FooterNav onNext={handleNext} onPrev={handlePrev} currentStep={activeItemIndex} totalSteps={totalSteps} />}
      </div>
    </div>
  );
})

// Set default props
Wizard.defaultProps = {
  headerStyle: 'header-progress',
  footerStyle: 'footer-button'
};