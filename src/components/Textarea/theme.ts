import type { FlowbiteTextareaTheme } from './Textarea';

export const textareaTheme: FlowbiteTextareaTheme = {
  base: 'block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm',
  colors: {
    gray: 'border-themeGray-100 bg-white text-defultText placeholder-themeGray-80 focus:border-themeGray-200 focus:ring-themeGray-80 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
        
        info: 'border-themeInfo-100 bg-themeInfo-60 text-defultText placeholder-themeInfo-80 focus:border-themeInfo-200 focus:ring-themeInfo-80 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',

        failure:
          'border-themeFailure-100 bg-themeFailure-60 text-defultText placeholder-themeFailure-80 focus:border-themeFailure-200 focus:ring-themeFailure-80 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
        warning:
          'border-themeWarning-100 bg-themeWarning-60 text-defultText placeholder-themeWarning-80 focus:border-themeWarning-200 focus:ring-themeWarning-80 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
        success:
          'border-themeSuccess-100 bg-themeSuccess-60 text-defultText placeholder-themeSuccess-80 focus:border-themeSuccess-200 focus:ring-themeSuccess-80 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',

        secondary: 'border-secondary-100 bg-white text-defultText placeholder-secondary-80 focus:border-secondary-200 focus:ring-secondary-60 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
  },
  withShadow: {
    on: 'shadow-sm dark:shadow-sm-light',
    off: '',
  },
};
