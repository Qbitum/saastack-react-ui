import type { FlowbiteSectionTheme } from './Section';

export const SectionTheme: FlowbiteSectionTheme = {
  root: {
    base: 'text-sm font-medium dark:border-gray-700 h-fit',
    disabled: '',
    colors: {
      default: 'text-gray-900 dark:text-white',
      info: 'text-cyan-500 dark:text-cyan-600',
      failure: 'text-red-700 dark:text-red-500',
      warning: 'text-yellow-500 dark:text-yellow-600',
      success: 'text-green-700 dark:text-green-500',
    },
    bordered: {
      color: {
        gray: 'border border-gray-400 bg-white dark:border-white',
        primary: 'border border-primary-100 bg-white',
        secondary: 'border border-secondary-100 bg-white',
        tertiary: 'border border-tertiary-100 bg-white',
        failure: 'border border-themeFailure-100 bg-white',
        success: 'border border-themeSuccess-100 bg-white',
        info: 'border border-themeInfo-100 bg-white',
        warning: 'border border-themeWarning-100 bg-white',
      },
      off: '',
      // on: 'flex justify-center bg-grey text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full',
      on: 'border-8 border-sky-500 '
      //used button outline for section border
    },
    radius: {
      xs: 'rounded',
      sm: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-full'
    },
  },
};



        