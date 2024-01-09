import { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import { DeepPartial } from "../../types";

export interface FlowbiteSeparatorTheme {
  base:  string;
  colors: SeparatorColors;
  show:  SeparatorShow;
  sizes: SeparatorSizes;
}

export interface SeparatorColors {
  error: string;
  default: string;
  white:string
  [key:string]:string
}

export interface SeparatorShow {
  off: string;
  on:  string;
}

export interface SeparatorSizes {
  sm:string;
  md: string;
  lg: string;
}

export interface SeparatorProps extends Omit<ComponentProps<'div'>, 'color'> {
  color?: keyof SeparatorColors;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteSeparatorTheme>;
  size?:keyof SeparatorSizes;
}

export const Separator: FC<SeparatorProps> = ({
  className,
  color = 'default',
  size = 'sm',
  theme:customTheme = {},
  ...props }) => {

  const theme = mergeDeep(getTheme().separator, customTheme);

	return <div className={twMerge(
    theme.base,
    theme.colors[color],
    theme.sizes[size],
    className)} {...props}></div>;
};