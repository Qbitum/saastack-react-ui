import { FlowbiteSeparatorTheme } from "./Separator";

export const separatorTheme: FlowbiteSeparatorTheme = {
  base: 'min-h-6 border-r-neutral-500 mr-2',
  colors: {
    default:'border-r-sky-300',
    error: 'border-r-red-700',
    primary:'border-r-primary-400',
    secondary: 'border-r-secondary-400',
    white:'border-r-white'
  },
  show: {
    off: '',
    on: '',
  },
  sizes: {
    sm:'border-r',
    md: 'border-r-2',
    lg: 'border-r-4',
  },
};
