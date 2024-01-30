import type { Meta, StoryFn } from '@storybook/react';
import { Wizard } from './Wizard';
import { WizardStep } from './WizardStep';
import type { WizardProps } from './Wizard';
import { useRef } from 'react';
export default {
  title: 'Components/Wizard',
  component: Wizard,
} as Meta;

const Template: StoryFn = ({ children, setStep }) => <Wizard onStepChange={setStep}>{children}</Wizard>;

export const DefaultWizard = Template.bind({});
DefaultWizard.storyName = 'Wizard';
DefaultWizard.args = {
  setStep: (newStep: number) => {
    console.log(`Setting step to: ${newStep}`);
  },
};
export const ProgressWizard = (args: WizardProps): JSX.Element => {
  const wref = useRef(null);

  return (
    <Wizard headerStyle='header-tab'{...args} ref={wref}>
      <WizardStep stepIndex="1" title="step title a"></WizardStep>
      <WizardStep stepIndex="2" title="step title b"></WizardStep>
      <WizardStep stepIndex="3" title="step title c"></WizardStep>
      <WizardStep stepIndex="4" title="step title d"></WizardStep>
    </Wizard>
  );
};

ProgressWizard.args = {
  onStepChange: (newStep: number) => {
    console.log(`ProgressWizard to: ${newStep}`);
  },
  onNext: () => {
    return true;
  },
  // headerStyle: 'header-progress',
  // footerStyle: 'footer-button',
};



export const LMWizard = (args: WizardProps): JSX.Element => {
  const wref = useRef(null);

  return (
    <Wizard headerStyle='header-tab'{...args} ref={wref}>
      <WizardStep stepIndex="1" title="step title a"></WizardStep>
      <WizardStep stepIndex="2" title="step title b"></WizardStep>
      <WizardStep stepIndex="3" title="step title c"></WizardStep>
      <WizardStep stepIndex="4" title="step title d"></WizardStep>
    </Wizard>
  );
};

LMWizard.args = {
  onStepChange: (newStep: number) => {
    console.log(`LM Wizard to: ${newStep}`);
  },
  onNext: () => {
    return true;
  },
  
};