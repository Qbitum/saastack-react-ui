import type { FlowbitePageWrapperTheme } from './PageWrapper';

export const PageWrapperTheme: FlowbitePageWrapperTheme = {
  root: {
    base: 'text-sm font-medium grid grid-flow-row overflow-hidden h-[calc(100%-60px)]',
    color: {
      default: 'bg-appBg-100',
      primary: 'bg-primary-100',
      secondary: 'bg-secondary-100',
      tertiary: 'bg-tertiary-100',
      info: '',
      failure: '',
      success: '',
      warning: '',
      blue: 'text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',

      green: 'text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700',

      yellow: 'text-white bg-amber-400 border border-transparent enabled:hover:bg-amber-500 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700',
      cyan: '',
      dark: '',
      gray: '',
      indigo: '',
      light: '',
      lime: '',
      pink: '',
      purple: 'text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900',
      red: 'text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700',
      teal: 'text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700',
      white: 'text-black bg-white',
    },
  },
};
