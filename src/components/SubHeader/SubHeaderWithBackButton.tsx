import type { ComponentProps, FC, ReactNode } from 'react';
// import { twMerge } from 'tailwind-merge';
// import { mergeDeep } from '../../helpers/merge-deep';
// import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteStateColors } from '../Flowbite';

export interface FlowbiteSubHeaderWithBackButtonTheme {
  root: FlowbiteSubHeaderWithBackButtonRootTheme;
}

export interface FlowbiteSubHeaderWithBackButtonRootTheme {
  base: string;
  colors: SubHeaderWithBackButtonColors;
  disabled: string;
}

export interface SubHeaderWithBackButtonColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface SubHeaderWithBackButtonProps extends Omit<ComponentProps<'div'>, 'color'> {
  children?: ReactNode;
  className?: string;
  color?: keyof SubHeaderWithBackButtonColors;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteSubHeaderWithBackButtonTheme>;
  value?: string;
}

export const SubHeaderWithBackButton: FC<SubHeaderWithBackButtonProps> = ({
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

SubHeaderWithBackButton.displayName = 'SubHeaderWithBackButton';
