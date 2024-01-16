import type { Meta, StoryFn } from '@storybook/react';
import Wizard from './wizard';
import WizardStep from './wizardStep';

export default {
  title: 'Components/Wizard',
  component: Wizard,
} as Meta;

const Template: StoryFn = ({ children, setStep }) => <Wizard setStep={setStep}>{children}</Wizard>;


export const DefaultWizard = Template.bind({});
DefaultWizard.storyName = 'Wizard';
DefaultWizard.args = {
  setStep: (newStep: number) => {
    console.log(`Setting step to: ${newStep}`);
  },
    children: (
    <div className="">
      <Wizard headerStyle='header-progress' footerStyle='footer-button' setStep={() => { }}>
            <WizardStep stepIndex='1' title='step title a'></WizardStep>
            <WizardStep stepIndex='2' title='step title b'></WizardStep>
            <WizardStep stepIndex='3' title='step title c'></WizardStep>
            <WizardStep stepIndex='4' title='step title d'></WizardStep>
          </Wizard>
    </div>
  ),
};