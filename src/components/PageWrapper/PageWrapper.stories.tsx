import type { Meta, StoryFn } from '@storybook/react';
import type { PageWrapperProps } from './PageWrapper';
import { PageWrapper } from './PageWrapper';

export default {
  title: 'Components/PageWrapper',
  component: PageWrapper, 
} as Meta;

const Template: StoryFn<PageWrapperProps> = (args) => <PageWrapper {...args} />;

export const DefaultPageWrapper = Template.bind({});
DefaultPageWrapper.storyName = 'PageWrapper';
DefaultPageWrapper.args = {
  children: 'PageWrapper',
color:'white',
};
