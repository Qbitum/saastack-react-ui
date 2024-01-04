import { type ComponentProps, type FC, type ReactNode } from 'react';
import type { FlowbiteStateColors } from '../Flowbite';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import { DeepPartial } from '~/src/types';
import classNames from 'classnames';
// import Mounted from '../Mounted';

export interface FlowbitePageTheme {
  root: FlowbitePageRootTheme;
}

export interface FlowbitePageRootTheme {
  base: string;
  colors: PageColors;
  disabled: string;
  // border: string;
  // radius: string;
  align: string;
}

export interface PageColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface PageProps extends Omit<ComponentProps<'div'>, 'color'> {
  children?: ReactNode;
  isProtected?: boolean;
  className?: string;
  theme?: DeepPartial<FlowbitePageTheme>;
  // border?: string;
  // radius?: string;
  align?: string;
}

export const Page: FC<PageProps> = ({
  children,
  className,
  theme: customTheme = {},
  align,

  }) => {
    const theme = mergeDeep(getTheme().label, customTheme);

    const pageClasses = classNames(
      twMerge(theme.root.base && theme.root.disabled, className,align),  
    );

  return (
      <div className={pageClasses} data-testid="flowbite-Page">
   
      {children}
    
  </div>
  );
};

Page.displayName = 'Page';