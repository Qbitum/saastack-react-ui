import type { Meta, StoryFn } from '@storybook/react';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Navbar, type NavbarComponentProps } from './Navbar';
import {Separator} from '../Separator'

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: StoryFn<NavbarComponentProps> = (args) => (
  <div className="w-4/5">
    <Navbar {...args} />
  </div>
);

export const DefaultNavbar = Template.bind({});
DefaultNavbar.storyName = 'Default';
DefaultNavbar.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
};

export const WithCTA = Template.bind({});
WithCTA.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </Navbar.Brand>
      <div className="flex gap-3 md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
};

export const WithDropdown = Template.bind({});
WithDropdown.storyName = 'With dropdown';
WithDropdown.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </Navbar.Brand>
      <div className="flex gap-3 md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </>
  ),
};

export const AppHeader = Template.bind({});
AppHeader.args = {
  children: (
    <>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-6" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl text-white font-semibold dark:text-white">Label Checking</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="ml-auto flex items-center">
        
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" className="mx-4">
            Admin
          </Navbar.Link>
        </Navbar.Collapse>
        <Separator/>
        <Dropdown arrowIcon={false} inline label={<Avatar alt="User Profile" rounded size="sm" />}>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown>
        <span className="block pl-2 text-sm text-white">Jade Faro</span>
      </div>
    </>
  ),
};

