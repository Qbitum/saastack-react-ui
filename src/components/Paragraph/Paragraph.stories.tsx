import type { Meta, StoryFn } from '@storybook/react';
import type { ParagraphProps } from './Paragraph';
import { Paragraph } from './Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
} as Meta;

const Template: StoryFn<ParagraphProps> = (args) => <Paragraph {...args} />;

export const DefaultParagraph = Template.bind({});
DefaultParagraph.storyName = 'Paragraph';
DefaultParagraph.args = {
  children: 'Paragraph',
};
