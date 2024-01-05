import { ComponentProps, FC, ReactNode } from 'react';
import type { FlowbiteColors, FlowbiteStateColors } from '../Flowbite';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import { DeepPartial } from '../../types';
import classNames from 'classnames';
import Mounted from '../Mounted';

export interface FlowbitePageWrapperTheme {
  root: FlowbitePageWrapperRootTheme;
}

export interface FlowbitePageWrapperRootTheme {
  base: string;
  colors: PageWrapperColors;
  disabled: string;
}

export interface PageWrapperColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface PageWrapperProps extends Omit<ComponentProps<'div'>, 'color'> {
  children?: ReactNode;
  color?: keyof FlowbiteColors;
  isProtected?: boolean;
  className?: string;
  disabled:boolean;
  theme?: DeepPartial<FlowbitePageWrapperTheme>;
}

export const PageWrapper: FC<PageWrapperProps> = ({
  children,
  className,
  color = 'default',
  disabled =false,
  theme: customTheme = {},

  }) => {
    const theme = mergeDeep(getTheme().label, customTheme);

    const wrapperClasses = classNames(
      twMerge(theme.root.base, theme.root.colors[color], disabled && theme.root.disabled, className)           
        
    );

  return (
      <div className={wrapperClasses} data-testid="flowbite-PageWrapper">
    <Mounted>{children}</Mounted>
  </div>
  );
};

PageWrapper.displayName = 'PageWrapper';
