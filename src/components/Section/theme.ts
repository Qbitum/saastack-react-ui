import type { FlowbiteSectionTheme } from './Section';

export const SectionTheme: FlowbiteSectionTheme = {
  root: {
    base: 'text-sm font-medium border-gray-200 dark:border-gray-700 h-fit',
    disabled: '',
    alignedLeft: {
      on: 'ml-0',
      off: ''
    },
    alignedRight: {
      on: 'mr-0',
      off: ''
    },
    colors: {
      primary: 'text-primary-200 bg-primary-60 border-primary-80',
      secondary: 'text-secondary-200 bg-secondary-60 border-secondary-80',
      tertiary: 'text-tertiary-200 bg-tertiary-60 border-tertiary-80',
      default: 'text-gray-900 dark:text-white ',
      info: 'text-cyan-500 dark:text-cyan-600',
      failure: 'text-red-700 dark:text-red-500 bg-red-400 border-red-300',
      warning: 'text-yellow-500 dark:text-yellow-600',
      success: 'text-green-700 dark:text-green-500',
      blue: 'text-black bg-blue-300 border-blue-100',
      cyan: 'text-black bg-cyan-300 border-cyan-100',
      dark: '',
      gray: 'text-black bg-gray-300 border-gray-100',
      green: 'text-black bg-green-300 border-green-100',
      indigo: 'text-black bg-indigo-300 border-indigo-100',
      light: '',
      lime: 'text-black bg-lime-300 border-lime-100',
      pink: 'text-black bg-pink-300 border-pink-100',
      purple: 'text-black bg-purple-300 border-purple-100',
      red: 'text-black bg-red-300 border-red-100',
      teal: 'text-black bg-teal-300 border-teal-100',
      yellow: 'text-black bg-yellow-300 border-yellow-100'
    },
    bordered: {
      color: {
        gray: 'border border-gray-400 bg-white dark:border-white',
        primary: 'border border-primary-100 bg-white',
        secondary: 'border border-secondary-100 bg-white',
        tertiary: 'border border-tertiary-100 bg-white',
        failure: 'border border-red-100 bg-white',
        success: 'border border-themeSuccess-100 bg-white',
        info: 'border border-themeInfo-100 bg-white',
        warning: 'border border-themeWarning-100 bg-white',
      },
      off: '',
      // on: 'flex justify-center bg-grey text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full',
      on: 'border-1'
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



        