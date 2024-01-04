import type { Meta, StoryFn } from '@storybook/react';
import type { SectionProps } from './Section';
import { Section } from './Section';

export default {
  title: 'Components/Section',
  component: Section, 
} as Meta;

const Template: StoryFn<SectionProps> = (args) => <Section {...args} />;

export const DefaultSection = Template.bind({});
DefaultSection.storyName = 'Section';
DefaultSection.args = {
  children: 'Section',
  className: 'bg-gray-600' ,
  radius: 'xl'
  
};