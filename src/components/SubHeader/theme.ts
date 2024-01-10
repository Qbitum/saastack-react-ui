import { FlowbiteSubHeaderTheme } from "./SubHeader";

export const subheaderTheme: FlowbiteSubHeaderTheme = {
  base: 'min-h-6 px-4 py-2 grid grid-rows-1 grid-cols-6',
  background: {
    default:'',
    sky:'bg-sky-100',
    error: 'bg-red-700',
    primary:'bg-slate-300',
    secondary: 'bg-secondary-400',
    white:'border-r-white'
  },
  show: {
    off: '',
    on: '',
  },
  heights: {
    sm:'min-h-6',
    md: 'min-h-8',
    lg: 'min-h-10',
  },
};
