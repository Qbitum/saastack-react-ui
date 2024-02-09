import type { FlowbiteTabsTheme } from './Tabs';

export const tabTheme: FlowbiteTabsTheme = {
  base: 'flex flex-col gap-1 h-full',
  tablist: {
    base: 'flex text-center',
    styles: {
      default: 'flex-wrap dark:border-gray-700',
      underline: 'flex-wrap -mb-px dark:border-gray-700',
      pills: 'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2',
      fullWidth:
        'w-full text-sm font-medium divide-x divide-themeGray-80 grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none',
    },
    tabitem: {
      base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none',
      styles: {
        default: {
          base: 'rounded-t-lg',
          active: {
            on: 'bg-themeGray-70 text-primary-100 font-bold dark:bg-gray-800 dark:text-cyan-500',
            off: 'text-themeGray-100 hover:bg-themeGray-60 hover:text-themeGray-200 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300',
          },
        },
        underline: {
          base: 'rounded-t-lg',
          active: {
            on: 'text-secondary-400 font-bold rounded-t-lg border-b-4 border-secondary-400 active dark:text-cyan-500 dark:border-cyan-500',
            off: 'border-b-4 border-transparent text-themeGray-100 hover:border-themeGray-70 hover:text-themeGray-200 dark:text-gray-400 dark:hover:text-gray-300',
          },
        },
        pills: {
          base: '',
          active: {
            on: 'rounded-lg bg-secondary-100 text-primary-100 font-bold',
            off: 'rounded-lg hover:text-themeGray-200 hover:bg-themeGray-60 dark:hover:bg-gray-800 dark:hover:text-white',
          },
        },
        fullWidth: {
          base: 'ml-0 first:ml-0 w-full rounded-none flex',
          active: {
            on: 'p-4 text-primary-100 font-bold bg-themeGray-70 active dark:bg-gray-700 dark:text-white rounded-none',
            off: 'bg-white hover:text-themeGray-200 hover:bg-themeGray-60 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none',
          },
        },
      },
      icon: 'mr-2 h-5 w-5',
    },
  },
  tabitemcontainer: {
    base: 'flex-auto',
    styles: {
      default: '',
      underline: '',
      pills: '',
      fullWidth: '',
    },
  },
  tabpanel: 'py-1 h-full',
};
