import { ComponentProps,  FC,  ReactNode } from 'react';
import type { FlowbiteStateColors } from '../Flowbite';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import { DeepPartial } from '../../types';
import classNames from 'classnames';

export interface FlowbitePageTheme {
  base: string;
  colors: PageColors;
  radius: string;
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
  color?:string;
  theme?: DeepPartial<FlowbitePageTheme>;
  align?: string;
}

export const Page: FC<PageProps> = ({
  children,
  className,
  color = 'default',
  theme: customTheme = {},
  align,

  }) => {
    const theme = mergeDeep(getTheme().page, customTheme);

    const pageClasses = classNames(
      twMerge(theme.base, 
        theme.colors[color],
        className,
        align),  
    );

  return (
      <div className={pageClasses} data-testid="flowbite-Page">
   
      {children}
    
  </div>
  );
};

Page.displayName = 'Page';