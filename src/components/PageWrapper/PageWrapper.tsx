import { type ComponentProps, type FC, type ReactNode } from 'react';
import type { FlowbiteColors, FlowbiteStateColors } from '../Flowbite';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import { DeepPartial } from '~/src/types';
import classNames from 'classnames';
import Mounted from '../Mounted';
import { disabled } from '~/examples/button';

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
  theme?: DeepPartial<FlowbitePageWrapperTheme>;
}

export const PageWrapper: FC<PageWrapperProps> = ({
  children,
  className,
  color = 'default',
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
