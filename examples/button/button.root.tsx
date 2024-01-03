import { type CodeData } from '~/components/code-demo';
import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button>Info</Button>
      <Button color="gray">Gray</Button> 
      <Button color="success">Success</Button>
      <Button color="failure">Failure</Button>
      <Button color="warning">Warning</Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button>Info</Button>
      <Button color="gray">Gray</Button> 
      <Button color="success">Success</Button>
      <Button color="failure">Failure</Button>
      <Button color="warning">Warning</Button>
    </div>
  );
}
`;

function Component() {
  return (
    <div>
      <div className='text-md font-bold text-gray-400'>Theme Buttons</div>
      <div className='mb-6 flex flex-wrap gap-2'>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color='tertiary'>Tertiary</Button>
      </div>

      <div className='text-md font-bold text-gray-400'>Status Buttons</div>
      <div className=' mb-6 flex flex-wrap gap-2'>
        <Button color="success">Success</Button>
        <Button color="failure">Failure</Button>
        <Button color="warning">Warning</Button>
        <Button color='info'>Info</Button>
      </div>

      <div className='text-md font-bold text-gray-400'>Other Buttons</div>
      <div className=' mb-6 flex flex-wrap gap-2'>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
        <Button color="blue">Blue</Button>
        <Button color="green">Green</Button>
        <Button color="yellow">Yellow</Button>
        <Button color='red'>Red</Button>
        <Button color="cyan">Cyan</Button>
        <Button color='purple'>Purple</Button>
        <Button color="pink">Pink</Button>
        <Button color="gray">Gray</Button>
      </div>
    </div>
  );
}

export const root: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'button/button.root.tsx',
  component: <Component />,
};
