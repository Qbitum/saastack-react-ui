import React, { ReactNode, useState } from 'react';
import HeaderProgress from './headerProgress';
import HeaderBasic from './headerBasic';
import FooterButton from './footerButton';
import FooterNav from './footerNav';
import HeaderTab from './headerTab';
import { DeepPartial } from '../../types';

export interface FlowbiteWizardRootTheme {
  base: string;
}
export interface FlowbiteWizardTheme {
  root: FlowbiteWizardRootTheme;
}
export interface WizardProps {
  children?: ReactNode;
  headerStyle?: 'header-progress' | 'header-basic' | 'header-tab';
  footerStyle?: 'footer-button' | 'footer-nav';
  theme?: DeepPartial<FlowbiteWizardTheme>;
}

export const Wizard: React.FC<WizardProps> = ({ 
  headerStyle, 
  footerStyle, 
  children
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {
    setCurrentStep(prevStep => {
      setCompletedSteps(prev => [...prev, prevStep]);
      return Math.min(prevStep + 1, React.Children.count(children) - 1);
    });
  };

  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 0));
  };

  // const handleStepClick = (stepIndex: number) => {
  //   setCurrentStep(stepIndex);
  // };

  const totalSteps = React.Children.count(children);
  const titles = React.Children.map(children, child => (child as React.ReactElement<any>).props.title) as string[];

  return (
    <div>
      <div>
        {/* Add Header Style */}
        
        {/* HeaderProgress */}
        {headerStyle === 'header-progress' && <HeaderProgress totalSteps={totalSteps} currentStep={currentStep} onStepClick={setCurrentStep} titles={titles} completedSteps={completedSteps} />}
        
        {/* HeaderBasic */}
        {headerStyle === 'header-basic' && <HeaderBasic title={titles[currentStep]} currentStep={currentStep + 1} totalSteps={totalSteps} />}
        
        {/* HeaderTab */}
        {headerStyle === 'header-tab' && <HeaderTab totalSteps={totalSteps} currentStep={currentStep} onStepClick={setCurrentStep} titles={titles} />}
      </div>
      {React.Children.map(children, (child, index) =>
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

export default Wizard;
