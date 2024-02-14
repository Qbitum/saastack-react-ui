import type { FlowbitePaginationTheme } from './Pagination';

export const paginationTheme: FlowbitePaginationTheme = {
  base: '',
  layout: {
    table: {
      base: 'text-sm text-gray-200 dark:text-gray-400',
      span: 'font-semibold text-gray-200 dark:text-white',
    },
  },
  pages: {
    base: 'xs:mt-0 mt-2 inline-flex items-center -space-x-px',
    showIcon: 'inline-flex',
    previous: {
      base: 'ml-0 rounded-l-lg border border-gray-400 bg-white py-1.5 px-3 leading-tight text-gray-800 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
      icon: 'h-5 w-5',
    },
    next: {
      base: 'rounded-r-lg border border-gray-400 bg-white py-1.5 px-3 leading-tight text-gray-800 enabled:hover:bg-blue-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
      icon: 'h-5 w-5',
    },
    selector: {
      base: 'w-12 border border-gray-400 bg-white py-1.5 leading-tight text-gray-700 enabled:hover:bg-blue-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-red-700 enabled:dark:hover:text-white',
      active:
        'bg-blue-100 text-gray-700 font-bold hover:bg-blue-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
      disabled: 'opacity-50 cursor-normal',
    },
  },
};
