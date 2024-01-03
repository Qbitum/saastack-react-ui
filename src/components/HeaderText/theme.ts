import type { FlowbiteHeaderTextTheme } from './HeaderText';

export const headerTextTheme: FlowbiteHeaderTextTheme = {
  root: {
    base: 'flex h-fit',
    color: {
    default: 'text-defultText-100',
    primary:'text-primary-100',
    secondary:'text-secondary-100',
    tertiary: 'text-tertiary-100',
    highlight: 'text-highlight-100',

    success:'text-btntext-themeGreen bg-themeGreen-100 border border-transparent enabled:hover:bg-themeGreen-200 focus:ring-4 focus:ring-themeGreen-60 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800',
    
    failure:'text-btntext-themeRed bg-themeRed-100 border border-transparent enabled:hover:bg-themeRed-200 focus:ring-4 focus:ring-themeRed-60 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900',

    gray:'text-btntext-themeGray bg-themeGray-100 border border-transparent enabled:hover:bg-themeGray-200 focus:ring-4 focus:ring-themeGray-60',
      info: 'text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
      warning:'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
      indigo:'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
      purple:
        'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300',
      blue: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
      cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
      dark: 'bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700',
      light:
        'bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500',
      green:
        'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
      lime: 'bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300',
      red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
      teal: 'bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300',
      yellow:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
    },
    href: 'group',
    size: {
      xs: '',
      sm: '',
      h1: 'text-2xl',
      h2: 'text-xl',
      h3: 'text-lg',
      h4: 'text-base',
      h5: 'text-sm',
      h6: 'text-xs',
    },
    fontWeight: {
      extrabold: 'font-extrabold',
      bold: 'font-bold',
      semibold: 'font-semibold',
      normal: 'font-normal',
      light: 'font-light',
    },
  },
  icon: {
    off: '',
    on: 'rounded-full p-1.5',
    size: {
      xs: 'w-3 h-3',
      sm: 'w-3.5 h-3.5',
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    },
  },
};
