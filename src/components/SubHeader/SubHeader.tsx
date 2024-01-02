import type { ComponentProps, FC, ReactNode } from 'react';
// import { twMerge } from 'tailwind-merge';
// import { mergeDeep } from '../../helpers/merge-deep';
// import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteStateColors } from '../Flowbite';

export interface FlowbiteSubHeaderTheme {
  root: FlowbiteSubHeaderRootTheme;
}

export interface FlowbiteSubHeaderRootTheme {
  base: string;
  colors: SubHeaderColors;
  disabled: string;
}

export interface SubHeaderColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface SubHeaderProps extends Omit<ComponentProps<'div'>, 'color'> {
  children?: ReactNode;
  className?: string;
  color?: keyof SubHeaderColors;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteSubHeaderTheme>;
  value?: string;
}

export const SubHeader: FC<SubHeaderProps> = ({
  children,
  // className,
  // color = 'default',
  // theme: customTheme = {},
  // ...props
}) => {
  // const theme = mergeDeep(getTheme().label, customTheme);

  return (
    <div>
			{children}
		</div>
  );
};

SubHeader.displayName = 'SubHeader';
