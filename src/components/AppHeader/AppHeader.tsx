import type { ComponentProps, FC, ReactNode } from 'react';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteStateColors } from '../Flowbite';
import { twMerge } from 'tailwind-merge';
import { props } from 'cypress/types/bluebird';

export interface FlowbiteAppHeaderTheme {
  root: FlowbiteAppHeaderRootTheme;
}

export interface FlowbiteAppHeaderRootTheme {
  base: string;
  colors: AppHeaderColors;
  disabled: string;
}

export interface AppHeaderColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface AppHeaderProps extends Omit<ComponentProps<'div'>, 'color'> {
  children?: ReactNode;
  className?: string;
  color?: keyof AppHeaderColors;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteAppHeaderTheme>;
  value?: string;
}

export const AppHeader: FC<AppHeaderProps> = ({
  children,
  className,
  value,
  color = 'default',
  theme: customTheme = {},

}) => {
  const theme = mergeDeep(getTheme().label, customTheme);

  return (
   <div
      className={twMerge(theme.root.base, theme.root.colors[color] && theme.root.disabled, className)}
      data-testid="flowbite-label"
      {...props}
    >
      {value ?? children ?? ''}
   </div>
  );
};

AppHeader.displayName = 'AppHeader';
