import type { FlowbiteParagraphTheme } from './Paragraph';

export const ParagraphTheme: FlowbiteParagraphTheme = {
  root: {
    base: 'text-sm font-medium',
    color: {
      default: 'text-gray-900 dark:text-white',
      info: 'text-cyan-500 dark:text-cyan-600',
      failure: 'text-red-700 dark:text-red-500',
      warning: 'text-yellow-500 dark:text-yellow-600',
      success: 'text-green-700 dark:text-green-500',
      blue: '',
      cyan: '',
      dark: '',
      gray: '',
      green: '',
      indigo: '',
      light: '',
      lime: '',
      pink: '',
      purple: '',
      red: '',
      teal: '',
      yellow: ''
    },
    size:{
      xl: 'text-xl',
      lg: 'text-lg',
      base: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
      '2xl': '',
      '3xl': '',
      '4xl': '',
      '5xl': '',
      '6xl': '',
      '7xl': ''
    },
    fontWeight: {
      extrabold: 'font-extrabold',
      bold: 'font-bold',
      semibold: 'font-semibold',
      normal: 'font-normal',
      light: 'font-light',
    }
  },
};
