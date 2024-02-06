import type { Meta, StoryFn } from '@storybook/react';
import { Wizard } from './Wizard';
import { WizardStep } from './WizardStep';
import type { WizardProps } from './Wizard';
import { useRef } from 'react';
import { PageWrapper } from '../PageWrapper';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button } from '../Button';
import { Page } from '../Page';
import { SubHeader, SubHeaderLeft } from '../SubHeader';

export default {
  title: 'Components/Wizard',
  // component: Wizard,
} as Meta;

const Template: StoryFn = ({ children, setStep, saveExit }) => <Wizard onStepChange={setStep} saveExit={saveExit}>{children}</Wizard>;

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
    <Wizard  headerStyle='header-tab'{...args} ref={wref}>
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
  headerStyle: 'header-progress',
  footerStyle: 'footer-button',
};



export const LMWizard = (args: WizardProps, setStep: WizardProps): JSX.Element => {
  const wref = useRef(null);

  return (
    <PageWrapper className='bg-gray-700'>
      <SubHeader>
        <SubHeaderLeft heading="New Training">
          <Button color="light" ><AiOutlineArrowLeft className="mr-2 h-5 w-5" />Back</Button>
        </SubHeaderLeft>
      </SubHeader>
      <Page className='h-fill'>
     
      <Wizard {...setStep}  headerStyle='header-tab'{...args} ref={wref}>
      <WizardStep stepIndex="1" title="Upload Base Image"></WizardStep>
      <WizardStep stepIndex="2" title="AI Processing"></WizardStep>
      <WizardStep stepIndex="3" title="Sample Check"></WizardStep>
      <WizardStep stepIndex="4" title="Approval"></WizardStep>
     </Wizard>
      </Page >
    </PageWrapper>
    
    
  );
};

LMWizard.args = {
  onStepChange: (newStep: number) => {
    console.log(`LM Wizard to: ${newStep}`);
    
  },

  
  onNext: () => {
    return true;
  },

  nextDisable: false, 
  initialStep: 0, 
  
  footerStyle: 'lm-footer-button',

};