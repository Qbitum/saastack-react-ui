import type { Meta, StoryFn } from '@storybook/react';
import { SubHeader, SubHeaderLeft, SubHeaderRight } from './SubHeader';
import { Button } from '../Button';

export default {
  title: 'Components/SubHeader',
  component: SubHeader,
  children:'<span>page title</span>'
} as Meta;

const Template: StoryFn = (args) => <SubHeader {...args}>Title</SubHeader>;

export const Default = Template.bind({});

Default.args = {
  background: 'default',
  height: 'md',
  title: 'Default subheader example',
};

export const Sizes = (): JSX.Element => (
  <div className="gap-3">
    <SubHeader h="sm" bg='sky'><SubHeaderLeft heading='Page title 1'></SubHeaderLeft>
    <SubHeaderRight>username</SubHeaderRight></SubHeader>
    <SubHeader h="lg" bg='primary'><SubHeaderLeft heading='Page title 2'></SubHeaderLeft></SubHeader>
    </div>
);

export const ButtonAndTitle = (): JSX.Element => (
  <div className="gap-3">
    <SubHeader h="sm" bg='sky'>
      <SubHeaderLeft heading='Page title 2'></SubHeaderLeft>
      <SubHeaderRight>
        <Button  size={'sm'}>button</Button>
      </SubHeaderRight>
    </SubHeader>
    <div className='flex bg-grey-50'>
      <p>this iis the page header content</p>
    </div>
  </div>
);
