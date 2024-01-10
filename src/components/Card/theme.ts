import type { FlowbiteCardTheme } from './Card';

export const cardTheme: FlowbiteCardTheme = {
  root: {
    base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
    children: 'flex h-full flex-col justify-center gap-4 p-6',
    horizontal: {
      off: 'flex-col',
      on: 'flex-col md:max-w-xl md:flex-row',
    },
    href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    color: {
      info: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
      gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
      failure: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
      success: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
      warning: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
      red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
      green: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
      yellow: 'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
      blue: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
      cyan: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
      pink: 'text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800',
      lime: 'text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800',
      dark: 'text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300',
      indigo: 'text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800',
      purple: 'text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800',
      teal: 'text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800',
      light: 'text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200',
    },
  },
  img: {
    base: '',
    horizontal: {
      off: 'rounded-t-lg',
      on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
    },
  },
  color: {
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
    cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
    blue: '',
    dark: '',
    gray: '',
    green: '',
    indigo: '',
    light: '',
    lime: '',
    pink: '',
    teal: '',
    info: '',
    failure: '',
    success: '',
    warning: ''
  },
};
