import { ComponentProps, FC, ReactNode } from 'react';
import type { FlowbiteColors } from '../Flowbite';
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
  color: FlowbiteColors;
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
  color = 'white',
  theme: customTheme = {},

  }) => {
    const theme = mergeDeep(getTheme().pageWrapper, customTheme);

    const wrapperClasses = classNames(
      twMerge(theme.root.base, 
        theme.root.color[color], 
        className)           
        
    );

  return (
      <div className={wrapperClasses} data-testid="flowbite-PageWrapper">
    <Mounted>{children}</Mounted>
  </div>
  );
};

PageWrapper.displayName = 'PageWrapper';
