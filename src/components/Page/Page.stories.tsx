import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Card } from '../Card';
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
  className:'height-24 overflow-auto',
  children: 'Page',
};

// className:'h-fit overflow-auto',
//   color: 'white',
export const TestPage = Template.bind({});
TestPage.storyName = 'TestPage';
TestPage.args = {
  children: <Card><p>this is the content</p></Card>,

  
//   children: (
// <>
// <Page className='' >
//   Page
// </Page>
// </>
  // ),
};
