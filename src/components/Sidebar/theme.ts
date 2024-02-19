import type { FlowbiteSidebarTheme } from './Sidebar';

export const sidebarTheme: FlowbiteSidebarTheme = {
  root: {
    base: 'h-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-r-3xl ',
    collapsed: {
      on: 'w-20 ',
      off: 'w-56',
    },
    inner: 'h-full bg-menu bg-cover bg-center text-center rounded-r-3xl',
    
  },
  collapse: {
    button:
      'group flex w-full items-center rounded-lg text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ',
    icon: {
      base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white rounded-r-3xl ',
      open: {
        off: '',
        on: 'text-gray-900 ',
      },
    },
    label: {
      base: 'ml-3 flex-1 whitespace-nowrap text-left ',
      icon: {
        base: 'h-6 w-6 transition ease-in-out delay-0 ',
        open: {
          on: 'rotate-180',
          off: '',
        },
      },
    },
  

    list: 'space-y-2 py-2',
  },
  cta: {
    base: ' rounded-lg p-4 bg-gray-100 dark:bg-gray-700 rounded-r-3xl',
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
    base: 'flex items-center justify-center p-0.5 m-1 rounded-lg text-sm font-normal hover:text-sky-400 hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700  ',
    active: 'bg-blue-50 dark:bg-gray-800 rounded-lg ',
    collapsed: {
      insideCollapse: 'group pl-2 transition duration-75 hover:w-5 hover:h-8 ',
      noIcon: 'font-bold',
    },
    content: {
      base: 'px-3 flex-1 whitespace-nowrap ',
    },
    icon: {
      base: 'h-8 w-5 flex-shrink-0 transition duration-75 dark:text-gray-400 dark:group-hover:text-white hover:w-5 hover:h-8',
      active: 'text-sky-400',
    },
    label: {
      base:'text-xs font-bold text-center mt-1',
      active:'text-white'
    },
    listItem: 'text-blue-200',
  },
  items: {
    base: '',
  },
  itemGroup: {
    base: 'space-y-5 px-4 mb-1  border-gray-200 first:mt-0 first:border-t-0 dark:border-gray-700 ',
  },
  logo: {
    base: 'mb-8 flex items-center bg-sky-800 p-4 rounded-tr-3xl ',
    collapsed: {
      on: 'hidden ',//h-24
      off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
    },
    img: 'h-12 shadow sm:h-10',
  },
};
