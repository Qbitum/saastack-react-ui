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
    <div className="flex flex-wrap gap-2">
      <Button color="dark" outline>Dark</Button>
      <Button color="light" outline>Light</Button>
      <Button outline>Info</Button>
      <Button color="gray" outline>Gray</Button>
      <Button color="success" outline>Success</Button>
      <Button color="failure" outline>Failure</Button>
      <Button color="warning" outline>Warning</Button>
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
