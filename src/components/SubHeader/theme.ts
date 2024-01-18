import { FlowbiteSubHeaderTheme } from "./SubHeader";

export const subheaderTheme: FlowbiteSubHeaderTheme = {
  base: 'px-4 py-3 bg-white rounded-2xl shadow justify-between items-center flex',
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
    sm:'min-h-4',
    md: 'min-h-8',
    lg: 'min-h-10',
  },
};
