import type { Meta, StoryFn } from '@storybook/react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Page } from '../Page/Page';
import { SubHeader, SubHeaderLeft, SubHeaderRight } from '../SubHeader';
import type { PageWrapperProps } from './PageWrapper';
import { PageWrapper } from './PageWrapper';

export default {
  title: 'Components/PageWrapper',
  component: PageWrapper, 
} as Meta;

const Template: StoryFn<PageWrapperProps> = (args) => <div className="h-screen w-4/5"><PageWrapper {...args} /></div>;

export const DefaultPageWrapper = Template.bind({});
DefaultPageWrapper.storyName = 'PageWrapper';
DefaultPageWrapper.args = {
  children: <>
  <SubHeader><SubHeaderLeft heading='Job List'></SubHeaderLeft>


  <SubHeaderRight><Button>add new</Button></SubHeaderRight></SubHeader>
  <Page>
  {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9 " alt="Flowbite Logo" /> */}

    <Card><div className="flex ">
  <div className="flex-1 border w-64">
    02
  </div>
  <div className="flex-1 border w-32">
    03
  </div>
</div></Card>
  </Page>
  </>
};
