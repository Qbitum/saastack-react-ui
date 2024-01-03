import { type CodeData } from '~/components/code-demo';
import { Label, Select } from '~/src';

const code = `
'use client';

import { Label, Select } from '@qbitum/react-flat-ui';

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your country" />
      </div>
      <Select id="countries" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
    </div>
  );
}
`;

const codeRSC = `
import { Label, Select } from '@qbitum/react-flat-ui';

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your country" />
      </div>
      <Select id="countries" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
    </div>
  );
}
`;

function Component() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Defult Select" />
      </div>
      <Select id="countries" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>

      <div className="mb-4"></div>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Info Select" />
      </div>
      <Select id="countries" color="info" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>

      <div className="mb-4"></div>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Failure Select" />
      </div>
      <Select id="countries" color="failure" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>

      <div className="mb-4"></div>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Warning Select" />
      </div>
      <Select id="countries" color="warning" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>

      <div className="mb-4"></div>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Success Select" />
      </div>
      <Select id="countries" color="success" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>

      <div className="mb-4"></div>
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Gray Select" />
      </div>
      <Select id="countries" color="secondary" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
    </div>
  );
}

export const select: CodeData = {
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
  githubSlug: 'forms/forms.select.tsx',
  component: <Component />,
};
