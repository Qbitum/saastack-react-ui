import { type CodeData } from '~/components/code-demo';
import { Blockquote } from '~/src';

const code = `
'use client';

import { Blockquote } from '@qbitum/react-flat-ui';

function Component() {
  return (
    <Blockquote className="text-lg">
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
      complex dashboard. Perfect choice for your next SaaS application."
    </Blockquote>
  );
}
`;

const codeRSC = `
import { Blockquote } from '@qbitum/react-flat-ui';

function Component() {
  return (
    <Blockquote className="text-lg">
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
      complex dashboard. Perfect choice for your next SaaS application."
    </Blockquote>
  );
}
`;

function Component() {
  return (
    <Blockquote className="text-lg">
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
      complex dashboard. Perfect choice for your next SaaS application."
    </Blockquote>
  );
}

export const small: CodeData = {
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
  githubSlug: 'blockquote/blockquote.small.tsx',
  component: <Component />,
};
