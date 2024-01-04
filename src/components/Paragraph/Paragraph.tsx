import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../../types';
import type { FlowbiteSizes, FlowbiteStateColors } from '../Flowbite';
import type { FlowbiteColors, FlowbiteFontWeight } from '../Flowbite';
import { getTheme } from '~/src/theme-store';
import { mergeDeep } from '~/src/helpers/merge-deep';

export interface FlowbiteParagraphTheme {
  root: FlowbiteParagraphRootTheme;
}

export interface FlowbiteParagraphRootTheme {
  base: string;
  color: FlowbiteColors;
  size: ParagraphSizes;
  fontWeight: ParagraphFontWeight;
}

export interface ParagraphSizes extends Pick<FlowbiteSizes, '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' > {
  [key: string]: string;
}

export interface ParagraphFontWeight extends Pick<FlowbiteFontWeight, 'extrabold' | 'bold' | 'semibold' | 'normal' | 'light'> {
  [key: string]: string;
}
export interface ParagraphColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface ParagraphProps extends Omit<ComponentProps<'p'>, 'color'> {
  color?: keyof FlowbiteColors;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteParagraphTheme>;
  size?: keyof ParagraphSizes;
  fontWeight?: keyof ParagraphFontWeight;
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  color = 'default',
  className,
  size = 'md',
  fontWeight = 'normal',
  theme: customTheme = {},
  ...props

}) => {
  const theme = mergeDeep(getTheme().paragraph, customTheme);

  return (
    <p
    className={twMerge(
      theme.root.base,
      theme.root.color[color],
      theme.root.size[size],
      theme.root.fontWeight[fontWeight],
      className,
    )}
    data-testid="flowbite-ParagraphText"
    {...props}
    >
      {children && <span>{children}</span>}
    </p>
  );
};

Paragraph.displayName = 'Paragraph';
