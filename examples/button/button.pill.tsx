import { type CodeData } from '~/components/code-demo';
import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button pill>Info</Button>
      <Button color="gray" pill>
        Gray
      </Button>
      <Button color="dark" pill>
        Dark
      </Button>
      <Button color="light" pill>
        Light
      </Button>
      <Button color="success" pill>
        Success
      </Button>
      <Button color="failure" pill>
        Failure
      </Button>
      <Button color="warning" pill>
        Warning
      </Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button pill>Info</Button>
      <Button color="gray" pill>
        Gray
      </Button>
      <Button color="dark" pill>
        Dark
      </Button>
      <Button color="light" pill>
        Light
      </Button>
      <Button color="success" pill>
        Success
      </Button>
      <Button color="failure" pill>
        Failure
      </Button>
      <Button color="warning" pill>
        Warning
      </Button>
    </div>
  );
}
`;

function Component() {
  return (
    <div>

      <div className='text-md font-bold text-gray-400'>Theme Buttons</div>
      <div className='mb-6 flex flex-wrap gap-2'>
        <Button color="primary" pill>Primary</Button>
        <Button color="secondary" pill>Secondary</Button>
        <Button color='tertiary' pill>Tertiary</Button>
      </div>

      <div className='text-md font-bold text-gray-400'>Status Buttons</div>
      <div className=' mb-6 flex flex-wrap gap-2'>
        <Button color="success" pill>Success</Button>
        <Button color="failure" pill>Failure</Button>
        <Button color="warning" pill>Warning</Button>
        <Button color='info' pill>Info</Button>
      </div>

      <div className='text-md font-bold text-gray-400'>Other Buttons</div>
      <div className=' mb-6 flex flex-wrap gap-2'>
        <Button color="dark" pill>Dark</Button>
        <Button color="light" pill>Light</Button>
        <Button color="blue" pill>Blue</Button>
        <Button color="green" pill>Green</Button>
        <Button color="yellow" pill>Yellow</Button>
        <Button color='red' pill>Red</Button>
        <Button color="cyan" pill>Cyan</Button>
        <Button color='purple' pill>Purple</Button>
        <Button color="pink" pill>Pink</Button>
        <Button color="gray" pill>Gray</Button>
      </div>
    </div>
  );
}

export const pill: CodeData = {
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
  githubSlug: 'button/button.pill.tsx',
  component: <Component />,
};
