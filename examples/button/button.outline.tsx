import { type CodeData } from '~/components/code-demo';
import { Button } from '~/src';

const code = `
'use client';

import { Button } from 'flowbite-react';

function Component() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to Blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to Blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to Blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to Pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to Orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to Lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to Yellow
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
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to Blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to Blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to Blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to Pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to Orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to Lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to Yellow
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
        <Button color="primary" outline>Primary outline</Button>
        <Button color="secondary" outline>Secondary outline</Button>
        <Button color='tertiary' outline>Tertiary outline</Button>
      </div>

      <div className='text-md font-bold text-gray-400'>Status Buttons</div>
      <div className=' mb-6 flex flex-wrap gap-2'>
        <Button color="success" outline>Success outline</Button>
        <Button color="failure" outline>Failure outline</Button>
        <Button color="warning" outline>Warning outline</Button>
        <Button color='info' outline>Info outline</Button>
      </div>

      <div className='text-md font-bold text-gray-400'>Other Buttons</div>
      <div className=' mb-6 flex flex-wrap gap-2'>
        <Button color="dark" outline>Dark outline</Button>
        <Button color="light" outline>Light outline</Button>
        <Button color="blue" outline>Blue outline</Button>
        <Button color="green" outline>Green outline</Button>
        <Button color="yellow" outline>Yellow outline</Button>
        <Button color='red' outline>Red outline</Button>
        <Button color="cyan" outline>Cyan outline</Button>
        <Button color='purple' outline>Purple outline</Button>
        <Button color="pink" outline>Pink outline</Button>
        <Button color="gray" outline>Gray outline</Button>
      </div>
    </div>
  );
}

export const outline: CodeData = {
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
  githubSlug: 'button/button.outline.tsx',
  component: <Component />,
};
