import { type CodeData } from '~/components/code-demo';
import { Button } from '~/src';

const code = `
'use client';

import { Button } from '@qbitum/react-flat-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button gradientMonochrome="info">Info</Button>
      <Button gradientMonochrome="success">Success</Button>
      <Button gradientMonochrome="cyan">Cyan</Button>
      <Button gradientMonochrome="teal">Teal</Button>
      <Button gradientMonochrome="lime">Lime</Button>
      <Button gradientMonochrome="failure">Failure</Button>
      <Button gradientMonochrome="pink">Pink</Button>
      <Button gradientMonochrome="purple">Purple</Button>
    </div>
  );
}
`;

const codeRSC = `
import { Button } from '@qbitum/react-flat-ui';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button gradientMonochrome="info">Info</Button>
      <Button gradientMonochrome="success">Success</Button>
      <Button gradientMonochrome="cyan">Cyan</Button>
      <Button gradientMonochrome="teal">Teal</Button>
      <Button gradientMonochrome="lime">Lime</Button>
      <Button gradientMonochrome="failure">Failure</Button>
      <Button gradientMonochrome="pink">Pink</Button>
      <Button gradientMonochrome="purple">Purple</Button>
    </div>
  );
}
`;

function Component() {
  return (
    <div>
      <div className="text-md font-bold text-gray-400">Theme Buttons</div>
      <div className="mb-6 flex flex-wrap gap-2">
        <Button gradientMonochrome="primary">Primary</Button>
        <Button gradientMonochrome="secondary">Secondary</Button>
        <Button gradientMonochrome="tertiary">Tertiary</Button>
      </div>

      <div className="text-md font-bold text-gray-400">Status Buttons</div>
      <div className=" mb-6 flex flex-wrap gap-2">
        <Button gradientMonochrome="success">Success</Button>
        <Button gradientMonochrome="failure">Failure</Button>
        <Button gradientMonochrome="info">Info</Button>
        <Button gradientMonochrome="warning">Warning</Button>
      </div>

      <div className="text-md font-bold text-gray-400">Other Buttons</div>
      <div className=" mb-6 flex flex-wrap gap-2">
        <Button gradientMonochrome="blue">Blue</Button>
        <Button gradientMonochrome="green">Green</Button>
        <Button gradientMonochrome="red">Red</Button>
        <Button gradientMonochrome="yellow">Yellow</Button>
        <Button gradientMonochrome="cyan">Cyan</Button>
        <Button gradientMonochrome="pink">Pink</Button>
        <Button gradientMonochrome="purple">Purple</Button>
        <Button gradientMonochrome="gray">Gray</Button>
      </div>
    </div>
  );
}

export const gradientMono: CodeData = {
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
  githubSlug: 'button/button.gradientMono.tsx',
  component: <Component />,
};
