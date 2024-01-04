import type { Meta, StoryFn } from '@storybook/react';
import type { PageProps } from './Page';
import { Page } from './Page';

export default {
  title: 'Components/Page',
  component: Page, 
} as Meta;

const Template: StoryFn<PageProps> = (args) => <Page {...args} />;

export const DefaultPage = Template.bind({});
DefaultPage.storyName = 'Page';
DefaultPage.args = {
  children: 'Page',
  className: 'bg-gray-600' ,
};
