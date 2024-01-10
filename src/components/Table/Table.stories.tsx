import type { Meta, StoryFn } from '@storybook/react';
import type { TableProps } from './Table';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { HiTrash } from 'react-icons/hi';

export default {
  title: 'Components/Tables',
  component: Table,
} as Meta;

const Template: StoryFn<TableProps> = (args) => (
  <div className="w-5/5">
    <Table {...args} />
  </div>
);

export const DefaultTable = Template.bind({});
DefaultTable.storyName = 'Default';
DefaultTable.args = {
  children: (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Google Pixel Phone
            </Table.Cell>
            <Table.Cell>Gray</Table.Cell>
            <Table.Cell>Phone</Table.Cell>
            <Table.Cell>$799</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple Watch 5
            </Table.Cell>
            <Table.Cell>Red</Table.Cell>
            <Table.Cell>Wearables</Table.Cell>
            <Table.Cell>$999</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  ),
};

export const WithButton = Template.bind({});
WithButton.args = {
  children: (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>ADDED DATE</Table.HeadCell>
          <Table.HeadCell>JOB NUMBER</Table.HeadCell>
          <Table.HeadCell>PO</Table.HeadCell>
          <Table.HeadCell>BUYER</Table.HeadCell>
          <Table.HeadCell>STYLE</Table.HeadCell>
          <Table.HeadCell>LABEL CATEGORY</Table.HeadCell>
          <Table.HeadCell>STATUS</Table.HeadCell>
          <Table.HeadCell>ACTION</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">DELETE</span>
          </Table.HeadCell>
        </Table.Head>
        <TableBody>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">22-Nov-2023</Table.Cell>
            <Table.Cell>000001</Table.Cell>
            <Table.Cell>PO-001982</Table.Cell>
            <Table.Cell>VS</Table.Cell>
            <Table.Cell>STY-NYK009</Table.Cell>
            <Table.Cell>Care Lable</Table.Cell>
            <Table.Cell>
              <div className="flex items-center">
                <div className="mr-2 h-6 w-32 rounded-full bg-yellow-500">Pending_Approval</div>
              </div>
            </Table.Cell>
            <Table.Cell>
            <button className="rounded border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring">
                Continue
              </button>
            </Table.Cell>
            <Table.Cell>
            <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
           <HiTrash className="text-cyan-600 mr-2" size={24}/></a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">22-Nov-2023</Table.Cell>
            <Table.Cell>000001</Table.Cell>
            <Table.Cell>PO-001982</Table.Cell>
            <Table.Cell>VS</Table.Cell>
            <Table.Cell>STY-NYK009</Table.Cell>
            <Table.Cell>Care Lable</Table.Cell>
            <Table.Cell>
              <div className="flex items-center">
                <div className="mr-2 h-6 w-32 rounded-full bg-yellow-500">Pending_Approval</div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <button className="rounded border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white focus:border-blue-300 focus:outline-none focus:ring">
                Continue
              </button>
            </Table.Cell>
            <Table.Cell>
            <a href="/tables" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
           <HiTrash className="text-cyan-600 mr-2 "size={24} /></a>
            </Table.Cell>
          </Table.Row>
        </TableBody>
      </Table>
    </>
  ),
};
