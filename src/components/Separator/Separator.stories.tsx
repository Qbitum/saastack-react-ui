import type { Meta, StoryFn } from '@storybook/react';
import { Separator } from './Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
} as Meta;

const Template: StoryFn = (args) => <Separator {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 'default',
  size: 'sm',
  title: 'Default separator example',
};

export const Sizes = (): JSX.Element => (
  <div className="flex flex-row gap-3">
    <div>This Small</div><Separator size="md" />
    <div>This large</div><Separator size="lg" />
  </div>
);
