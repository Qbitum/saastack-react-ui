import type { FlowbiteDatepickerTheme } from '.';

export const datePickerTheme: FlowbiteDatepickerTheme = {
  root: {
    base: 'relative',
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 block pt-2 ',
      inline: 'relative top-0 z-auto',
      inner: 'inline-block rounded-lg bg-white p-4 shadow-lg ',
    },
    
    header: {
      base: '',
      title: 'px-2 py-3 text-center font-semibold text-gray-900 dark:text-white',
      selectors: {
        base: 'flex justify-between mb-2',
        button: {
          base: 'text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-blue-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-1  view-switch',//focus:ring-gray-200
          prev: '',
          next: '',
          view: '',
        },
      },
    },
    view: {
      base: 'p-1',
    },
    footer: {
      base: 'flex mt-2 space-x-2',
      button: {
        base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-1',
        today: 'bg-blue-100  text-black hover:bg-sky-600 dark:bg-blue-100 dark:hover:bg-sky-600',
        clear:
          'border  bg-white text-gray-900 hover:bg-sky-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-sky-600',
      },
    },
  },
  views: {
    days: {
      header: {
        base: 'grid grid-cols-7 mb-1',
        title: 'dow h-6 text-center text-sm font-medium leading-6 text-gray-300 dark:text-gray-400',
      },
      items: {
        base: 'grid w-64 grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-blue-100 dark:text-white dark:hover:bg-sky-600 ',
          selected: 'bg-sky-600 text-white hover:bg-sky-600',
          disabled: 'text-gray-500',
        },
      },
    },
    months: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
          selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
          disabled: 'text-gray-500',
        },
      },
    },
    years: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
          selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
          disabled: 'text-gray-500',
        },
      },
    },
    decades: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
          selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
          disabled: 'text-gray-500',
        },
      },
    },
  },
};
