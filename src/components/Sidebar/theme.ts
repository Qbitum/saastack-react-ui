import type { FlowbiteSidebarTheme } from './Sidebar';

export const sidebarTheme: FlowbiteSidebarTheme = {
  root: {
    base: 'h-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-r-lg',
    collapsed: {
      on: 'w-20',
      off: 'w-64',
    },
    inner: 'h-full bg-menu bg-cover bg-center text-center shadow-lg pb-4',
  },
  collapse: {
    button:
      'group flex w-full items-center rounded-lg text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
    icon: {
      base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
      open: {
        off: '',
        on: 'text-gray-900',
      },
    },
    label: {
      base: 'ml-3 flex-1 whitespace-nowrap text-left',
      icon: {
        base: 'h-6 w-6 transition ease-in-out delay-0',
        open: {
          on: 'rotate-180',
          off: '',
        },
      },
    },
    list: 'space-y-2 py-2',
  },
  cta: {
    base: 'mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700',
    color: {
      blue: 'bg-cyan-50 dark:bg-cyan-900',
      dark: 'bg-dark-50 dark:bg-dark-900',
      failure: 'bg-red-50 dark:bg-red-900',
      gray: 'bg-alternative-50 dark:bg-alternative-900',
      green: 'bg-green-50 dark:bg-green-900',
      light: 'bg-light-50 dark:bg-light-900',
      red: 'bg-red-50 dark:bg-red-900',
      purple: 'bg-purple-50 dark:bg-purple-900',
      success: 'bg-green-50 dark:bg-green-900',
      yellow: 'bg-yellow-50 dark:bg-yellow-900',
      warning: 'bg-yellow-50 dark:bg-yellow-900',
    },
  },
  item: {
    base: 'flex items-center justify-center p-1 rounded text-sm font-normal hover:text-sky-400 hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700',
    active: 'bg-blue-50 dark:bg-gray-800',
    collapsed: {
      insideCollapse: 'group pl-8 transition duration-75',
      noIcon: 'font-bold',
    },
    content: {
      base: 'px-3 flex-1 whitespace-nowrap',
    },
    icon: {
      base: 'h-6 w-6 flex-shrink-0 transition duration-75 dark:text-gray-400 dark:group-hover:text-white',
      active: 'text-sky-400',
    },
    label: {
      base:'text-xs font-bold text-center',
      active:'text-sky-400'
    },
    listItem: 'text-blue-200',
  },
  items: {
    base: '',
  },
  itemGroup: {
    base: 'mt-4 space-y-5 px-4 mb-4 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 dark:border-gray-700',
  },
  logo: {
    base: 'mb-5 flex items-center bg-sky-800 p-4 rounded-r-lg',
    collapsed: {
      on: 'hidden',
      off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
    },
    img: 'h-12 shadow sm:h-10',
  },
};
