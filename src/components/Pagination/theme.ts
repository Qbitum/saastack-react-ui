import type { FlowbitePaginationTheme } from './Pagination';

export const paginationTheme: FlowbitePaginationTheme = {
  base: '',
  layout: {
    table: {
      base: 'text-sm text-themeGray-100 dark:text-gray-400',
      span: 'font-semibold text-themeGray-100 dark:text-white',
    },
  },
  pages: {
    base: 'xs:mt-0 mt-2 inline-flex items-center -space-x-px',
    showIcon: 'inline-flex',
    previous: {
      base: 'ml-0 rounded-l-lg border border-themeGray-80 bg-white py-1.5 px-3 leading-tight text-themeGray-100 enabled:hover:bg-themeGray-60 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
      icon: 'h-5 w-5',
    },
    next: {
      base: 'rounded-r-lg border border-themeGray-80 bg-white py-1.5 px-3 leading-tight text-themeGray-100 enabled:hover:bg-themeGray-60 enabled:hover:text-themeGray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
      icon: 'h-5 w-5',
    },
    selector: {
      base: 'w-12 border border-themeGray-80 bg-white py-1.5 leading-tight text-themeGray-100 enabled:hover:bg-themeGray-60 enabled:hover:text-themeGray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
      active:
        'bg-themeGray-70 text-primary-100 font-bold hover:bg-themeGray-60 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
      disabled: 'opacity-50 cursor-normal',
    },
  },
};
