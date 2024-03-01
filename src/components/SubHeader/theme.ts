import type { FlowbiteSubHeaderTheme } from "./SubHeader";

export const subheaderTheme: FlowbiteSubHeaderTheme = {
  base: 'mb-4 p-2 rounded justify-between items-center flex flex-initial drop-shadow-lg',
  background: {
    default:'bg-white',
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
    sm:'min-h-10',
    md: 'min-h-12',
    lg: 'min-h-14',
  },
};
